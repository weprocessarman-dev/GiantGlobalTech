'use client';

import { useState, useEffect, useRef } from 'react';
import VoiceAgent from './voice-agent';

interface SpeakButtonProps {
  onVoiceStart?: (active: boolean, volume: number) => void;
}

export default function SpeakButton({ onVoiceStart }: SpeakButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationRef = useRef<number | null>(null);
  


  const startMicrophone = async () => {
    try {
      // Check if microphone is available
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioDevices = devices.filter(device => device.kind === 'audioinput');
      
      if (audioDevices.length === 0) {
        console.error('No microphone found');
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          deviceId: audioDevices[0].deviceId,
          echoCancellation: true,
          noiseSuppression: true
        }
      });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      
      analyser.fftSize = 256;
      microphone.connect(analyser);
      
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      
      const updateVolume = () => {
        if (analyserRef.current) {
          analyserRef.current.getByteFrequencyData(dataArray);
          const volume = Math.max(...dataArray) / 255;
          
          if (onVoiceStart) {
            onVoiceStart(true, volume);
          }
          
          animationRef.current = requestAnimationFrame(updateVolume);
        }
      };
      
      updateVolume();
    } catch (error) {
      console.error('Microphone error:', error);
      // Fallback to simulated volume
      if (onVoiceStart) {
        onVoiceStart(true, 0.5);
      }
    }
  };

  const stopMicrophone = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close();
    }
    if (onVoiceStart) {
      onVoiceStart(false, 0);
    }
  };

  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
    
    if (newState) {
      setShouldStartCall(true);
      startMicrophone();
    } else {
      setShouldEndCall(true);
      stopMicrophone();
    }
  };

  const [shouldStartCall, setShouldStartCall] = useState(false);
  const [shouldEndCall, setShouldEndCall] = useState(false);

  useEffect(() => {
    return () => {
      stopMicrophone();
    };
  }, []);

  return (
    <div 
      className="absolute w-[131.62px] h-[45.29px] left-1/2 -translate-x-1/2 speak-button-wrapper"
      style={{ top: 'calc(50% + 361.5px)', zIndex: 10 }}
    >
      <div 
        className="absolute w-[131.62px] h-[45.29px] rounded-full"
        style={{
          background: isActive ? '#00FF88' : '#0058FF',
          filter: 'blur(30px)'
        }}
      />
      
      <button 
        className="absolute w-[108.72px] h-[37.41px] left-1/2 -translate-x-1/2 rounded-full cursor-pointer"
        style={{
          top: '3.94px',
          background: isActive 
            ? 'linear-gradient(180deg, #00FF88 0%, #00CC66 100%)' 
            : 'linear-gradient(180deg, #2C71F3 0%, #0D3DEE 100%)',
          color: '#fff',
          zIndex: 1
        }}
        onClick={handleClick}
      >
        <span 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"
          style={{ fontFamily: 'Poppins', color: '#fff', zIndex: 2 }}
        >
          {isActive ? 'Stop' : 'Speak'}
        </span>
      </button>
      
      <VoiceAgent 
        shouldStart={shouldStartCall}
        shouldEnd={shouldEndCall}
        onStart={() => {
          console.log('Agent started');
          setShouldStartCall(false);
        }}
        onEnd={() => {
          console.log('Agent ended');
          setShouldEndCall(false);
        }}
      />

    </div>
  );
}