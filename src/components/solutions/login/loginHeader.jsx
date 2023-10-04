import Login from '../../../assets/img/loginMockUp.png';
export default function LoginHeader() {
    return (
        <div className='h-1/2 relative w-full flex justify-between items-center bg-white'>
            <div>
                <h className="text-[66px] font-bold">
                    Your<span className="text-[#fccc00]">D</span> Login
                </h>
                <h1 className="font-semibold text-[66px] gradientText mt-4">
                    Simplified, Seamless
                </h1>
                <h2 className="font-medium text-2xl mt-4">Web3.0 Access</h2>
                <p className="font-medium text-xl mt-2">
                    Open a <span className="text-[#fccc00]">safe</span> and <span className="text-[#fccc00]">fast</span> step to the Web 3.0 world!
                </p>
            </div>
            <img src={Login} alt="Login image" className="w-1/3 object-contain pr-10" />
        </div>
    );
}