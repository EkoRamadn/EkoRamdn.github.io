

export default function ContactSection() {
    return (
        <>
            {/* contact section start */}
            <section className="pt-36 pb-32 dark:bg-slate-800" id="contact">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                            <h2 className='font-bold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>Hubungi Saya</h2>
                            <p className='text-md font-medium text-secondary md:text-lg'>Untuk kontak lebih lanjut, jangan ragu hubungi saya melalui form di bawah ini atau media sosial saya. </p>
                        </div>
                    </div>

                    <form action="">
                        <div className='w-full lg:w-2/3 lg:mx-auto'>
                            <div className="w-full px-4 mb-8 ">
                                <label htmlFor="name" className='text-base font-bold text-primary'>Nama</label>
                                <input type="text" name="name" id="name" className='w-full bg-slate-200 text-dark dark:text-white p-3 rounded-md focus:border-primary focus:ring-primary focus:ring-1  focus:outline-none' />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="email" className='text-base font-bold text-primary'>Email</label>
                                <input type="email" name="email" id="email" className='w-full bg-slate-200 text-dark dark:text-white p-3 rounded-md focus:border-primary focus:ring-primary focus:ring-1  focus:outline-none' />
                            </div>
                            <div className="w-full px-4 mb-8">
                                <label htmlFor="message" className='text-base font-bold text-primary'>Pesan</label>
                                <textarea name="message" id="message" className='w-full bg-slate-200 text-dark dark:text-white p-3 rounded-md focus:border-primary focus:ring-primary focus:ring-1  focus:outline-none'></textarea>
                            </div>
                            <div className="w-full">
                                <button type="submit" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* contact section end*/}
        </>
    )
}