import { Link } from 'react-router-dom';

export default function NavigationBar() {

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav className={`fixed z-50 w-full flex justify-center p-6 transition-transform duration-700'}`}>
      <div className="flex-1 flex justify-center space-x-6 md:space-x-12">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            className="text-white hover:text-gray-300 transition relative group cursor-pointer"
          >
            {page.name}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
