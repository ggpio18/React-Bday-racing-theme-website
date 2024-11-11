import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoBooth } from './components/PhotoBooth';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <PhotoBooth />
      <About />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;