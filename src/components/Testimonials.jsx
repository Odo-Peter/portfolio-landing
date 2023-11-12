import { testimonials } from '../constants/constants';

const Testimonials = () => {
  return (
    <div className="pb-6 px-4">
      <h2 className="text-3xl mb-8 font-extrabold text-center">Testimonals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((rev) => (
          <div key={rev.avatar} className="flex flex-col relative justify-center gap-x-4 border border-gray-300 py-8 px-4 shadow-xl rounded-lg hover:shadow-2xl transition">
            <div className="flex items-center">
              <img
                alt={rev.name}
                src={rev.avatar}
                className="h-12 w-12 mr-4 rounded-full object-cover"
              />
              <div className="flex justify-center flex-col gap-y-[2px]">
                <h3 className="font-semibold text-sm">{rev.name}</h3>
                <small className="text-gray-500 text-sm">{rev.title}</small>
              </div>
            </div>
            <div className="py-4 px-2">
              <p className="font-medium text-sm md:text-base">{rev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
