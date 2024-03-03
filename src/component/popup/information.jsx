
export default function PopupInfo() {
    function hidePopup(){
        const popUpInfo = document.querySelector('#popUpInfo')
        popUpInfo.classList.add('hidden')
    }
    return(
        <>
        <div className="w-screen pt-36 pb36 fixed top-0 left-0 z-[99999]" id="popUpInfo">
            <div className="container">
                <div className="w-2/3 px-4 py-4 mb-10 mx-auto ring-1 ring-primary bg-slate-200 rounded-lg ">
                    <h4 className="text-lg font-bold mb-1">INFORRMATION</h4>
                    <p className="text-base mb-4">Fitur yang anda coba belum taersedia tunngu hingga pembaruan dari kami unruk mencobanya kembali</p>
                    <button onClick={hidePopup} className="relative bg-primary text-white px-4 py-2 rounded-lg">Oke</button>
                </div>
            </div>
        </div>
        </>
    )
}