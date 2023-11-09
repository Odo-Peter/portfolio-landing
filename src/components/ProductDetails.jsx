import { Link } from 'react-router-dom';

import pic2 from '../assets/pic2.png';
import pic1 from '../assets/pic1.jpg';
import { ArrowRight } from 'lucide-react';

const ProductDetails = () => {
  return (
    <div id="product-details" className="pb-14 border-b border-gray-400">
      <h2 className="text-xl md:text-2xl py-4 font-bold text-center uppercase">
        Get Product Details
      </h2>
      <div className="text-sm md:text-base text-gray-600">
        <p className="mb-6">
          For this documentation, we will be fetching and scraping data from the{' '}
          <Link className="text-purple-400 underline" to="https://amazon.com">
            amazon
          </Link>{' '}
          ecommerce website. Getting the product detail is easier than you
          anticipated. The product details of a specific product can be gotten
          from the amazon store using the productID.
        </p>
        <ul className="list-disc pl-10 flex flex-col gap-y-2">
          <li className="mb-4">
            <p>
              To begin, we will go to the{' '}
              <Link
                className="text-purple-400 underline"
                to="https://amazon.com"
              >
                amazon
              </Link>{' '}
              website and look for any product of our choice, click on the
              product to access the full product details.
            </p>

            <p>
              As shown in the image below, the productID can be gotten by
              copying it from the address bar on the browser.
              <img alt="ProductDetails" src={pic1} className="my-2" />
            </p>
          </li>

          <li className="mb-4">
            <p className="mb-6">
              Next, we will scrape the details of this product using its
              productID. To achieve this, we will pass the productID as a
              parameter to our scraperAPI url. In our exampled case, the
              productID is <strong>"B0CB745VMN"</strong>.
            </p>
            <p className="py-4 px-6 lg:px-16 bg-gray-300 rounded-md text-gray-700 font-mono overflow-auto">
              {/* http://localhost:3001/v1/api/product/"productID" */}
              http://localhost:3001/v1/api/product/B0CB745VMN
            </p>
          </li>

          <li className="my-4">
            <p>
              The GET request we made, would return a response containing an
              array of objects in JSON format, where each objects in the array
              is a structured detail of the product that we queried for using
              the productID as a parameter. We can now consume this details in
              our ecommerce web app. The image below shows the returned
              response.
            </p>
            <img alt="demo" src={pic2} className="my-2" />
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

export default ProductDetails;
