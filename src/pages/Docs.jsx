import { useState } from 'react';

import { Menu, PinIcon } from 'lucide-react';
import SideBar from '../components/SideBar';

import MobileSideBar from '../components/MobileSideBar';
import DocsContent from '../components/DocsContent';

const Docs = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="text-gray-800 min-h-screen py-10 w-full md:pl-72 max-w-7xl relative transition">
      <div
        className={openSideBar ? 'text-center p-4 blur-sm' : 'text-center p-4'}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Getting started with get_
          <span className="text-blue-600 uppercase">scraped</span>
        </h1>
        <p className="flex items-center justify-center gap-x-2 text-[13px] md:text-sm lg:text-base text-gray-400 py-2">
          Never hesitate to Read the Docs{' '}
          <PinIcon className="h-5 w-5 text-red-500 fill-red-500" />{' '}
        </p>
        <div className="w-full flex flex-col mx-auto items-center justify-center">
          <p className="mt-2 text-start py-3 px-4 lg:px-6 text-gray-500 text-xs rounded-md bg-gray-500/10 md:w-[90%] lg:w-[75%] shadow-md">
            <span className="uppercase font-semibold text-red-500 ">
              Disclaimer:{' '}
            </span>
            <em className="font-mono">
              This documentaion is centered around a user's development
              environment, as this is an app to help developers practice their
              ecommerce building skills with real time data. <br /> <br />
              To implement a production ready app, reach out to the creators via
              the social links at the bottom of the page, for a quick guide.
            </em>
          </p>
        </div>
      </div>
      <Menu
        className="fixed opacity-90 md:hidden top-4 left-4 w-10 h-10 cursor-pointer hover:opacity-100 text-blue-600 p-2 bg-blue-600/10 rounded-md"
        onClick={() => setOpenSideBar(true)}
      />
      <SideBar />
      {openSideBar && (
        <MobileSideBar
          closeSideBar={openSideBar}
          setCloseSideBar={setOpenSideBar}
        />
      )}

      <div className={openSideBar ? 'blur-sm' : ''}>
        <DocsContent />
      </div>
    </div>
  );
};

export default Docs;
