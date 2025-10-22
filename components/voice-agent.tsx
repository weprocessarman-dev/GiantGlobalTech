'use client';

import { useEffect, useRef } from 'react';

interface VoiceAgentProps {
  shouldStart?: boolean;
  shouldEnd?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function VoiceAgent({ shouldStart, shouldEnd, onStart, onEnd }: VoiceAgentProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create hidden widget
    const widgetContainer = document.createElement('div');
    const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'agent_0701k5ctnzrxf40b5jzet2hrkea5';
    widgetContainer.innerHTML = `
      <elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>
    `;
    console.log('🤖 Using agent ID:', agentId);
    
    // Hide it completely behind Spline model
    widgetContainer.style.cssText = `
      position: fixed !important;
      left: -9999px !important;
      top: -9999px !important;
      width: 1px !important;
      height: 1px !important;
      opacity: 0 !important;
      pointer-events: none !important;
      z-index: -9999 !important;
    `;
    
    document.body.appendChild(widgetContainer);

    // Load widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.onload = () => {
      console.log('✅ ElevenLabs widget loaded');
    };
    document.head.appendChild(script);

    return () => {
      widgetContainer.remove();
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (shouldStart) {
      startCall();
    }
  }, [shouldStart]);

  useEffect(() => {
    if (shouldEnd) {
      endCall();
    }
  }, [shouldEnd]);

  const startCall = () => {
    setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      console.log('🔍 Widget found:', widget);
      
      if (widget) {
        const shadowRoot = widget.shadowRoot;
        console.log('🔍 Shadow root:', shadowRoot);
        
        if (shadowRoot) {
          // Remove debug logging
          // const allButtons = shadowRoot.querySelectorAll('button');
          
          // Target the 'Start a call' button specifically
          const startCallButton = shadowRoot.querySelector('button[title="Start a call"]');
          
          if (startCallButton) {
            console.log('🎯 Clicking Start a call button');
            (startCallButton as HTMLButtonElement).click();
            console.log('🎯 Start a call button clicked!');
          } else {
            console.log('❌ Start a call button not found');
          }
        }
      }
    }, 2000); // Longer wait
    onStart?.();
  };

  const endCall = () => {
    setTimeout(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        const shadowRoot = widget.shadowRoot;
        if (shadowRoot) {
          // Log all buttons during call to find end button
          const allButtons = shadowRoot.querySelectorAll('button');
          console.log('🔍 Buttons during call:', allButtons.length);
          allButtons.forEach((btn, index) => {
            console.log(`End Button ${index}:`, btn.className, btn.textContent, btn.title);
          });
          
          // Try multiple selectors for end call button
          const endCallButton = shadowRoot.querySelector('button[title*="End"]') ||
                                shadowRoot.querySelector('button[title*="Stop"]') ||
                                shadowRoot.querySelector('button._btn_1968y_132._secondary_1968y_203') ||
                                shadowRoot.querySelector('button:last-child');
          
          if (endCallButton) {
            console.log('🛑 Clicking End call button:', endCallButton);
            (endCallButton as HTMLButtonElement).click();
            console.log('🛑 End call button clicked!');
          } else {
            console.log('❌ End call button not found');
          }
        }
      }
    }, 500);
    onEnd?.();
  };

  return <div ref={widgetRef} style={{ display: 'none' }} />;
}