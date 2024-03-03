import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {

    return (
        <>
            {/* footer start */}
            <footer className='pt-24 pb-12 bg-dark'>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                            <h2 className='font-bold text-4xl text-white mb-5'>EC</h2>
                            <h3 className='font-bold  text-2xl mb-7'>Hubungi Saya</h3>
                            <p>ekoramadani@gmail.com</p>
                            <p>Jl. Raya Garum, Bence</p>
                            <p>Blitar</p>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3">
                            <h3 className='font-semibold text-xl text-white mb-5'>Kategory Tulisan</h3>
                            <ul className='text-slate-300'>
                                <li>
                                    <a href="" className='inline-block text-base hover:text-primary mb-3'>
                                        Programming
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='inline-block text-base hover:text-primary mb-3'>
                                        Teknologi
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='inline-block text-base hover:text-primary mb-3'>
                                        Gaya Hidup
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3">
                            <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
                            <ul className='text-slate-300'>
                                <li>
                                    <a href="#home" className='inline-block text-base hover:text-primary mb-3'>
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className='inline-block text-base hover:text-primary mb-3'>
                                        Tentang Saya
                                    </a>
                                </li>
                                <li>
                                    <a href="#client" className='inline-block text-base hover:text-primary mb-3'>
                                        Keahlian
                                    </a>
                                </li>
                                <li>
                                    <a href="#blogs" className='inline-block text-base hover:text-primary mb-3'>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className='inline-block text-base hover:text-primary mb-3'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full pt-10 border-t border-slate-700">
                        <div className="flex items-center *:mx-2 justify-center *:text-slate-400 mb-5">
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
                        <p className='font-medium text-xs text-slate-500 text-center'>Dibuat Oleh <a href="https://www.instagram.com/_ekoramdn?igsh=MWJjdm9ycHNhOTM2YQ==" className='underline font-bold text-zinc-400' target='_blank'>Eko Ramadani</a> 👌, mengunakan <a href="https://tailwindcss.com/" target='_blank' className='text-cyan-600'>Tailwind</a> Css</p>
                    </div>
                </div>
            </footer>
            {/* footer end */}
        </>

    )
}