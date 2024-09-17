import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative z-0 bg-primary flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-[#915eff] hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;