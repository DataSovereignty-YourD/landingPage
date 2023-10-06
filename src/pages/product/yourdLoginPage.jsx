import DescrbieLogin from '../../components/solutions/login/describeLogin';
import LoginDiagram from '../../components/solutions/login/loginDiagram';
import LoginHeader from '../../components/solutions/login/loginHeader';
import AdvantageLogin from '../../components/solutions/login/advantageLogin';
import '../../assets/css/describe1.css';
import LoginButtonCard from '../../components/solutions/login/loginButtonCard';
import Footer from '../../components/common/footer';
export default function YourDLoginPage() {
  return (
    <div className="flex flex-col relative  pt-16 items-center">
      <div className=" mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
        <LoginHeader />
      </div>
      <div className="bg-stone-100 bg-opacity-70">
        <div className=" mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
          <DescrbieLogin />
        </div>
      </div>
      <div className=" mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
        <LoginDiagram />
      </div>
      <div className="bg-neutral-100 bg-opacity-70">
        <div className=" mx-5 sm:mx-10 md:w-4/5 md:mx-auto">
          <AdvantageLogin />
        </div>
      </div>
      {/* <div className="h-1/2 w-full relative">
        <LoginButtonCard />
      </div> */}
      <div className='bg-white w-full bg-opacity-70 pt-10'>
      <Footer/></div>
    </div>
  );
}
