import './css/App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MyWork from './components/MyWork';
import Profile from './components/Profile';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header/>
      </header>
      <main>
        <section className='hero-banner-container'>
          <HeroBanner/>
        </section>
        <section className='my-work-container'>
          <MyWork/>
        </section>
        <Profile/>
        <section className='contact-container'>
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
