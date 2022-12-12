import "bootstrap/dist/css/bootstrap.min.css"
import "@fontsource/roboto";
import './index.css';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer";
import NewProductsSection from "./components/NewProductsSection/NewProductsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <NewProductsSection />
        <div className="mt-4" />
        <ProductsSection />
        <AboutUsSection />
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
