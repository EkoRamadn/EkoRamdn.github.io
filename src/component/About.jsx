import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function AboutSection() {
    const container = useRef();

    useGSAP(() => {
        // gsap code here...
            gsap.from('#title1', {
                opacity: 0,
                translateX: '-50px',
                duration: .5,
            })
            gsap.from('#p1,#p2', {
                opacity: 0,
                translateX: '-50px',
                duration: 1.3,
            })
            gsap.from('#subTitle1,#subTitle2', {
                opacity: 0,
                translateX: '-50px',
                duration: .9,
            })
            gsap.from('#social', {
                opacity: 0,
                translateX: '-50px',
                duration: 1.9,
            })
    
    
    
    

        }, { scope: container }); 
    return (
        <>
            {/* about section start */}
            <section id="about" className='pt-36 pb-16 dark:bg-dark' ref={container}>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2"> 
                            <h4 className='font-bold uppercase text-primary text-lg mb-3  max-w-xl' id="title1">Tentang Saya</h4>
                            <h2 className='font-bold text-dark text-3xl mb-5 max-w-xl lg:text-4xl dark:text-white' id="subTitle1">Kenal Singkat Tentang Saya </h2>
                            <p className='font-medium text-base text-secondary lg:text-lg' id="p1">Perkenalkan nama saya Eko Ramadani Saya merupakan siswa kelas 12  jurusan IPA dari SMAN 1 GARUM, Gemar dalam dunia perkodingan dan ini merupakan Website Profile saya.</p>
                        </div>
                        <div className="w-full  px-4 lg:w-1/2">
                            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3x lg:pt-10 dark:text-white' id="subTitle2">Mari Berteman</h3>
                            <p className='font-medium text-secondary mb-6 lg:text-lg' id="p2">Mari berpetualang di dunia digital bersama saya! Temukan kisah seru, inspirasi, dan persahabatan baru di sosial media saya.</p>
                            <div className="flex items-center *:mx-2 *:text-secondary" id="social">
                                <a href="https://www.instagram.com/_ekoramdn?igsh=MWJjdm9ycHNhOTM2YQ==" className='w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white' target='_blank'>
                                    <FaInstagram className='fill-current' />
                                </a>
                                <a href="" className='w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                                    <CiLinkedin className='fill-current' />
                                </a>
                                <a href="https://github.com/EkoRamadan?fbclid=PAAaZPjWJZ3TB7PFRfBd6Eu6TEM4FnqxMtopB42s3WkUpLbG5Tu_qRhWHN944" className='w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white'>
                                    <FaGithub className='fill-current' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}
        </>
    )
}