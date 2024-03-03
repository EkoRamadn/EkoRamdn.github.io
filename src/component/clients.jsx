
import htmlIcon from './../assets/icon/html.svg'
import cssIcon from './../assets/icon/css.svg'
import jsIcon from './../assets/icon/javaScript.svg'
import taiwindIcon from './../assets/icon/tailwindcss.svg'
import reactIcon from './../assets/icon/react.svg'

export default function () {
    return (
    <>
      {/* client section start */}
        <section className="pt-36 pb-32 bg-slate-800 dark:bg-slate-300" id="client">
        <div className="container">
            <div className="w-full px-4">
            <div className=" mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-slate-500 mb-2">
                Keahlian
                </h4>
                <h2 className="font-bold text-white dark:text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Bahasa dan Framework Yang Saya Kuasai
                </h2>
                <p className="text-md font-medium text-secondary md:text-lg">
                Saya mahir dalam beberapa bahasa pemrograman dan framework, Berikut merupankan Bahasa dan Frame work yang saya kuasai..
                </p>
            </div>
            </div>
            <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center ">
                <a
                href=""
                className="max-w-[80px] mx-4 grayscale opacity-60 transition hover:grayscale-0 duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                <img src={htmlIcon} alt="" />
                </a>
                <a
                href=""
                className="max-w-[80px] mx-4 grayscale opacity-60 transition hover:grayscale-0 duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                    <img src={cssIcon} alt="" />
                </a>
                <a
                href=""
                className="max-w-[60px] mx-4 grayscale opacity-60 transition hover:grayscale-0 duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                <img src={jsIcon} alt="" />
                </a>
                <a
                href=""
                className="max-w-[80px] mx-4 grayscale opacity-60 transition hover:grayscale-0 duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                    <img src={reactIcon} alt="" />
                </a>
                <a
                href=""
                className="max-w-[80px] mx-4 grayscale opacity-60 transition hover:grayscale-0 duration-500 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                    <img src={taiwindIcon} alt="" />
                </a>
            </div>
            </div>
        </div>
        </section>
      {/* client section end  */}
    </>
    );
}
