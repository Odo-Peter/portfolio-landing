import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/logo.png';
import { docLinks } from '../constants/constants';

const SideBar = () => {
  return (
    <aside className="hidden w-72 fixed top-0 left-0 md:flex flex-col items-center justify-start py-4 md:px-8 lg:px-10 bg-zinc-800 h-screen text-gray-100">
      <div className="flex items-center gap-x-2 mb-16">
        <img alt="logo" src={logo} className="h-8 w-8 object-cover" />
        <Link to="/docs" className="md:text-sm lg:text-base font-bold">
          get_<span className="text-blue-600 uppercase">scraped</span>
        </Link>
      </div>
      <div className="flex flex-col gap-y-6">
        {docLinks.map((doc) => (
          <div
            key={doc.id}
            className="p-2 border-b border-zinc-600 text-base transition"
          >
            <ScrollLink
              to={doc.id}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="hover:text-gray-400 cursor-pointer"
            >
              {doc.title}
            </ScrollLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
