import Hero from './components/Hero';
import Story from './components/Story';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Gallery from './components/Gallery';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';

function App() {
  return (
    <main className="font-sans antialiased w-full min-h-screen bg-ivory overflow-x-hidden selection:bg-soft-gold/30 selection:text-dark-text">
      <Hero />
      {/* <Story /> */}
      <Details />
      <Countdown />
      <Gallery />
      <ActionButtons />
      <Footer />
    </main>
  );
}

export default App;
