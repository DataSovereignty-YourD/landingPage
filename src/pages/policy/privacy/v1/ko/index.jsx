
const PrivacyV1KO = () => {

    return (
        <div className="leading-relaxed text-gray-500 text-md">
            {/* 제목 */}
            <p className="mb-6 text-gray-500">
                YourD(이하 “회사”)는 이용자가 모바일 디지털 월렛 서비스와 SaaS 기반 대시보드 서비스를 안전하고 원활하게 이용할 수 있도록,
                개인정보 보호법 및 관련 법령을 준수하여 개인정보를 적법하게 처리·관리하고 있습니다. 본 개인정보처리방침은 회사가 제공하는 모든
                서비스(이하 “서비스”)에 적용되며, 이용자의 개인정보 수집, 이용, 제공, 보유·파기, 안전성 확보 조치 및 이용자의 권리 행사 등에 관한
                사항을 규정합니다.
            </p>

            {/* 제1조 */}
            <h2 className="text-gray-800 font-bold mb-3">1. 목적 및 적용범위</h2>
            <p className="mb-6 text-gray-500">
                본 개인정보처리방침은 회사가 제공하는 모바일 디지털 월렛 서비스와 SaaS 기반 대시보드 서비스를 이용하는 모든 이용자(개인 및 기업)의
                개인정보 처리에 관한 회사의 방침을 규정하는 것을 목적으로 하며, 서비스 가입, 이용 및 관련 부가서비스에 모두 적용됩니다.
            </p>

            <hr className="my-10" />

            {/* 제2조 */}
            <h2 className="text-gray-800 font-bold mb-3">2. 개인정보의 처리 목적 및 수집 항목</h2>
            <section className="ml-4 ">
                <p className="mb-2 font-medium text-gray-700">1) 처리 목적</p>
                <ul className="list-disc list-inside mb-4 ml-5 text-gray-500">
                    <li><strong className="text-gray-700">회원 가입 및 관리:</strong> 회원의 신원 확인, 본인 인증, 계정 유지·관리, 부정 이용 방지</li>
                    <li>
                        <strong className="text-gray-700">서비스 제공:</strong> 모바일 월렛 서비스(디지털 자산 관리, 전송 등) 및 SaaS 대시보드 서비스(데이터 조회, 통계, 설정 관리 등)
                        제공
                    </li>
                    <li>
                        <strong className="text-gray-700">구독 및 결제 처리:</strong> 구독 모델에 따른 요금 결제, 자동 갱신, 환불 처리
                    </li>
                    <li><strong className="text-gray-700">마케팅 및 고객 지원:</strong> 맞춤형 콘텐츠, 광고, 이벤트 안내 등</li>
                    <li><strong className="text-gray-700">법적 의무 이행 및 분쟁 해결</strong></li>
                </ul>
                <p className="mb-2 font-medium text-gray-700">2) 수집 항목</p>
                <ul className="list-disc list-inside mb-6 ml-5 text-gray-500">
                    <li>
                        <strong className="text-gray-700">필수 수집 항목:</strong>
                        <ul className="list-disc list-inside ml-5">
                            <li>모바일 월렛 서비스: 기기식별자, 휴대전화번호, 이메일주소, 지갑 주소 등</li>
                            <li>
                                SaaS 대시보드 서비스: 연락처(휴대전화번호, 이메일주소), 구독 결제 정보, 서비스 이용 기록
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-gray-700">선택 수집 항목:</strong> 추가 맞춤형 서비스 제공을 위한 부가 정보(예: 관심 분야, 부서 정보 등)
                    </li>
                </ul>
            </section>

            <hr className="my-10"/>

            {/* 제3조 */}
            <h2 className="text-gray-800 font-bold mb-3">3. 개인정보의 수집 방법</h2>
            <ul className="list-disc list-inside mb-6 ml-5 text-gray-500">
                <li>직접 입력: 회원가입 및 서비스 이용 과정에서 이용자가 직접 정보를 입력하는 경우</li>
                <li>자동 수집: 웹/앱 접속 시 단말기 정보, IP 주소, 쿠키, 방문 일시, 이용 기록 등</li>
                <li>제휴 및 외부 제공: 제휴 서비스 또는 고객센터 상담 등을 통한 수집</li>
            </ul>

            <hr className="my-10"/>

            {/* 제4조 */}
            <h2 className="text-gray-800 font-bold mb-3">4. 개인정보의 이용 및 제3자 제공</h2>
            <section className="ml-4">
                <p className="mb-2 font-medium text-gray-700">1) 개인정보 이용</p>
                <ul className="list-disc list-inside mb-4 ml-5 text-gray-500">
                    <li>회원 식별 및 본인 인증, 계정 관리</li>
                    <li>모바일 월렛 및 SaaS 대시보드 서비스 제공</li>
                    <li>구독 결제 처리, 자동 갱신 및 환불 정책 이행</li>
                    <li>맞춤형 콘텐츠, 광고, 이벤트 안내 등 마케팅 목적</li>
                    <li>법령 준수, 분쟁 해결, 보안 강화 및 고객 지원</li>
                </ul>
            </section>
            <section className="ml-4">
                <p className="mb-2 font-medium text-gray-700">2) 개인정보의 제3자 제공</p>
                <p className="mb-6 text-gray-500">
                    원칙적으로 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않으나, 법령에 따른 의무 이행, 긴급 상황 대응,
                    또는 제휴 및 위탁 계약에 따른 경우 필요한 최소한의 범위 내에서 제공할 수 있습니다.
                </p>
            </section>

            <hr className="my-10"/>

            {/* 제5조 */}
            <h2 className="text-gray-800 font-bold mb-3">5. 개인정보의 보유 및 이용기간 및 파기</h2>
            <p className="mb-6 text-gray-500">
                개인정보는 수집 및 이용 목적이 달성될 때까지 보유하며, 서비스별로 별도의 보존 기간(예: 구독 결제 기록은 5년, 회원 탈퇴 후 휴면계정 정보는 1년 등)을 적용합니다.
                보유 기간이 만료되거나 처리 목적이 달성된 개인정보는 전자적 파일은 복구가 불가능한 방법으로 삭제하고, 인쇄물 등은 분쇄 또는 소각하여 안전하게 파기합니다.
                단, 관계 법령에 따라 별도로 보존이 필요한 정보는 해당 기간 동안 보존됩니다.
            </p>

            <hr className="my-10"/>

            {/* 제6조 */}
            <h2 className="text-gray-800 font-bold mb-3">6. 이용자 및 법정대리인의 권리와 행사방법</h2>
            <p className="mb-6 text-gray-500">
                이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리 정지 요구 및 동의 철회를 요청할 수 있으며,
                이러한 권리 행사는 서면, 전자우편, 팩스 등으로 신청할 수 있습니다. 미성년자(만 14세 미만)의 경우 법정대리인이 개인정보 관련 권리를 행사합니다.
            </p>

            <hr className="my-10"/>

            {/* 제7조 */}
            <h2 className="text-gray-800 font-bold mb-3">7. 개인정보의 자동 수집 장치의 설치·운영 및 거부</h2>
            <p className="mb-6 text-gray-500">
                회사는 맞춤형 서비스 제공 및 통계 분석을 위해 쿠키 및 유사 기술을 사용합니다.
                이용자는 웹브라우저의 설정을 통해 쿠키 설치를 거부할 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
            </p>

            <hr className="my-10"/>

            {/* 제8조 */}
            <h2 className="text-gray-800 font-bold mb-3">8. 개인정보의 안전성 확보 조치</h2>
            <ul className="list-disc list-inside mb-6 ml-5 text-gray-500">
                <li>
                    <strong className="text-gray-700">기술적 조치:</strong> 개인정보 암호화, 접근 통제 시스템 구축, 보안 프로그램 설치 및 정기적 갱신
                </li>
                <li>
                    <strong className="text-gray-700">관리적 조치:</strong> 내부 관리 계획 수립, 개인정보 취급자 교육, 정기적인 내부 감사
                </li>
                <li>
                    <strong className="text-gray-700">물리적 조치:</strong> 전산실 및 자료보관실의 접근 통제, 보안 장비 설치
                </li>
            </ul>

            <h3 className=" font-bold my-6">YourD는 유럽연합 일반 개인정보보호법(General Data Protection Regulation) 및 EU 회원국의 법률(이하 ‘GDPR 등’)을 준수합니다.</h3>

            <p className="mb-6 text-gray-500">
                유럽연합(EU) 내 이용자를 대상으로 서비스를 제공하는 경우,
                EU 일반 개인정보보호법(General Data Protection Regulation, 이하 “GDPR”) 및 관련 법령을 철저히 준수합니다.
                회사는 이용자의 개인정보를 아래 “개인정보 처리의 목적 및 처리 근거”에 따라 합법적으로 처리하며,
                이용자가 자신의 개인정보에 대해 행사할 수 있는 권리를 최대한 보장합니다.
            </p>

            <h2 className=" font-bold mb-4">1) 개인정보 처리의 목적 및 처리 근거</h2>
            <ul className="list-disc list-inside mb-6 ml-5 text-gray-500">
                <li>
                    <strong className="text-gray-700">정보주체의 동의:</strong> 이용자가 명시적으로 동의한 범위 내에서 개인정보를 처리합니다.
                </li>
                <li>
                    <strong className="text-gray-700">계약의 체결 및 이행:</strong> 서비스 가입 및 이용에 따른 계약 이행을 위해 개인정보를 처리합니다.
                </li>
                <li>
                    <strong className="text-gray-700">법적 의무 준수:</strong> 관련 법령 및 규제 준수를 위해 필요한 경우 개인정보를 처리합니다.
                </li>
                <li>
                    <strong className="text-gray-700">회사 정당한 이익:</strong> 서비스 개선, 보안 강화, 맞춤형 콘텐츠 및 광고 제공 등 회사의 정당한 이익을 위해 처리합니다. 단, 이 경우 이용자의 기본 권리와 자유를 침해하지 않아야 합니다.
                </li>
            </ul>

            <h2 className=" font-bold mb-4">2) 유럽연합 내 이용자의 권리 보장</h2>
            <p className="mb-6 text-gray-500">
                GDPR에 따라, 이용자는 자신의 개인정보에 대해 다음과 같은 권리를 행사할 수 있습니다:
            </p>
            <ul className="list-disc list-inside mb-6 ml-5 text-gray-500">
                <li><strong className="text-gray-700">개인정보 이동권:</strong> 자신의 개인정보를 다른 서비스 제공자에게 이전해 달라고 요청할 수 있습니다.</li>
                <li><strong className="text-gray-700">정보 처리 거부권:</strong> 개인정보 처리에 대해 거부하거나, 동의를 철회할 수 있습니다.</li>
                <li><strong className="text-gray-700">불만 제기 및 구제:</strong> 개인정보보호 당국에 불만을 제기하거나, 구제 절차를 진행할 수 있습니다.</li>
            </ul>

            <hr className="my-10"/>

            {/* 제9조 */}
            <h2 className="text-gray-800 font-bold mb-3">9. 개인정보 보호책임자 및 고충처리 부서</h2>
            <p className="mb-6 text-gray-500">
                <strong className="text-gray-700">개인정보 보호책임자:</strong> 김지황 (CPO)<br />
                <strong className="text-gray-700">전화번호:</strong> 0507-1855-5086<br />
                <strong className="text-gray-700">이메일:</strong> hwang907@yourd.xyz<br /><br />
                <strong className="text-gray-700">개인정보 고충처리 부서:</strong> 개인정보보호팀 (담당자: 김지황)<br />
                <strong className="text-gray-700">연락처:</strong> 0507-1855-5086, hwang907@yourd.xyz
            </p>

            <hr className="my-10"/>

            {/* 제10조 */}
            <h2 className="text-gray-800 font-bold mb-3">10. 개인정보처리방침의 변경 및 고지</h2>
            <p className="mb-6 text-gray-500">
                회사는 개인정보 처리방침을 관련 법령, 정책 변경 또는 서비스 개선에 따라 개정할 수 있으며,
                개정 시 최소 7일 전에 홈페이지 공지사항 등을 통해 이용자에게 통지합니다.
                중요한 변경 사항이 있을 경우 별도의 전자우편, 문자, 팝업 등을 통해 추가 통지하며,
                개정된 방침은 공지일로부터 시행됩니다.
            </p>

            <hr className="my-10"/>

            {/* 부칙 */}
            <h2 className="text-gray-800 font-bold mb-3">11. 부칙</h2>
            <p className="mb-6 text-gray-500">
                본 개인정보처리방침은 2024년 02월 03일부터 시행됩니다.
            </p>

        </div>
    );
};

export default PrivacyV1KO;