import writeIcon from './../assets/portfolio/write.jpg'

export default function () {
    const myBlogs = [
            { 
                id : 1,
                imge : '{writeIcon}',
                title : "Tips Belajar Programming" , 
                caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur dolorem officia esse.",
            },
            {
                id : 2,
                imge : {writeIcon},
                title : "Mecanical keyboard" , 
                caption : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, expedita.!",
            },
            {
                id : 3,
                imge : {writeIcon},
                title : "7 Cara Meningkatkan Keamanan Android",
                caption : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aspernatur aliquam dicta rem eius dolorem quia quod ad eveniet distinctio?"
            }
        ]
    
        const displayBlog = myBlogs.map(blog =>
            <div key={blog.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
                            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-10">
                                <a href="">
                                    <img src={blog.imge} alt="" className='w-full' />
                                </a>
                                <div className="py-8 px-6">
                                    <h3>
                                        <a href="" className='block mb-3 font-semibold text-xl text-dark dark:text-white hover:text-primary truncate'>
                                            {blog.title}
                                        </a>
                                    </h3>
                                    <p className='font-medium text-base text-secondary mb-6'>{blog.caption}</p>
                                    <a href="" className='font-medium text-sm text-white dark:text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Baca Selengkapnya</a>
                                </div>
                            </div>
                        </div>
            )
    return (
        <>
            {/* blog section strat */}
            <section className="pt-36 pb-32 bg-slate-100 dark:bg-dark" id='blogs'>
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
                            <h2 className='font-bold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl'>Tulisan Terkini</h2>
                            <p className='text-md font-medium text-secondary md:text-lg'>Berikut merupan blog baca karya Saya membahas seputar informasi teknologi,gaya hidup & Kabar baru terkini.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {displayBlog}
                    </div>
                </div>
            </section>
            {/* blog section end */}
        </>
    )
}