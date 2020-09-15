import React from 'react';
import FoodDetails from './components/foodDetails/FoodDetails';
import Foods from './components/foods/Foods';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import WhyUs from './components/whyUs/WhyUs';

function App() {
  return (
    <div>
      <FoodDetails />
      <Header />
      <Foods />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
