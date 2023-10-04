import DescrbieLogin from '../../components/solutions/login/describeLogin';
import LoginDiagram from '../../components/solutions/login/loginDiagram';
import LoginHeader from '../../components/solutions/login/loginHeader';
import AdvantageLogin from '../../components/solutions/login/advantageLogin';
import '../../assets/css/describe1.css';
import LoginButtonCard from '../../components/loginButtonCard';
import Footer from '../../components/common/footer';
export default function YourDLoginPage() {
  return (
    <>
      <LoginHeader />
      <DescrbieLogin />
      <LoginDiagram />
      <AdvantageLogin />
      <div className="h-1/2 , relative">
        <LoginButtonCard />
      </div>
      <Footer />
    </>
  );
}
