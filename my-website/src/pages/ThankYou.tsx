import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Thank You!</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Your message has been sent. I'll get back to you as soon as possible.
      </p>
      <Link to="/" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
        Return to Home
      </Link>
    </div>
  );
}
