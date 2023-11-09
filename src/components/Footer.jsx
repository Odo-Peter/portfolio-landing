import { Link } from 'react-router-dom';
import { socials } from '../constants/constants';

const Footer = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-y-2 items-center justify-center">
      <p className="text-sm text-gray-500">
        Copyright ©{new Date().getFullYear()} Odo Peter Ebere
      </p>
      <div className="flex items-center gap-x-4">
        {socials.map((social) => (
          <Link key={social.url} to={social.url} className="p-2">
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
