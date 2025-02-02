import { useState, useRef, useMemo } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaComment } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const BinarySwirl = useMemo(() => {
    return function BinarySwirl() {
      const groupRef = useRef<THREE.Group>(null!);
      
      useFrame(() => {
        if (groupRef.current) {
          groupRef.current.rotation.z += 0.003; // Slow rotation effect
        }
      });

      const binaryNumbers = [];
      for (let i = 0; i < 100; i++) {
        const angle = i * 0.3;
        const radius = 0.1 * i;
        binaryNumbers.push(
          <Text
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            fontSize={0.3}
            color={Math.random() > 0.5 ? "#00FF00" : "#FFFF00"}
          >
            1010
          </Text>
        );
      }

      const perpendicularBinaryNumbers = [];
      for (let i = 0; i < 100; i++) {
        const angle = i * 0.3;
        const radius = 0.1 * i;
        perpendicularBinaryNumbers.push(
          <Text
            key={`p-${i}`}
            position={[0, Math.cos(angle) * radius, Math.sin(angle) * radius]}
            fontSize={0.3}
            color={Math.random() > 0.5 ? "#00FF00" : "#FFFF00"}
          >
            1010
          </Text>
        );
      }

      return <group ref={groupRef}>{binaryNumbers}{perpendicularBinaryNumbers}</group>;
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-6 overflow-hidden transition-transform duration-700 ease-in-out">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 w-250">Contact Me</h1>
      
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        {/* Contact Form with One.com Form Handling */}
        <form action="https://www.one.com/en/email-form" method="POST" className="w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input type="hidden" name="recipient" value="contactme@josephbartram.co.uk" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="hidden" name="redirect" value="http://www.josephbartram.co.uk/thankyou.html" />
          <input type="hidden" name="missing_fields_redirect" value="http://www.josephbartram.co.uk/error.html" />
          <input type="hidden" name="required" value="realname,email,Message" />

          {/* Name & Email Row */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="flex items-center text-white mb-2">
                <FaUser className="mr-2" /> Name
              </label>
              <input 
                type="text" 
                name="realname"
                className="w-full p-3 rounded-lg bg-gray-700 text-white" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="flex items-center text-white mb-2">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input 
                type="email" 
                name="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="flex items-center text-white mb-2">
              <FaComment className="mr-2" /> Message
            </label>
            <textarea 
              name="Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white h-32" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center cursor-pointer">
            Send Message <FaPaperPlane className="ml-2" />
          </button>
        </form>
        
        {/* 3D Binary Swirl Animation */}
        <div className="hidden md:block w-1/3 h-64 ml-6">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <BinarySwirl />
            <OrbitControls autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
