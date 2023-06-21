import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/YourD-Logo-high.png";
export default function TopNavi(){
    return(
        <div className="h-16 w-full bg-white bg-opacity-95 fixed lg:px-64 md:px-40 sm:px-16 transition-all duration-300">
            <HashLink smooth to="#" className="bg-black"><img src={logo} className="h-full" alt="Logo"/></HashLink>
        </div>
    )
}