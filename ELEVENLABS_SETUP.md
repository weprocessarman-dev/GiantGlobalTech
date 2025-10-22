# ElevenLabs Integration Setup

## Prerequisites
1. ElevenLabs account with API access
2. Created AI Agent in ElevenLabs dashboard

## Setup Steps

### 1. Get Your Agent ID
1. Go to [ElevenLabs Dashboard](https://elevenlabs.io/app)
2. Navigate to your AI Agent
3. Copy your **Agent ID** from the agent details

### 2. Configure Environment Variables
1. Open `.env.local` file in your project root
2. Replace the placeholder value:
   ```
   NEXT_PUBLIC_ELEVENLABS_AGENT_ID=your_actual_agent_id_here
   ```

### 3. Test the Integration
1. Start your development server: `npm run dev`
2. Click the "Start Voice Chat" button
3. The 3D orb should animate when the AI is speaking
4. You should see status updates (Connecting → AI Agent Ready)

## Features Implemented

✅ **3D Visual Feedback**: The Siri orb animates based on voice activity
✅ **Real-time Status**: Shows connection status and AI agent state  
✅ **Voice Chat**: Full duplex conversation with your ElevenLabs AI agent
✅ **Smart Button States**: Button changes based on connection status
✅ **Error Handling**: Graceful handling of connection issues

## Troubleshooting

### Common Issues:
1. **"ElevenLabs credentials not found"**
   - Check your `.env.local` file has the correct variable names
   - Restart your dev server after adding environment variables

2. **"Connection Failed"**
   - Verify your API key is valid
   - Check your Agent ID is correct
   - Ensure your ElevenLabs account has sufficient credits

3. **No audio visualization**
   - Check browser permissions for microphone access
   - Ensure you're using HTTPS in production

### Browser Requirements:
- Modern browser with WebRTC support
- Microphone permissions granted
- HTTPS required for production deployment

## Next Steps
- Customize the 3D orb animations based on your preferences
- Add conversation history display
- Implement custom voice commands
- Add conversation analytics