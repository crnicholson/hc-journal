export default function Footer() {
    return (
        <footer className="bg-[#e1e1d8] p-10 text-black prose">
            <h1 className="pb-5 italic text-3xl">A project by Hack Club.</h1>
            <p className="w-[90%] lg:w-[60%]">
                Hack Club is a registered 501(c)3 nonprofit organization that supports
                a network of 20k+ technical high schoolers. We believe you learn best
                by building when you{"'"}re learning and shipping technical projects with
                your friends, so we{"'"}ve started You Ship, We Ship, a program where you
                ship a technical project and we ship you something in exchange. In the
                past few years, we{" "}
                <a
                    className="underline decoration-red-400 italic"
                    href="https://hackclub.com/onboard"
                >
                    fabricated custom PCBs designed by 265 teenagers
                </a>
                ,{" "}
                <a
                    className="underline decoration-red-400 italic"
                    href="https://github.com/hackclub/the-hacker-zephyr"
                >
                    hosted the world{"'"}s longest hackathon on land
                </a>
                , and{" "}
                <a
                    className="underline decoration-red-400 italic mb-10"
                    href="https://hackclub.com/winter"
                >
                    gave away $75k of hardware
                </a>
                .
            </p>
            <br />
            <div className="leading-relaxed flex mb-4">
                <div className="w-[300px]">
                    <h3 className="bold italic">Hack Club</h3>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/philosophy"
                        >
                            Philosophy
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/team"
                        >
                            Our Team &amp; Board
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/jobs"
                        >
                            Jobs
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/brand"
                        >
                            Branding
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/press"
                        >
                            Press Inquiries
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/donate"
                        >
                            Donate
                        </a>
                    </p>
                </div>
                <div className="pl-10 w-[300px]">
                    <h3 className="bold italic">Resources</h3>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/community"
                        >
                            Community
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/onboard"
                        >
                            OnBoard
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://sprig.hackclub.com"
                        >
                            Sprig
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://blot.hackclub.com"
                        >
                            Blot
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://hackclub.com/bin"
                        >
                            Bin
                        </a>
                    </p>
                    <p>
                        <a
                            className="underline decoration-red-400 italic"
                            href="https://jams.hackclub.com"
                        >
                            Jams
                        </a>
                    </p>
                </div>
            </div>
            <br />
            <p>© 2024 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499).</p>
        </footer>
    );
};
