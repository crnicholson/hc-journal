export default function Header() {
    return (
        <>
            <div className="-mt-[100vh] h-20 w-full bg-[#403f4c8c] backdrop-blur-sm text-black flex flex-row z-10">
                <div className="w-[35%] flex justify-start items-center">

                </div>
                <div className="w-[30%] flex justify-center items-center">
                    <h1 className="font-bold text-4xl">Hack Club Journal</h1>
                </div>
                <div className="w-[35%] flex justify-end items-center">
                    <p className="p-5">Yap</p>
                </div>
            </div>
        </>
    );
};