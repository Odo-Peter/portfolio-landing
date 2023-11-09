import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link to="/" className="flex items-center gap-x-2">
        <div className="w-8 h-8">
          <img alt="logo" src={logo} className="w-full h-full" />
        </div>
        <h1 className="text-[1.2rem] font-bold">
          get_<span className="text-blue-600 uppercase">scraped</span>
        </h1>
      </Link>

      <div>
        <Link
          to="/docs"
          className="flex items-center justify-center gap-x-2 py-[10px] w-40 text-center bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 shadow-lg hover:shadow-2xl transition"
        >
          Go to Docs <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
