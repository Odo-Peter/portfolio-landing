import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Loader2, LucideFileWarning, XCircleIcon } from 'lucide-react';
import { BASE_SCRAPER_URL, detailsDemoFetch } from '../constants/constants';

const ProductDetailsReview = () => {
  const [resJson, setResJson] = useState(null);
  const [productId, setProductId] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const getResponse = async (e) => {
    e.preventDefault();
    try {
      setIsFetching(true);

      const res = await axios.get(`${BASE_SCRAPER_URL}/product/${productId}`);
      setResJson(res.data);

      setProductId('');
    } catch (err) {
      console.log(err);
      setIsFetching(false);
    } finally {
      setIsFetching(false);
    }
  };

  const jsonResponse = `
  ~~~javascript
  ${JSON.stringify(resJson, null, 8)}
  ~~~
  `;

  return (
    <div
      id="product-demo-details"
      className="flex flex-col gap-y-10 md:gap-y-16 mt-16 px-8 md:px-16 lg:px-20 mb-10 md:mb-16"
    >
      <div className="flex flex-col gap-y-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
          Fetching Product Details
        </h1>
        <p className="text-xs md:text-sm lg:text-base px-6 py-3 lg:py-6 lg:px-20 bg-blue-600/10 text-gray-600 rounded-lg border-x-8 border-blue-600">
          This demo illustrates a simple fetch request that returns the product
          details of a particular product based off its productID and also,
          shows how this can be consumed and rendered in the frontend of an
          ecommerce web app.
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold text-lg md:text-2xl">Code Snippets</h2>
        <p className="text-xs md:text-sm py-3 px-4 rounded border-l-4 border-gray-600 text-gray-500">
          Below is a sample code snippets used in making the request to the API
          service
        </p>
        <ReactMarkdown
          children={detailsDemoFetch}
          className="text-xs md:text-sm"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="section" // parent tag
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold text-lg md:text-2xl">Enter a productID</h2>
        <p className="text-xs md:text-sm py-3 px-4 rounded border-l-4 border-gray-600 text-gray-500">
          To get a productID, you can{' '}
          <Link to="/docs" className="text-purple-400 underline">
            {' '}
            refer back to the docs{' '}
          </Link>{' '}
          to see how to achieve this. For this demo, we will be using{' '}
          <strong>B0CB745VMN</strong> as our productID. However, you can enter a
          different productID to scrape the details of that desired product.
        </p>
        <form
          className="flex flex-col items-center md:justify-between md:flex-row gap-4 w-full py-2 md:py-4 px-4 md:px-8 bg-gray-100 rounded-md mt-2 shadow"
          onSubmit={getResponse}
        >
          <input
            type="text"
            name="productID"
            className={
              'w-full md:w-[55%] bg-transparent border border-gray-400 outline-none py-2 rounded px-4 md:px-6 placeholder:focus:font-normal placeholder:text-gray-500 active:text-gray-900 text-[0.9rem] focus:font-semibold'
            }
            placeholder="Enter a productID.. e.g B0CB745VMN"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            disabled={isFetching}
          />
          <button
            type="submit"
            className={
              'flex items-center justify-center gap-x-2 py-[10px] w-full md:w-[35%] text-center bg-blue-600 border text-white text-sm font-semibold rounded hover:bg-blue-500 transition'
            }
            disabled={isFetching || !productId}
          >
            {isFetching ? (
              <>
                Fetching Details...{' '}
                <Loader2 className="h-5 w-5 animate-spin text-white" />{' '}
              </>
            ) : (
              'Fetch Product Details'
            )}
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold text-lg md:text-2xl">
          Returned JSON Response
        </h2>
        <p className="text-xs md:text-sm py-3 px-4 rounded border-l-4 border-gray-600 text-gray-500">
          Here is a sample of a returned JSON response, containing extensive
          details of the particular product we queried using a specific
          productID.{' '}
          <em>
            You can decide to store this in a database of your choosing for
            reusability and efficiency.
          </em>
        </p>
        {isFetching ? (
          <div className="flex flex-col gap-y-4 items-center justify-center bg-gray-100 w-full py-16 rounded-md mt-4">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          </div>
        ) : resJson?.name ? (
          <ReactMarkdown
            className="h-96 overflow-auto text-xs md:text-sm"
            children={resJson?.name ? jsonResponse : null}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="section" // parent tag
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        ) : (
          <div className="flex flex-col gap-y-4 items-center justify-center bg-gray-100 w-full py-16 rounded-md mt-4">
            <LucideFileWarning className="text-red-500 w-10 h-10" />
            <p className="text-xs md:text-sm text-gray-400">
              Enter a productID in the text field above
            </p>
            <p className="text-xs md:text-sm">
              {' '}
              <Link to="/docs" className="text-purple-400 underline">
                {' '}
                How do I get a productID?{' '}
              </Link>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="font-bold text-lg md:text-2xl">Sample Implementaion</h2>
        <p className="text-xs md:text-sm py-3 px-4 rounded border-l-4 border-gray-600 text-gray-500">
          Now, we will build a simple card components that will visually
          showcase some of the product details of the queried product.{' '}
          <em>All renders on the card component are dynamically generated</em>.
          You can enter a different productID in the text field above and
          observe as the details in the card component changes.
        </p>

        {resJson?.name ? (
          <div className="relative flex flex-col md:flex-row gap-y-4 items-center justify-between bg-gray-100 w-full py-6 px-4 md:px-8 rounded-md mt-4">
            <div className="shadow-lg flex justify-center items-center rounded w-full md:w-[45%]">
              <Carousel
                // autoPlay={true}
                emulateTouch={true}
                showStatus={false}
                width={'100%'}
                // thumbWidth={60}
                showThumbs={false}
                // dynamicHeight={'45%'}
                interval={1800}
                // infiniteLoop={true}
              >
                {resJson?.images.length >= 1 &&
                  resJson?.images.map((img) => (
                    <img
                      key={img}
                      alt={img}
                      src={img}
                      className="object-contain"
                    />
                  ))}
              </Carousel>
            </div>
            <div className="flex flex-col gap-y-6 py-4 w-full md:w-[50%]">
              <h3 className="font-bold text-lg md:text-2xl">
                Product name: {resJson?.name || 'Cannot get product name'}
              </h3>
              <p className="font-semibold text-sm md:text-base">
                Pricing: {resJson?.pricing || '$0.00'}
              </p>
              <p className="font-semibold text-sm md:text-base">
                Customer reviews:{' '}
                {Math.floor(
                  resJson?.product_information?.['Customer Reviews']?.stars
                ) || 0}{' '}
                / 5
              </p>

              <p className="text-xs font-thin italic md:text-sm text-gray-400 mt-6">
                Product category:{' '}
                {resJson?.product_category || 'Cannot get product category'}
              </p>
            </div>

            <Link
              to="https://github.com/Odo-Peter/portfolio-landing/blob/master/src/components/ProductDetailsReview.jsx"
              target="_blank"
              className="text-purple-400 text-sm underline absolute bottom-2 right-8"
            >
              {' '}
              See source code on GitHub{' '}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-y-4 items-center justify-center bg-gray-100 w-full py-14 rounded-md mt-4">
            <XCircleIcon className="h-12 w-12 text-red-600" />
            <p className="text-xs md:text-sm text-gray-400">
              Ooops, nothing to preview here, no response was recieved
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsReview;
