import { XCircleIcon } from 'lucide-react';

const DemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-4">
      <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl">
        Ooops... Under Construction
      </h1>
      <XCircleIcon className="text-red-600 h-14 w-14" />
      <p className="text-gray-400 text-sm lg:text-base">Check back in a few</p>
    </div>
  );
};

export default DemoPage;
