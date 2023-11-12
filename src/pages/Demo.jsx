import Navbar from '../components/Navbar';
import ProductDetailsReview from '../components/ProductDetailsReview';
import ProductReviewDemo from '../components/ProductReviewDemo';
import ProductOffersDemo from '../components/ProductOffersDemo';
import Footer from '../components/Footer';
import ProductSearchDemo from '../components/ProductSearchDemo';

const DemoPage = () => {
  const isDemo = true;

  return (
    <div className="flex flex-col pb-10">
      <Navbar isDemo={isDemo} />
      <ProductDetailsReview />
      <ProductReviewDemo />
      <ProductOffersDemo />
      <ProductSearchDemo />
      <Footer />
    </div>
  );
};

export default DemoPage;
