export default function Hero() {
    return (
        <>
            <div className="h-[100vh] w-full bg-slate-50 flex justify-center items-center">
                <div className="w-fit h-fit">
                    <h1 className="font-bold text-6xl">Hack Club Journal</h1>
                    <p className="pt-5 w-[400px] italic text-2xl">A free scientific journal for all teens.</p>
                    <div className="mt-5 flex justify-center items-center w-fit h-fit gap-[20px]">
                        <button className="bg-black border-2 border-black hover:bg-white hover:text-black text-white px-5 py-2 rounded-md">Submit Your Paper</button>
                        <button className="border-2 hover:bg-black hover:text-white border-black px-5 py-2 rounded-md">Get Free Stickers</button>
                    </div>
                </div>
                <div className="pl-[200px] w-fit h-fit">
                    <h1 className="text-4xl font-bold">Recent papers:</h1>
                    <div className="mt-5">
                        <p>Insert RSS here.</p>
                    </div>
                </div>
            </div>
        </>
    );
}