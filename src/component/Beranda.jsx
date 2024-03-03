import ekorama from './../assets/foto.jpg'


export default function HeroSection() {
    function popUPText_() {
        document.querySelector('#popUpInfo').classList.remove('hidden')
    }
    return (
        <>
            {/* hero section start */}
            <section id='home' className="pt-36 dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self center px-4 lg:w-1/2">
                            <h1 className='text-base font-semibold text-primary md:text-xl '>Halo Semua 👋, Saya <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white'>Eko Ramadani.</span></h1>
                            <h2 className='font-medium text-secondary text-lg mb-5'>Web Developer</h2>
                            <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Belajar web programming mudah dan menyenangkan bukan. <span className='text-dark font-semibold dark:text-white'>bukan!</span></p>
                            <div className="flex items-center">

                                <a href="#contact" className=' text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out' >Hubungi Saya</a>
                                {/* <button onClick={popUPText_} className="inline-block p-2 rounded-full border-2 border-dark ml-2 group hover:bg-dark hover:cursor-pointer">
                                    <div className="border-t-2 border-l-2 w-3 h-3 rotate-[225deg] border-dark translate-y-[-2px] group-hover:border-white"></div>
                                </button> */}
                            </div>
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2 mt-7 lg:mt-0">
                            <div className="mt-10 relative lg:right-0">
                                <img width="360" height="360" className='w-72 mx-auto border-solid border-4 border-dark dark:border-primary rounded-full lg:w-96' src={ekorama} alt="" />
                                {/* <span className='w-[400px] h-[400px] bg-dark block absolute bottom-0 -z-10 '>
            </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* hero section end */}
        </>
    )
}