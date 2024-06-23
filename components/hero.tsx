import Image from 'next/image';

export default function Hero() {
    return (
        <>
            <div className="relative h-[450px] w-full">
                <Image
                    src="/outernet.jpg"
                    alt="Hero image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="h-[450px] w-full backdrop-blur-lg bg-[#16161452]"></div>
            </div>
            <div className="absolute top-0 h-[450px] w-full bg-none flex flex-row justify-center items-center z-0">
                <div className="p-10 w-fit h-fit">
                    <h1 className="font-bold text-[50px] text-[#F9FAEF]">Hack Club Journal</h1>
                    <div className="flex flex-column justify-center items-center w-fit h-fit italic text-[#F9FAEF] text-[20px]">
                        <p>A</p><p className="-rotate-6 w-fit bg-red-400 p-1 mx-1 rounded-lg">free</p><p> scientific journal for all teens.</p>
                    </div>
                    <div className="mt-5 flex justify-center items-center w-fit h-fit gap-[20px]">
                        <button className="border-2 bg-[#F9FAEF] hover:bg-black hover:text-[#F9FAEF] border-black px-5 py-2 rounded-md">Get Started</button>
                        <button className="bg-black border-2 border-black hover:bg-[#F9FAEF] hover:text-black text-[#F9FAEF] px-5 py-2 rounded-md">Get Free Stickers</button>
                    </div>
                </div>
                <div className="ml-[50px] h-[300px] hidden md:flex w-auto w-max-[325px] bg-[#F9FAEF] wiggle rounded-lg p-3  flex-col">
                    <h1 className="mb-1 text-xl underline decoration-dotted">Trending Paper</h1>
                    <p className="italic text-[15px]">Why OuterNet is so awesome</p>
                    <p className="text-sm mb-3">- by Zach Latta</p>
                    <div className="flex-grow relative">
                        <Image
                            src="/outernet.jpg"
                            alt="Test image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="m-[50px] h-[300px] hidden md:flex w-auto w-max-[325px] bg-[#F9FAEF] wiggle rounded-lg p-3  flex-col">
                    <h1 className="mb-1 text-xl underline decoration-dotted">Recent Paper</h1>
                    <p className="italic text-[15px]">Why OuterNet is so awesome</p>
                    <p className="text-sm mb-3">- by Zach Latta</p>
                    <div className="flex-grow relative">
                        <Image
                            src="/outernet.jpg"
                            alt="Test image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}