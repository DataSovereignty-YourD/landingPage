import { GoPerson } from 'react-icons/go';
import Tron from '../../assets/img/tronLogo.png';
import Eth from '../../assets/img/ehtereumLogo.png';
import Polkadot from '../../assets/img/polkadotLogo.png';
import Evmos from '../../assets/img/evmosLogo.png';
import Klaytn from '../../assets/img/klaytnLogo.png';
import Tzapc from '../../assets/img/tzapc.png';
import googlecloud from '../../assets/img/googlecloud.png';
import Ebsi from '../../assets/img/ebsieuro.png';
import W3C from '../../assets/img/w3cimg.png';
import Tezos from '../../assets/img/tezosLogo.png';
export default function YourdAwards() {
  return (
    <div className="min-h-[800px] relative mt-32">
      <div className='flex justify-center items-center text-xl sm:text-4xl font-pre-bold mt-20'>Awards</div>
      <div className="flex justify-center items-center gap-12 sm:gap-20 mt-10">
        <img src={Tron} className="w-[70px] sm:w-[250px]" />
        <img src={Polkadot} className="w-[70px] sm:w-[250px]" />
        <img src={Eth} className="w-[70px] sm:w-[250px]" />
      </div>
      <div className="flex justify-center items-center gap-20 mt-10">
        <img src={Evmos} className="w-[70px] sm:w-[250px]" />
        <img src={Klaytn} className="w-[70px] sm:w-[250px]" />
      </div>
      <div className='mt-20 text-xl sm:text-4xl font-pre-bold flex justify-center items-center'>Standards Achievement</div>
      <div className="flex justify-center items-center gap-20 mt-10">
        <img src={W3C} className='w-[50px] sm:w-[170px]'/>
        <img src={Ebsi} className='w-[120px] sm:w-[300px]'/>
      </div>
      <div className='mt-12 text-xl sm:text-4xl font-pre-bold flex justify-center items-center'>Partners</div>
      <div className="flex justify-center items-center gap-8 sm:gap-20 mt-2">
        <img src={Tezos} className='w-[100px] sm:w-[250px]'/>
        <img src={Tzapc} className='w-[100px] sm:w-[250px]'/>
        <img src={googlecloud} className='w-[100px] sm:w-[250px]'/>
      </div>
    </div>
  );
}
