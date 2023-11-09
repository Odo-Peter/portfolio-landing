import bjorn from '../assets/bjon.jpg';
import doc from '../assets/doc.jpg';
import kul from '../assets/kul.jpg';
import melly from '../assets/melly.jpg';
import nadi from '../assets/nadi.jpg';

import { Code, Github, Instagram, Twitter } from 'lucide-react';

export const testimonials = [
  {
    name: 'Nannadi Kithuvki',
    avatar: nadi,
    title: 'Software Engineer',
    desc: 'This is really an awesome applications, using it has made me a 10x Engineer and a better ecommerce developer, especially while using get_SCRAPED to fetch real time prices of products, highly recommend',
  },
  {
    name: 'Melly Mufasa',
    avatar: melly,
    title: 'Deer Hunter',
    desc: 'Since I started using get_SCRAPED, all my hunts has being epic, this is due to the various data I have scraped from the web regarding professional deer hunting, I am coming for you all my "deery" friends',
  },
  {
    name: 'Newell Carson',
    avatar: doc,
    title: 'Neuro Surgeon',
    desc: 'I can easily scrape test results from previous researches done by other surgeons and use this, alongside my own tests cases to diagnosed my patients, all thanks to get_SCRAPED and the efficient results it gives',
  },
  {
    name: 'Thomas Bjorn',
    avatar: bjorn,
    title: 'Civil Engineer',
    desc: 'Be-gone with all the integral calculus, differential calculus and all forms of calculus... welcome precise and ready made results, using get_SCRAPED has made calculating complex maths easier than it has ever being, all I needed to do was find a maths website and scrape data from there, maths its "funner" than ever before',
  },
  {
    name: 'Kulkun Khadafi',
    avatar: kul,
    title: 'Content Creator',
    desc: 'It is funny how much I have being brewing with crazily new ideas to create contents on, its not me people its not me, it is get_SCRAPED, the best web scraper there is out there, constantly giving me ideas on products to review and create content on',
  },
];

export const socials = [
  {
    url: 'https://x.com/Odo_Peter_Ebere',
    icon: <Twitter className="text-blue-500" />,
  },
  {
    url: 'https://github.com/Odo-Peter',
    icon: <Github className="text-gray-800" />,
  },
  {
    url: 'https://instagram.com/odogwu_of_the_north',
    icon: <Instagram className="text-pink-700" />,
  },
  {
    url: 'https://dev.to/odo-peter',
    icon: <Code className="text-red-500" />,
  },
];

export const docLinks = [
  {
    id: 'product-details',
    title: 'Get Product Details',
  },
  {
    id: 'product-reviews',
    title: 'Get Product Reviews',
  },
  {
    id: 'product-offers',
    title: 'Get Product Offers',
  },
  {
    id: 'product-search',
    title: 'Get Searched Product',
  },
];
