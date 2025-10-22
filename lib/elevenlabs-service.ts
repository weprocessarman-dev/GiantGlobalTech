export interface ElevenLabsConfig {
  agentId: string;
}

export class ElevenLabsService {
  private config: ElevenLabsConfig;
  private onVolumeChange?: (volume: number) => void;
  private onFrequencyChange?: (frequencies: number[]) => void;
  private audioInterval?: NodeJS.Timeout;
  private isConnected = false;
  private conversationState: 'idle' | 'listening' | 'speaking' | 'thinking' = 'idle';
  private lastStateChange = 0;

  constructor(config: ElevenLabsConfig) {
    this.config = config;
  }

  async startConversation(
    onVolumeChange: (volume: number) => void,
    onFrequencyChange: (frequencies: number[]) => void
  ) {
    try {
      this.onVolumeChange = onVolumeChange;
      this.onFrequencyChange = onFrequencyChange;

      this.createWidget();
      
      setTimeout(() => {
        this.isConnected = true;
        this.startAudioFeedback();
      }, 2000);
      
      return true;
    } catch (error) {
      console.error("Failed to start ElevenLabs conversation:", error);
      return false;
    }
  }

  private createWidget() {
    console.log('Creating widget with agent ID:', this.config.agentId);
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    if (existingScript) {
      console.log('ElevenLabs script already loaded');
      return;
    }
    
    // Add the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.setAttribute('data-agent-id', this.config.agentId);
    
    script.onload = () => {
      console.log('ElevenLabs widget script loaded');
    };
    
    script.onerror = () => {
      console.error('Failed to load ElevenLabs widget script');
    };
    
    document.head.appendChild(script);
  }



  async endConversation() {
    // Remove the widget
    const widgets = document.querySelectorAll('[data-agent-id]');
    widgets.forEach(widget => widget.remove());
    
    this.isConnected = false;
    this.stopAudioFeedback();
  }



  private startAudioFeedback() {
    this.conversationState = 'listening';
    this.lastStateChange = Date.now();
    
    this.audioInterval = setInterval(() => {
      if (!this.isConnected) {
        return;
      }

      const now = Date.now();
      const timeSinceStateChange = (now - this.lastStateChange) / 1000;
      
      // Dynamic state transitions for realistic conversation flow
      if (this.conversationState === 'listening' && timeSinceStateChange > 2 + Math.random() * 3) {
        this.conversationState = 'thinking';
        this.lastStateChange = now;
      } else if (this.conversationState === 'thinking' && timeSinceStateChange > 0.5 + Math.random() * 1) {
        this.conversationState = 'speaking';
        this.lastStateChange = now;
      } else if (this.conversationState === 'speaking' && timeSinceStateChange > 3 + Math.random() * 4) {
        this.conversationState = 'listening';
        this.lastStateChange = now;
      }

      const time = now * 0.001;
      let volume = 0;
      let frequencies: number[] = [];
      
      switch (this.conversationState) {
        case 'listening':
          volume = 0.15 + Math.sin(time * 3) * 0.05 + Math.random() * 0.1;
          frequencies = Array.from({ length: 128 }, (_, i) => {
            return 25 + Math.sin(time + i * 0.2) * 15 + Math.random() * 20;
          });
          break;
          
        case 'thinking':
          volume = 0.25 + Math.sin(time * 6) * 0.1;
          frequencies = Array.from({ length: 128 }, (_, i) => {
            return 40 + Math.sin(time * 2 + i * 0.15) * 25 + Math.random() * 15;
          });
          break;
          
        case 'speaking':
          volume = 0.5 + Math.sin(time * 4) * 0.25 + Math.random() * 0.2;
          frequencies = Array.from({ length: 128 }, (_, i) => {
            const baseFreq = Math.sin(time * 2.5 + i * 0.08) * 120 + 160;
            const speechPattern = Math.sin(time * 12 + i * 0.03) * 40;
            const naturalVariation = Math.sin(time * 0.7 + i * 0.12) * 30;
            return Math.max(0, Math.min(255, baseFreq + speechPattern + naturalVariation + Math.random() * 25));
          });
          break;
      }
      
      this.onVolumeChange?.(volume);
      this.onFrequencyChange?.(frequencies);
    }, 50);
  }

  private stopAudioFeedback() {
    if (this.audioInterval) {
      clearInterval(this.audioInterval);
      this.audioInterval = undefined;
    }
    
    this.onVolumeChange?.(0);
    this.onFrequencyChange?.([]);
  }

  isActive(): boolean {
    return this.isConnected;
  }
}