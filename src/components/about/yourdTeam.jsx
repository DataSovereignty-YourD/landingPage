import profileImage from '../../assets/img/profile.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Back from '../../assets/img/back.png';
import { Link } from 'react-router-dom';


const profiles = [
  { name: 'J.G', position: 'CEO / Co-Founder', sns1: 'https://www.linkedin.com/in/j-g-y-a7b429244/', sns2: 'https://twitter.com/SSi3_0' },
  { name: 'Cha', position: 'CTO / Co-Founder', sns1: 'https://www.linkedin.com/in/younghoon-cha-1173a5248/', sns2: 'https://twitter.com/yhc125' },
  { name: 'Hwang', position: 'COO / Co-Founder', sns1: 'https://www.linkedin.com/in/ji-hwang-kim-10a539243/', sns2: 'https://twitter.com/unchain_hwang' },
  { name: 'Miix', position: 'Software Engineer', sns1: 'https://www.linkedin.com/in/miix-y-723b44271/', sns2: 'https://twitter.com/yeomjaeseu98392' },
  { name: 'Jake', position: 'Software Engineer', sns1: '', sns2: 'https://twitter.com/bagseon52525961' },
  { name: 'JJJ', position: 'Product Manager', sns1: 'https://www.linkedin.com/in/hyunchae-jo/', sns2: 'https://twitter.com/trip4e_J' },
  { name: 'Farrell', position: 'Designer', sns1: 'https://www.linkedin.com/in/%EC%98%88%EC%B0%AC-%EB%B0%95-36211b279/', sns2: 'https://twitter.com/Farrell_YourD' },
];

export default function YourdTeam() {
  return (
    <div className="flex-col min-h-[800px] px-10 flex justify-start relative">
      <div className="mt-28 text-4xl font-pre-bold gradientText">
        Meet the Innovators
      </div>
      <div className="mt-4 text-xl font-pre-regular">
        Behind the Scenes of Web 3.0 Revolution
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-32">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}
const ProfileCard = ({ profile }) => {
  return (
    <div className="w-[280px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative text-white py-4 text-center">
        <img src={Back} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 p">
          <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mx-auto border-4 border-white"/>
        </div>
      </div>

      <div className="flex flex-col items-center pb-10">
        <div className="mt-5">
          <p className="text-xl font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-600">{profile.position}</p>
        </div>
        <div className="flex mt-4 space-x-3 items-start">
          <a href={profile.sns1} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} className="hover:text-yellow-400 cursor-pointer" />
          </a>
          <a href={profile.sns2} target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} className="hover:text-yellow-400 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

