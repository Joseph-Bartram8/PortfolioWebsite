import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane, FaComment, FaQuestionCircle } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

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

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 md:pt-28 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 w-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Contact Me
      </motion.h1>

      {/* Form Container */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Contact Form */}
        <motion.form
          action="https://www.josephbartram.co.uk/cgi-bin/FormMail.pl"
          method="POST"
          acceptCharset="ISO-8859-1"
          target="_self"
          className="w-full md:w-2/3 bg-gray-800 opacity-80 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <input type="hidden" name="recipient" value="contactme@josephbartram.co.uk" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="hidden" name="redirect" value="https://www.josephbartram.co.uk/thank-you" />
          <input type="hidden" name="missing_fields_redirect" value="https://www.josephbartram.co.uk/error.html" />
          <input type="hidden" name="required" value="realname,email,Message" />

          {/* Name & Email Row */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            {[
              { label: "Name", icon: <FaUser className="mr-2" />, value: name, setValue: setName, name: "realname" },
              { label: "Email", icon: <FaEnvelope className="mr-2" />, value: email, setValue: setEmail, name: "email" }
            ].map(({ label, icon, value, setValue, name }) => (
              <div key={name} className="w-full md:w-1/2">
                <label className="flex items-center text-white mb-2">{icon} {label}</label>
                <motion.input
                  type={name === "email" ? "email" : "text"}
                  name={name}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (name === "email") validateEmail(e.target.value);
                  }}
                  onFocus={() => setFocusedInput(name)}
                  onBlur={() => setFocusedInput(null)}
                  animate={{
                    scale: focusedInput === name ? 1.02 : 1,
                    boxShadow: focusedInput === name ? "0px 0px 8px rgba(147, 197, 253, 0.7)" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                  required
                />
              </div>
            ))}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="flex items-center text-white mb-2"><FaComment className="mr-2" /> Message</label>
            <motion.textarea
              name="Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white h-32 outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocusedInput("message")}
              onBlur={() => setFocusedInput(null)}
              animate={{
                scale: focusedInput === "message" ? 1.02 : 1,
                boxShadow: focusedInput === "message" ? "0px 0px 8px rgba(147, 197, 253, 0.7)" : "none"
              }}
              transition={{ duration: 0.2 }}
              required
            />
          </div>

          {/* CAPTCHA */}
          <div className="mb-4">
            <label className="flex items-center text-white mb-2"><FaQuestionCircle className="mr-2" /> What is {num1} + {num2}?</label>
            <motion.input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
              value={captchaAnswer}
              onChange={(e) => {
                setCaptchaAnswer(e.target.value);
                validateCaptcha(e.target.value);
              }}
              onFocus={() => setFocusedInput("captcha")}
              onBlur={() => setFocusedInput(null)}
              animate={{
                scale: focusedInput === "captcha" ? 1.02 : 1,
                boxShadow: focusedInput === "captcha" ? "0px 0px 8px rgba(147, 197, 253, 0.7)" : "none"
              }}
              transition={{ duration: 0.2 }}
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full p-3 rounded-lg flex items-center justify-center cursor-pointer ${isEmailValid && isCaptchaValid ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
            disabled={!isEmailValid || !isCaptchaValid}
            whileHover={{ scale: isEmailValid && isCaptchaValid ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message <FaPaperPlane className="ml-2" />
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
