import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Headphones, FileText, FileAudio, FileVideo } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Convert WhatsApp Audio to Text</h1>
        <p className="text-xl mb-8">Easily transcribe your voice messages with our WhatsApp audio-to-text service.</p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Get Started</Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <MessageSquare size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">Send Audio</h2>
          <p>Send your WhatsApp voice messages to our dedicated number.</p>
        </div>
        <div className="text-center">
          <Headphones size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">We Process</h2>
          <p>Our advanced AI transcribes your audio messages accurately.</p>
        </div>
        <div className="text-center">
          <FileText size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">Receive Text</h2>
          <p>Get the transcribed text back quickly and effortlessly.</p>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose WhatsApp2Text?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Quick and accurate transcriptions</li>
          <li>Easy to use - just send your audio via WhatsApp</li>
          <li>Affordable monthly subscription plans</li>
          <li>Secure and confidential service</li>
          <li>Compatible with all WhatsApp-supported devices</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Supported File Types</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileAudio className="mr-2 text-blue-600" />
              Audio Formats
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>MP3 (MPEG Audio Layer-3)</li>
              <li>WAV (Waveform Audio File Format)</li>
              <li>FLAC (Free Lossless Audio Codec)</li>
              <li>M4A (MPEG-4 Audio)</li>
              <li>AAC (Advanced Audio Coding)</li>
              <li>OGG (Ogg Vorbis/Opus)</li>
              <li>Opus</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileVideo className="mr-2 text-blue-600" />
              Video Formats (with audio)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>MP4 (MPEG-4 Part 14)</li>
              <li>MPEG (Moving Picture Experts Group format)</li>
              <li>WEBM (WebM Video File Format)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home