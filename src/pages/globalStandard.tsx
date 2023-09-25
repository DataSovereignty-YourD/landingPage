import W3CLogo from '../assets/img/logos_w3c.png';
export default function GlobalStandard() {
    return (
        <div className="w-screen justify-center items-center h-screen flex flex-col relative font-sf-pro-text">
         <>
            <div className="uppercase text-xl sm:text-4xl text-center font-bold mb- w-full">global standard</div> 
            <div className='font-medium text-sm px-4 sm:text-2xl w-full'>We actively engage in the development of global standards to ensure that digital identity functions effectively for all</div>
         </>
         <img src={W3CLogo} className="w-20 sm:w-32 mt-14 backdrop-blur-sm"/>
        </div>
    )
}