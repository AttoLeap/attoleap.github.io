import logo from './assets/logo.svg';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div class="bg-brand-light dark:bg-brand-dark">
      <Navbar name="AttoLeap" logo={logo} />
      <Banner headline="AttoLeap" tagline="Leaping Beyond Boundaries" />
    </div>
  );
}

export default App;
