import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from 'react-icons/fi';
import {HiShieldExclamation} from 'react-icons/hi';

const LoginButton = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className=" overflow-hidden px-4 py-12 mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-pre-bold leading-[1.2] md:text-5xl">
            We're good. <span className="text-neutral-400">Here's why.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black rounded-full p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black rounded-full p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, Icon, problem1, problem2, solution }) => {
  const [isHovered, setIsHovered] = useState(false);
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: 'easeInOut',
        duration: 0.35,
      }}
      className={`relative flex min-h-[350px] h-fit w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-2/5 ${
        index % 2 ? 'bg-black text-white' : ' bg-white'
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-2xl font-pre-bold">{title}</h3>

      {isHovered ? (
        <p>{solution}</p>
      ) : (
        <>
          <p>{problem1}</p>
          <p>{problem2}</p>
        </>
      )}
    </motion.div>
  );
};

export default LoginButton;

const features = [
  {
    title: 'Web 3.0 services developer in progress.',
    Icon: HiShieldExclamation,
    problem1:
      '•Do you find the complex processes of user authentication and data management challenging?',
    problem2:
      '•Are you concerned about security and compatibility issues in the Web 3.0 environment?',
    solution:
      '•YourD Login is based on the W3C DID standard, helping to provide secure and efficient authentication. This allows you to remain competitive even in the Web 3.0 environment.',
  },

  {
    title: '블록체인 애플리케이션을 개발 중인 개발자',
    Icon:  HiShieldExclamation,
    problem1:
      '•전통적인 인증 방식이 블록체인 환경에 적합하지 않게 느껴지시나요?',
    problem2:
      '•사용자 데이터의 보호와 관리에 대한 더 나은 방법을 찾고 계신가요?',
    solution:
      '•YourD Login은 블록체인에 맞는 인증 방법을 제공하여 사용자 경험과 데이터 보호를 모두 강화해드립니다.',
  },

  {
    title: '사용자 로그인 과정의 단순화를 원하는 개발자',
    Icon: FiUpload,
    problem1: '•사용자들의 로그인 경험에 대한 피드백이 부담스러우신가요?',
    problem2: '•사용자 경험을 향상시키는 방법을 고민하고 계신가요?',
    solution:
      '•YourD Login의 QR 코드 기반 로그인으로 사용자의 만족도를 높이면서 로그인 절차도 간소화됩니다.',
  },

  {
    title: 'Web 3.0 서비스를 구축 중인 개발자',
    Icon: FiUpload,
    problem1:
      '사용자 인증과 데이터 관리에 대한 복잡한 과정 때문에 진행이 어렵게 느껴지시나요?',
    problem2: 'Web 3.0 환경의 보안과 호환성 문제로 걱정이 되시나요? ',
    solution:
      ' YourD Login은 W3C DID 표준에 기반해 안전하고 효율적인 인증을 도와줍니다. 이를 통해 Web 3.0 환경에서도 경쟁력을 갖추실 수 있습니다.',
  },
];
