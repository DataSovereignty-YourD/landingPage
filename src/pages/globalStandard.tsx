import W3CLogo from '../assets/img/logos_w3c.png';
export default function GlobalStandard() {
    return (
        <div className="w-full justify-center items-center h-screen flex flex-col relative font-sf-pro-text">
         <>
            <div className="uppercase text-4xl text-center font-bold mb-5">global standard</div> 
            <div className='text-2xl'>We actively engage in the development of global standards to ensure that digital identity functions effectively for all</div>
         </>
         <img src={W3CLogo} className="w-32 mt-14 backdrop-blur-sm"/>
        </div>
    )
}