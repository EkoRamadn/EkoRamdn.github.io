import frame from "./../assets/portfolio/frame.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function PortofolioSection() {
    const container = useRef();

    useGSAP(() => {
        // gsap code here...

            gsap.from('.card', {
                opacity: 0,
                translateY: '-50px',
                duration: .5,
            })
            
    })
    return (
        <>
            {/* Portfolio section start */}
            <section className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800" id="portfolio" ref={container}>
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">
                                Portfolio
                            </h4>
                            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
                                Project Terbaru
                            </h2>
                            <p className="text-md font-medium text-secondary md:text-lg">
                            Beberapa projek coding terbaru saya meliputi pembuatan aplikasi Android, pengembangan situs web responsif, dan desain website E-commerc.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        <div className="mb-12 p-4 md:w-1/2 card">
                            <div className="rounded-md shadow-md overflow-hidden ">
                                <img src={frame} alt="" width="w-full" />
                            </div>
                            <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">
                                LAnding Page Sandika Galih
                            </h3>
                            <p className="font-medium text-base text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, eligendi! Necessitatibus, earum.
                            </p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2 card">
                            <div className="rounded-md shadow-md overflow-hidden ">
                                <img src={frame} alt="" width="w-full" />
                            </div>
                            <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">
                                E-Commerce
                            </h3>
                            <p className="font-medium text-base text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, eligendi! Necessitatibus, earum.
                            </p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2 card">
                            <div className="rounded-md shadow-md overflow-hidden ">
                                <img src={frame} alt="" width="w-full" />
                            </div>
                            <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">
                                Aplikasi Kasir
                            </h3>
                            <p className="font-medium text-base text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, eligendi! Necessitatibus, earum.
                            </p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2 card">
                            <div className="rounded-md shadow-md overflow-hidden ">
                                <img src={frame} alt="" width="w-full" />
                            </div>
                            <h3 className="font-semibold text-xl text-dark dark:text-white mt-5 mb-3">
                                Admin Panel
                            </h3>
                            <p className="font-medium text-base text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, eligendi! Necessitatibus, earum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio section end  */}
        </>
    );
}
