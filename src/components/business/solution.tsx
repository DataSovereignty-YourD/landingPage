import DataSelling from "../../assets/img/dataSelling.png";
import YourDSaaS from "../../assets/img/dataPass.png";
import FastAuth from "../../assets/img/fastAuth.png";
import Analytics from "../../assets/img/analytics.png";

export default function Solution() {
    const solutions = [
        {
            id:1,
            title: 'Web 3.0 Login Solution',
            subtitle: 'YourD Login으로 복잡함 없이 프로젝트 시작하기',
            description: "YourD Login은 seamless한 로그인 방식으로, 기존 지갑 로그인의 복잡성을 해결해 웹 3.0 프로젝트 빌딩을 간단하게 만들며, 이로 인해 리얼 월드에서의 활용 가능성까지 열어놓는 진정한 웹 3.0 로그인 솔루션입니다.",
            image: FastAuth,
            bgColor: 'bg-[#fccc00]'
        },{
            id:2,
            title: '진정한 웹 3.0 데이터 소유 솔루션',
            subtitle: 'YourD Pass로 사용자 중심의 데이터 관리 구현하기',
            description: "YourD Pass는 사용자의 데이터 소유권을 중심으로 설계된 솔루션으로, 온라인에서의 디지털 신원부터 오프라인에서의 RSVP, RWA에 이르기까지 광범위한 영역에서 활용이 가능합니다. 이를 통해 사용자는 자신의 데이터를 원활하게 관리하고 활용할 수는 진정한 웹 3.0 솔루션입니다.",
            image: YourDSaaS,
            bgColor: 'bg-[#fccc00]'
        },{
            id:3,
            title: '진정한 웹 3.0 사용자 분석 도구',
            subtitle: 'YourD Analytics로 데이터 주권을 존중하며 효과적인 분석 진행하기',
            description: "YourD Login과 YourD Pass를 통해 데이터 주권이 활성화되면, 웹3.0 환경에서도 사용자 분석을 진행할 수 있습니다. GDPR과 같은 규정을 준수하면서도, 유저 인덱싱 및 데이터 분석을 통해 서비스를 향상시킬 수 있는 기회를 제공합니다.",
            image: Analytics,
            bgColor: 'bg-[#007aff]'
        },{
            id:4,
            title: 'YourD Data Selling',
            subtitle: '개인정보 수집 없이 데이터 활용한 다양한 서비스 제공',
            description: "YourD는 영지식증명을 통해 개인정보 수집 없이 사용자와 서비스 제공자가 원활하게 연결되는 환경을 제공하며, 이를 바탕으로 다른 서비스들이 새로운 비즈니스 모델을 탐색하고 구축할 수 있게 합니다. 이로써, 기존과 달리 데이터 소유권을 존중하면서도 효과적인 서비스 제공이 가능해집니다.",
            image: DataSelling,
            bgColor: 'bg-[#007aff]'
        }
    ]


    return (
        <div className="mx-7 sm:w-3/4 sm:mx-auto min-h-screen flex flex-col items-center justify-center font-sf-pro-text relative ">
            <div className="grid grid-cols-4 w-full gap-y-10 gap-x-5">
                {solutions.map((solution) => (
                    <div key={solution.id} className={`col-span-4 sm:col-span-2 h-full sm:p-6  rounded-sm  backdrop-blur-sm bg-opacity-20 ${solution.bgColor} `}>
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-lg sm:text-2xl leading-3">{solution.title}</span>
                                <span className="font-medium text-[16px] sm:text-lg text-slate-600 leading-5">{solution.subtitle}</span>
                                <span className="font-normal mt-5 text-sm leading-5">{solution.description}</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div>Learn More</div>
                                <img src={solution.image} alt={solution.title} className="w-32 sm:w-52"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}