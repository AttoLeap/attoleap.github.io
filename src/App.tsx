import { JSX } from 'solid-js/jsx-runtime';
import logo from './assets/logo.svg';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <div class="bg-brand-light dark:bg-brand-dark">
      <Navbar name="AttoLeap" logo={logo} />
      <Banner headline="AttoLeap" tagline="Leaping Beyond Boundaries" />
    </div>
  );
}

export default App;
