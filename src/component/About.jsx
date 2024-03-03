import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function AboutSection() {
    

    return (
        <>
            {/* about section start */}
            <section id="about" className='pt-36 pb-16 dark:bg-dark'>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2">
                            <h4 className='font-bold uppercase text-primary text-lg mb-3  max-w-xl'>Tentang Saya</h4>
                            <h2 className='font-bold text-dark text-3xl mb-5 max-w-xl lg:text-4xl dark:text-white'>Kenal Singkat Tentang Saya </h2>
                            <p className='font-medium text-base text-secondary lg:text-lg'>Seorang lulusan SMA yang gemar dalam ngoding, menciptakan dunia digital dengan kreativitas dan semangat yang membara.</p>
                        </div>
                        <div className="w-full  px-4 lg:w-1/2">
                            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3x lg:pt-10 dark:text-white'>Mari Berteman</h3>
                            <p className='font-medium text-secondary mb-6 lg:text-lg'>Mari berpetualang di dunia digital bersama saya! Temukan kisah seru, inspirasi, dan persahabatan baru di sosial media saya.</p>
                            <div className="flex items-center *:mx-2 *:text-secondary">
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