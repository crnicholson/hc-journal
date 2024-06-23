import Hero from '../components/hero';
import Header from '../components/header';
import Image from 'next/image';

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
      <div className="w-full h-fit bg-[#F9FAEF] flex justify-center">
        <div className="p-10 mt-10 w-3/5">
          <h1 className="text-5xl font-bold underline decoration-red-400">Publish papers, for free.</h1>
          <div className="flex flex-row justify-center items-center gap-10">
            <div className="h-fit w-[400px] rounded-xl bg-[#F9FAEF] shadow-2xl p-5">
              <Image
                src="/teens.webp"
                alt="Awards"
                width={200}
                height={200}
                className="rounded-xl w-full h-auto"
              />
              <h1 className="text-2xl mt-3 italic">
                Join{" "}
                <span className="bg-red-400 text-[#F9FAEF] transform -rotate-3 inline-block rounded-lg my-1 pl-1 pr-[6px]">17</span>
                {" "}authors and{" "}
                <span className="bg-red-400 text-[#F9FAEF] transform rotate-3 inline-block rounded-lg my-1 pl-1 pr-[6px]">21</span>
                {" "}papers.
              </h1>
            </div>
            <div className="flex flex-col items-end">
              <div className="pt-20 w-[400px] float-right">
                <h1 className="text-3xl font-bold">1. Join our online community</h1>
                <p className="text-[17px] pt-5">Our community helpers will help you polish your paper and provide you support along the way.</p>
              </div>
              <div className="pt-10 w-[400px] float-right">
                <h1 className="text-3xl font-bold">2. Submit your paper</h1>
                <p className="text-[17px] pt-5">After your paper is thoroughly polished, submit your paper to the database to get published.</p>
              </div>
              <div className="pt-10 w-[400px] float-right">
                <h1 className="text-3xl font-bold">3. Apply for opportunities</h1>
                <p className="text-[17px] pt-5">If your paper and research meets our standards, we will pay up to <span className="underline decoration-red-500">$200</span> for you go to a conference or get your paper published in a real journal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}