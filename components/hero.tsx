import Image from 'next/image';

export default function Hero() {
    return (
        <>
            <div className="relative h-[50vh] w-full">
                <Image
                    src="/outernet.jpg"
                    alt="Hero image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="h-[50vh] w-full backdrop-blur-lg bg-[#16161452]"></div>
            </div>
            <div className="absolute top-0 h-[50vh] w-full bg-none flex flex-row justify-center items-center z-0">
                <div className="w-fit h-fit">
                    <h1 className="font-bold text-[80px] text-[#F9FAEF]">Hack Club Journal</h1>
                    <div className="w-fit italic text-[#F9FAEF] text-[35px]">A <div className="rotate-6 w-fit bg-[red] p-1 rounded-lg">free</div> scientific journal for all teens.</div>
                    <div className="mt-5 flex justify-center items-center w-fit h-fit gap-[20px]">
                        <button className="border-2 bg-[#F9FAEF] hover:bg-black hover:text-[#F9FAEF] border-black px-5 py-2 rounded-md">Get Started</button>
                        <button className="bg-black border-2 border-black hover:bg-[#F9FAEF] hover:text-black text-[#F9FAEF] px-5 py-2 rounded-md">Get Free Stickers</button>
                    </div>
                </div>
                <div className="ml-[100px] h-[400px] w-[300px] bg-[#F9FAEF] wiggle rounded-lg p-3 flex flex-col">
                    <h1 className="mb-1 text-2xl underline decoration-dotted">Trending Paper</h1>
                    <p className="italic">Why OuterNet is so awesome</p>
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
                <div className="ml-[100px] h-[400px] w-[300px] bg-[#F9FAEF] wiggle rounded-lg p-3 flex flex-col">
                    <h1 className="mb-1 text-2xl underline decoration-dotted">Recent Paper</h1>
                    <p className="italic">Why OuterNet is so awesome</p>
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
            <div className="w-full h-[50vh] bg-[#F9FAEF]"></div>
        </>
    );
}