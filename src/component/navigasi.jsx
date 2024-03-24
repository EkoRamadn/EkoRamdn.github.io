import logo from './../assets/logo.jpg'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Navigation() {
    const container = useRef();

    useGSAP(() => {
        gsap.from('#heading', {
            opacity: 0,
            translateY: '-50px',
            duration: 1,
        })
    }, { scope: container }); 


    function hamburger() {
        const hamburger = document.querySelector('#hamburger')
        const navMenu = document.querySelector('#nav-menu')
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    }

    window.addEventListener('click',e => {
        const hamburgar = document.querySelector('#hamburger')
        const navMenu = document.querySelector('#nav-menu')
        if(e.target != hamburgar && e.target != navMenu){
            hamburgar.classList.remove('hamburger-active')
            navMenu.classList.add('hidden')
        }
    })

    window.onscroll = function () {
        const header = document.querySelector('header')
        const fixNav = header.offsetTop
        const toTop = document.querySelector("#toTop")

        if (window.pageYOffset > fixNav) {
            header.classList.add('navbar-fixed')
            toTop.classList.remove('hidden')
            toTop.classList.add('flex')
        } else {
            header.classList.remove('navbar-fixed')
            toTop.classList.remove('flex')
            toTop.classList.add('hidden')
        }
    }

    // dark toggle

    function darkToggle(){
        const darkToggle = document.querySelector('#dark-toggle')
        const html = document.querySelector('html')
    
        if(darkToggle.checked){
            html.classList.add('dark')
        }else{
            html.classList.remove('dark')
        }
    }


    return (
        <>
            {/* header start */}
            <header className='bg-transparent w-full absolute top-0 left-0 flex items-center z-10' ref={container} >
                <div className="container" id='heading'>
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#home" className='block py-6'>
                                <img className='w-8' src={logo} alt="" />
                            </a>
                        </div>

                        <div className='flex items-center px-4'>
                            <button id='hamburger' type="button" onClick={hamburger} name="hamburgar" className='block absolute right-4 px-1 lg:hidden z-[99999]'>
                                <span className='origin-top-left hamburger-line transition duration-300 ease-in-out'></span>
                                <span className='hamburger-line transition duration-300 ease-in-out'></span>
                                <span className='origin-bottom-left hamburger-line transition duration-300 ease-in-out'></span>
                            </button>

                            <nav id='nav-menu' className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-cyan-500 lg:dark:bg-transparent'>
                                <ul className='block lg:flex  *:text-dark dark:*:text-white '>
                                    <li className='group'>
                                        <a href="#home" className='flex text-base  py-2 mx-8 group-hover:text-primary'>
                                            Beranda
                                        </a>
                                    </li>
                                    <li className='group'>
                                        <a href="#about" className='flex text-base  py-2 mx-8 group-hover:text-primary '>
                                            Tentang Saya
                                        </a>
                                    </li>
                                    <li className='group'>
                                        <a href="#portfolio" className='flex text-base  py-2 mx-8 group-hover:text-primary '>
                                            Portfolio
                                        </a>
                                    </li>
                                    <li className='group'>
                                        <a href="#client" className='flex text-base  py-2 mx-8 group-hover:text-primary '>
                                            Keahlian
                                        </a>
                                    </li>
                                    <li className='group'>
                                        <a href="#blogs" className='flex text-base  py-2 mx-8 group-hover:text-primary '>
                                            Blog
                                        </a>
                                    </li>
                                    <li className='group'>
                                        <a href="#contact" className='flex text-base  py-2 mx-8 group-hover:text-primary '>
                                            Contact
                                        </a>
                                    </li>
                                    <li className='flex items-center pl-8 mt-3'>
                                        <div className="flex ">
                                            <span className='mr-2 text-sm text-slate-500'>Light</span>
                                            <input onClick={darkToggle} type="checkbox" className='hidden' name="" id="dark-toggle" />
                                            <label htmlFor="dark-toggle">
                                                <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                                    <div className='toggle-circle h-4 w-4 rounded-full bg-white transition duration-300'></div>
                                                </div>
                                            </label>
                                            <span className='ml-2 text-sm text-slate-500'>Dark</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}

             {/* back to start */}
             <a href="#home" id="toTop" className="p-4 z-[9999] hidden items-center justify-center h-14 w-14 bg-primary rounded-lg fixed bottom-4 right-4 hover:animate-pulse">
                <span className="mt-2 block h-5 w-5 border-t-2 border-l-2 rotate-45"></span>
            </a>
        </>
    )
}