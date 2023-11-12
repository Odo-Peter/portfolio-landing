import { Link } from 'react-router-dom';

import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/logo.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const navLinks = [
  {
    title: 'Details',
    id: 'product-demo-details',
  },
  {
    title: 'Reviews',
    id: 'product-demo-reviews',
  },
  {
    title: 'Offers',
    id: 'product-demo-offers',
  },
  {
    title: 'Search',
    id: 'product-demo-search',
  },
];

const Navbar = ({ isDemo }) => {
  return (
    <nav
      className={
        isDemo
          ? 'p-3 md:p-4 bg-gray-200 z-50 w-full px-8 md:px-16 lg:px-20 flex items-center justify-between shadow-md sticky top-0 left-0'
          : 'p-3 md:p-4 bg-transparent flex items-center justify-between'
      }
    >
      <Link to="/" className="flex items-center gap-x-2">
        <div className="w-10 h-10 md:w-8 md:h-8">
          <img alt="logo" src={logo} className="w-full h-full" />
        </div>
        <h1 className="hidden md:flex text-lg md:text-[1.2rem] font-extrabold">
          get_<span className="text-blue-600 uppercase">scraped</span>
        </h1>
      </Link>

      {isDemo && (
        <div className="hidden md:flex items-center gap-x-14">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-gray-600 cursor-pointer px-4 hover:pb-1 font-semibold hover:text-blue-400 hover:border-b-4 hover:border-blue-400 rounded-md transition"
            >
              {link.title}
            </ScrollLink>
          ))}
        </div>
      )}

      <div>
        {isDemo ? (
          <Link
            to="/docs"
            className="flex items-center justify-center gap-x-2 py-[10px] w-40 text-center bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 shadow-lg hover:shadow-2xl transition"
          >
            <ArrowLeft className="w-3 h-3 fill-white" /> Back to Docs
          </Link>
        ) : (
          <Link
            to="/docs"
            className="flex items-center justify-center gap-x-2 py-[10px] w-40 text-center bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 shadow-lg hover:shadow-2xl transition"
          >
            Go to Docs <ArrowRight className="w-3 h-3 fill-white" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
