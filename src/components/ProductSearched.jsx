import { Link } from 'react-router-dom';

import pic4 from '../assets/pic4.png';
import { ArrowRight } from 'lucide-react';

const ProductSearched = () => {
  return (
    <div id="product-search" className="py-14 ">
      <h2 className="text-xl md:text-2xl py-4 font-bold text-center uppercase">
        Get Searched Product
      </h2>
      <div className="text-sm md:text-base text-gray-600">
        <p className="mb-6">
          For getting a specific product detail by searching using the product
          name, we will be fetching and scraping data from the{' '}
          <Link className="text-purple-400 underline" to="https://amazon.com">
            amazon
          </Link>{' '}
          ecommerce website. The product details of a specific product can be
          gotten from the amazon store using the product name.
        </p>
        <ul className="list-disc pl-10 flex flex-col gap-y-2">
          <li className="mb-4">
            <p className="mb-6">
              First, we will scrape the details of this product using the
              product name. To achieve this, we will pass the product name as a
              search parameter to our scraperAPI url. In our exampled case, the
              product name is <strong>"Macbook Pro"</strong>.
            </p>
            <p className="py-4 px-6 lg:px-16 bg-gray-300 rounded-md text-gray-700 font-mono overflow-auto">
              {/* http://localhost:3001/v1/api/product/"productID" */}
              http://localhost:3001/v1/api/search/macbookpro
            </p>
          </li>

          <li className="my-4">
            <p>
              The GET request we made, would return a response containing an
              array of objects in JSON format, where the objects in the array
              are structured details of the product queried using the product
              name.
            </p>
            <img alt="demo" src={pic4} className="my-2" />
            <p>
              To see a review on how this is implemented, click the button below
            </p>
          </li>
        </ul>
        <Link
          to="/demo"
          className="flex mt-4 mx-auto px-8 w-3/4 items-center gap-4 py-4 justify-center shadow-xl bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:shadow-2xl transition"
        >
          See a Demo Review <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductSearched;
