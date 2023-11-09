import Footer from './Footer';
import ProductDetails from './ProductDetails';
import ProductOffers from './ProductOffers';
import ProductReviews from './ProductReviews';
import ProductSearched from './ProductSearched';

const DocsContent = () => {
  return (
    <div className="px-6 md:px-10 mx-auto lg:px-14 text-gray-800 mt-10">
      <ProductDetails />
      <ProductReviews />
      <ProductOffers />
      <ProductSearched />
      <Footer />
    </div>
  );
};

export default DocsContent;
