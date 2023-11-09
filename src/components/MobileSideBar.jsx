import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import logo from '../assets/logo.png';
import { docLinks } from '../constants/constants';

import { X } from 'lucide-react';

const MobileSideBar = ({ closeSideBar, setCloseSideBar }) => {
  return (
    <aside className="md:hidden w-72 fixed top-0 left-0 flex-col items-center justifycenter py-4 px-6 bg-zinc-800 h-screen text-gray-100 z-10 transition">
      <div className="flex relative items-center gap-x-2 mb-16">
        <img alt="logo" src={logo} className="h-8 w-8 object-cover" />
        <Link to="/docs" className="md:text-sm lg:text-base font-bold">
          get_<span className="text-blue-600 uppercase">scraped</span>
        </Link>
        <X
          className="absolute w-10 h-10 right-0 top-0 cursor-pointer text-red-400 bg-red-400/10 p-2 rounded-md"
          onClick={() => setCloseSideBar(!closeSideBar)}
        />
      </div>
      <div className="flex flex-col gap-y-6">
        {docLinks.map((doc) => (
          <div key={doc.id} className="p-2 border-b border-zinc-600 text-base">
            <ScrollLink
              to={doc.id}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => setCloseSideBar(!closeSideBar)}
              className="hover:text-gray-400 text-sm cursor-pointer"
            >
              {doc.title}
            </ScrollLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MobileSideBar;
