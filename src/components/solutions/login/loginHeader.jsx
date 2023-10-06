import Login from '../../../assets/img/loginMockUp.png';
export default function LoginHeader() {
    return (
        <div className='h-1/2 relative w-full text-center sm:text-left flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-70'>
            <div>
                <div className="text-2xl sm:text-4xl font-bold">
                    Your<span className="text-[#fccc00]">D</span> Login
                </div>
                <div className="font-semibold text-3xl sm:text-6xl gradientText mt-4">
                    Simplified, Seamless
                </div>
                <h2 className="font-semibold text-2xl mt-2">Web3.0 Access</h2>
                <p className="font-regular text-xl mt-4">
                    Open a <span className="text-[#fccc00]">safe</span> and <span className="text-[#fccc00]">fast</span> step to the Web 3.0 world!
                </p>
            </div>
            <img src={Login} alt="Login image" className="h-[340px] sm:h-[400px] my-12 sm:my-0 object-contain" />
        </div>
    );
}