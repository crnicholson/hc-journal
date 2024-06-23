import Hero from '../components/hero';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <a className="banner mx-auto ml-2 z-50" href="https://hackclub.com/">
          <img
            src="https://contribute.hackclub.com/images/flag-orpheus-top.png"
            alt="Hack Club Logo"
          ></img>
        </a>
      </div>
      <Hero />
    </>
  )
}