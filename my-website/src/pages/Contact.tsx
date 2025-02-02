import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaComment, FaQuestionCircle } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Generate a simple math CAPTCHA question
  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [correctAnswer] = useState(num1 + num2);

  const validateEmail = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsEmailValid(isValid);
  };

  const validateCaptcha = (input: string) => {
    setIsCaptchaValid(parseInt(input, 10) === correctAnswer);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.submit();
    setTimeout(() => {
        window.location.href = '/thank-you';
    }, 500); // Delay redirection slightly to ensure form submits
    e.preventDefault();
    e.currentTarget.submit(); // Submit the form directly
};

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-6 overflow-hidden transition-transform duration-700 ease-in-out">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 w-auto md:w-250">Contact Me</h1>
      
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6">
        {/* Contact Form */}
        <form action="https://www.josephbartram.co.uk/cgi-bin/FormMail.pl" method="POST" accept-charset="ISO-8859-1" target="hiddenFrame" onSubmit={handleSubmit} className="w-full md:w-2/3 bg-gray-800 opacity-80 p-6 rounded-lg shadow-lg">
  <input type="hidden" name="recipient" value="contactme@josephbartram.co.uk" />
  <input type="hidden" name="subject" value="New Contact Form Submission" />
  <input type="hidden" name="redirect" value="https://www.josephbartram.co.uk/thank-you" />
  <input type="hidden" name="missing_fields_redirect" value="https://www.josephbartram.co.uk/error.html" />
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }} 
                required
              />
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

          {/* CAPTCHA */}
          <div className="mb-4">
            <label className="flex items-center text-white mb-2">
              <FaQuestionCircle className="mr-2" /> What is {num1} + {num2}?
            </label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white" 
              value={captchaAnswer} 
              onChange={(e) => {
                setCaptchaAnswer(e.target.value);
                validateCaptcha(e.target.value);
              }}
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`w-full p-3 rounded-lg transition flex items-center justify-center cursor-pointer ${isEmailValid && isCaptchaValid ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
            disabled={!isEmailValid || !isCaptchaValid}
          >
            Send Message <FaPaperPlane className="ml-2" />
          </button>
        </form>
          <iframe name="hiddenFrame" style={{ display: 'none' }} />
      </div>
    </div>
  );
}
