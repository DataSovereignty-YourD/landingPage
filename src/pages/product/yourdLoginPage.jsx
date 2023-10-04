import DescrbieLogin from '../../components/solutions/login/describeLogin';
import LoginDiagram from '../../components/solutions/login/loginDiagram';
import LoginHeader from '../../components/solutions/login/loginHeader';
import AdvantageLogin from '../../components/solutions/login/advantageLogin';
import '../../assets/css/describe1.css';
import LoginButtonCard from '../../components/solutions/login/loginButtonCard';
import Footer from '../../components/common/footer';
export default function YourDLoginPage() {
  return (
        <div className="flex flex-col relative  pt-16 items-center  mx-5 sm:mx-10 md:w-3/4 md:mx-auto ">
      <LoginHeader />
      <DescrbieLogin />
      <LoginDiagram />
      <AdvantageLogin />
      <div className="h-1/2 w-full relative">
        <LoginButtonCard />
      </div>
      <Footer />
    </div>
  );
}
