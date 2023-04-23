import { Footer, Navbar, Navbartest } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Home = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <GetStarted />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="z-0 gradient-04" />
      <Explore />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="z-0 gradient-03" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
