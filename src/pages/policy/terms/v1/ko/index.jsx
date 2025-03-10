
const TermsV1KO = () => {
    return (
        <div className="leading-relaxed text-gray-500 text-md">

            {/* 제1조 목적 */}
            <p id="section-1" className="text-md font-bold mb-3 text-gray-800">
                제1조 (목적)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    본 약관은 <span className="font-bold">유어디</span>(이하 '회사')가 YourD 온라인 사이트(이하 "서비스 홈페이지")를 통해 제공하는 분산 신원(DID) 기반의 인증 및 검증 소프트웨어 등의 이용에 관하여, "회사", "구성원" 및 회원의 권리∙의무와 책임사항을 규정하는 것을 목적으로 합니다.
                </li>
            </ol>

            <br id="section-1-br" />

            {/* 제2조 용어의 정의 */}
            <p id="section-2" className="text-md font-bold mb-3 text-gray-800">
                제2조 (용어의 정의)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    "서비스"라 함은, "회사"가 서비스 홈페이지를 통해 제공하는 분산 신원(DID) 기반의 인증 및 검증 소프트웨어 이용권 및 이에 부수하는 용역을 의미합니다.
                </li>
                <li>
                    "유료서비스"라 함은, "회사"가 "회원"으로부터 이용대가를 지급받고 제공하는 서비스를 의미합니다.
                </li>
                <li>
                    "무료체험"(Free-trial)이라 함은, "회원"이 유료서비스 가입 전에 일정 기간 동안 해당 서비스를 체험할 수 있도록 "회사"가 무료로 제공하는 서비스를 의미합니다.
                </li>
                <li>
                    "회원"이라 함은, 서비스 홈페이지에 접속하여 본 약관에 동의하고 "회사"와 이용계약을 체결한 자를 의미합니다.
                </li>
                <li>
                    "구성원"이라 함은, "회원"의 임직원 등으로서 "회원"으로부터 서비스 이용 권한을 부여받아 "회원"의 관리 하에 서비스를 이용하는 자를 의미하며, 이들은 관리자와 "일반 구성원"으로 구분됩니다.
                </li>
                <li>
                    관리자라 함은, 서비스의 모든 관리 기능을 이용할 수 있고, 서비스 이용계약 해지 등 주요 권한을 갖는 구성원을 의미합니다.
                </li>
                <li>
                    "일반 구성원"이라 함은, 별도의 관리 및 해지 권한 없이 서비스를 이용하는 "구성원"을 의미합니다.
                </li>
                <li>
                    "DID"라 함은 분산신원(Decentralized Identifier)을 의미하며, "회원"의 신원 인증 및 검증에 활용되는 기술적 기반을 말합니다.
                </li>
            </ol>

            <br id="section-2-br" />



            {/* 제3조 약관의 명시 및 개정 */}
            <p id="section-3" className="text-md font-bold mb-3 text-gray-800">
                제3조 (약관의 명시 및 개정)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 홈페이지의 초기 서비스화면에 게시합니다. 다만 본 약관의 내용은 회원이 연결화면을 통해
                    확인할 수 있도록 할 수 있습니다.&nbsp;
                </li>
                {/* <li>
                    회사는 회원이 약관에 동의하기에 앞서 약관에 정해진 내용 중 청약철회, 환불조건
                    등과 같은 내용을 회원이 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 통해 회원의
                    확인을 구합니다.&nbsp;
                </li> */}
                <li>
                    회사는 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률,
                    전자상거래 등에서의 소비자 보호에 관한 법률 등 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                </li>
                <li>
                    회사가 본 약관을 개정하고자 할 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께
                    서비스 홈페이지의 초기화면에 그 적용일자 7일전부터 적용일자 전날까지 공지합니다. 다만, 회원에게 불리한
                    내용으로 약관을 변경하는 경우 30일 전부터 공지를 진행함과 아울러 회원또는 구성원이 사전에 등록한
                    전자우편주소로 메일 전달,SMS, 로그인 시 안내 등 1개 이상 회원또는 구성원이 인지할 수 있는 방법으로 회원에게 개별 통지합니다.
                </li>
                <li>
                    회사가 본 약관을 개정한 경우, 개정약관은 적용일자 이후 체결되는 계약에만 적용되며 적용일자 이전
                    체결된 계약에 대해서는 개정 전 약관이 적용됩니다. 다만, 이미 계약을 체결한 회원이 개정약관의
                    내용을 적용받고자 하는 뜻을 회사에 전달하고 회사가 여기에 동의한 경우 개정약관을 적용합니다.
                </li>
                <li>
                    회원이 개정약관의 적용에 동의하지 않는 경우 회원은 이용계약을 해지할 수 있습니다.
                    개정약관의 적용에 대한 거부의사를 표시한 회원에 대해서는 개정 전 약관이 적용됨이 원칙이나,
                    개정 전 약관을 적용할 수 없는 특별한 사정이 있는 경우 회사는 회원과의 이용계약을 해지할 수 있습니다.
                </li>
                <li>
                    본 약관에서 정하지 아니한 사항 및 본 약관의 해석에 관하여는 관계법령 및 건전한 상관례에 따릅니다.
                </li>
            </ol>

            <br id="section-3-br" />


            {/* 제4조 약관 외 준칙 */}
            <p id="section-4" className="text-md font-bold mb-3 text-gray-800">
                제4조 (약관 외 준칙)
            </p>
            <p className="mb-6">
                본 약관에 명시되지 않은 사항은 관련 법령 및 회사가 정한 서비스의 개별 약관, 운영정책, 규칙(이하 "세부지침")에 따르며, 세부지침과 충돌할 경우 세부지침이 우선합니다.
            </p>


            <br id="section-4-br" />

            {/* 제5조 서비스 이용계약 체결 */}
            <p id="section-5" className="text-md font-bold mb-3 text-gray-800">
                제5조 (서비스 이용계약 체결)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사가 정한 양식에 따라 회원이 되고자 하는자(이하 "가입신청자")가 회사의 승낙을 득한 후' 본 약관에 동의한다는 의사표시를 함으로써
                    회원가입을 신청합니다.
                </li>
                <li>
                    회사는 가입신청자의 신청에 대하여 승낙함을 원칙으로 합니다. 다만, '회사는' 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수 있고,
                    승낙한 이후라도 다음 각 호의 사유를 확인하는 경우 계약을 해지할 수 있습니다.
                    <ol className="list-disc list-inside ml-5 space-y-1">
                        <li>
                            가입신청자가 이 약관에 의하여 이전에 회원 자격을 상실한 적이 있는 경우
                            (단 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함)
                        </li>
                        <li>회원정보에 허위, 기재누락, 오기 등 불완전한 부분이 있는 경우&nbsp;</li>
                        <li>범죄 기타 부정한 용도로 서비스를 이용하고자 하는 경우&nbsp;</li>
                        <li>가입신청자가 만 14세 미만인 경우&nbsp;</li>
                        <li>가입신청자의 귀책사유로 승인이 불가능하거나 본 약관 기타 관련 규정을 위반하여 신청하는 경우&nbsp;</li>
                        <li>기타 본 약관에 위반되거나 위법한 이용신청임이 확인된 경우&nbsp;</li>
                        <li>
                            기타 회원으로 등록하는 것이 회사의 운영에 현저한 지장을 초래하는 것으로 인정되는 경우
                        </li>
                    </ol>
                </li>
                <li>
                    회원가입 시기는 회사의 가입승낙 안내가 회원에게 도달한 시점으로 합니다.&nbsp;
                </li>
                <li>
                    회사는 서비스를 제공할 설비의 여유가 부족하거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.&nbsp;
                </li>
                <li>
                    회원가입신청의 승낙을 하지 아니하거나 유보한 경우, 회사는 그와 같은 사실을 '가입신청자'에게 통지하는 것을 원칙으로 합니다.&nbsp;
                </li>
                <li>
                    회사는 회원이 선택한 서비스의 종류에 따라 이용할 수 있는 범위 및 수준을 제한하여 서비스를 제공합니다.&nbsp;
                </li>
                <li>
                    회원이 유료서비스를 이용하기 위해서는 이용 대금을 회사가 정한 방법으로 결제하여야 합니다.&nbsp;
                </li>
            </ol>

            <br id="section-5-br" />

            {/* 제6조 개인정보 수집 */}
            <p id="section-6" className="text-md font-bold mb-3 text-gray-800">
                제6조 (개인정보 수집)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 적법하고 공정한 수단에 의하여 이용계약의 성립 및 이행에 필요한 최소한의 개인정보를 수집합니다.
                </li>
                <li>
                    회사는 개인정보의 수집시 관련 법규에 따라 개인정보 처리방침에 그 수집범위 및 목적을 사전 고지합니다.
                </li>
                <li>
                    회사는 서비스 화면에서 회사가 수집한 개인정보의 수집, 이용 또는 제공에 대한 동의를 철회할 수 있도록 필요한 조치를 취해야 합니다.
                </li>
            </ol>

            <br id="section-6-br" />

            {/* 제7조 개인정보보호 의무 */}
            <p id="section-7" className="text-md font-bold mb-3 text-gray-800">
                제7조 (개인정보보호 의무)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다.
                </li>
                <li>
                    개인정보의 보호 및 이용에 대해서는 관련법 및 회사의 개인정보 처리방침이 적용됩니다. 다만, 회사의 공식사이트 이외의 링크된 사이트에서는 회사의 개인정보 처리방침이 적용되지 않습니다.
                </li>
            </ol>

            <br id="section-7-br" />

            {/* 제8조 회원의 정보변경 */}
            <p id="section-8" className="text-md font-bold mb-3 text-gray-800">
                제8조 (회원의 정보변경)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회원은 관리자 페이지 화면을 통하여 언제든지 회원 정보를 열람하고 수정할 수 있습니다.
                    다만, 서비스 관리를 위해 필요한 아이디, 비밀번호, 기타 관리자 계정에 관한 정보(이하 ‘관리자 정보등’)는 회사의 별도 승낙이 없는 한 수정이 불가능합니다.
                </li>
                <li>
                    회원는 관리자 정보 등을 변경하려는 경우 유선연락 및 이메일을 통하여 변경사항을 고지하여야 하며,
                    변경사항 미수정 또는 변경사항 미통지로 인하여 발생한 회원의 불이익에 대해서는 회사는 책임을 지지 않습니다.
                </li>
            </ol>

            <br id="section-8-br" />

            {/* 제9조 회원에 대한 통지 */}
            <p id="section-9" className="text-md font-bold mb-3 text-gray-800">
                제9조 (회원에 대한 통지)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 본 약관에 별도 규정이 없는 한 회원이 등록한 전화, 이메일, 문자메시지 등 기타 통신수단을 이용하여 회원에게 통지할 수 있습니다.
                    회원이 이메일주소, 휴대전화번호 정보를 허위로 제출 또는 등록하거나, 변경된 정보를 수정 또는 회사에 고지하지 않은 경우 회사는 회원이 사전에 제출 또는 등록한 정보로 발송한 때에 회원에게 도달한 것으로 합니다.
                </li>
                <li>회사는 회원 전체에 대한 통지의 경우 7일 이상 회사의 홈페이지 또는 공지사항 게시판에 게시함으로써 제 1항의 통지에 갈음할 수 있습니다.</li>
            </ol>

            <br id="section-9-br" />

            {/* 제10조 회사의 의무 */}
            <p id="section-10" className="text-md font-bold mb-3 text-gray-800">
                제10조 (회사의 의무)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며,
                    계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
                </li>
                <li>
                    회사는 서비스 이용과 관련하여 발생하는 회원의 불만 또는 피해구제요청을
                    적절하게 처리할 수 있도록 필요한 인력 및 시스템을 구비하여야 합니다.
                </li>
                <li>
                    회사가 회원에 대한 서비스의 제공이 불가능해지는 경우, 회사는 부득이한 사유가 없는 한
                    서비스의 제공 중단 예정일의 3개월 전까지 본 약관 제19조에서 정한 방법으로 회원에게 통지하여야 합니다.
                </li>
            </ol>


            <br id="section-10-br" />

            {/* 제11조 이용자의 의무 */}
            <p id="section-11" className="text-md font-bold mb-3 text-gray-800">
                제11조 (이용자의 의무)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회원은 다음 각 호의 행위를 하여서는 아니 됩니다.
                    <ol className="list-inside list-disc ml-5 space-y-1">
                        <li>가입 및 이용시 허위정보를 등록하거나 변경하는 행위</li>
                        <li>제3자의 정보나 명의를 도용하거나 부정하게 사용하는 행위</li>
                        <li>제3자의 개인정보 및 타인에게 귀속된 정보를 그의 동의 없이 수집, 저장, 공개하는 행위</li>
                        <li>회사가 게시한 정보를 변경하거나 제3자에게 제공하는 행위</li>
                        <li>제3자의 코드, 파일, 프로그램을 포함하고 있는 자료를 무단으로 게시하거나 메일로 발송하는 행위 기타 회사 또는 제3자의 지식재산권을 침해하는 행위</li>
                        <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                        <li>
                            외설, 폭력적, 인신공격적, 비방적인 내용, 기타 풍기문란을 조장하거나 미풍양속에 반하는 내용
                            (어린이에게 유해하거나 제3자의 사생활을 침해하는 내용을 포함합니다.) 또는 수신자의 동의 없이 발송하는
                            광고성 내용 (정크메일, 스팸메일, 행운의 편지, 피라미드 조직에 가입할 것을 권유하는 내용을 포함합니다.)의
                            메시지, 팩스, 메일, 정보를 공개 또는 게시하거나 제3자에게 전송하는 행위
                        </li>
                        <li>회사의 동의 없이 본 약관의 목적 범위를 벗어나 영리를 목적으로 서비스를 이용하는 행위</li>
                        <li>
                            컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어
                            바이러스, 악성코드 등 관련 법령에 의하여 전송 또는 게시가 금지되는 정보를 이용 또는 전송하는 행위
                        </li>
                        <li>해킹, 비밀번호 마이닝 (password mining) 등을 비롯한 수단으로 부당하게 회사의 서비스에 접근을 시도하는 행위</li>
                        <li>회사의 사전 서면 동의 없이 회사의 설비 및 소프트웨어, 시스템을 무단으로 변경하거나, 변경된 버전의 소프트웨어를 사용하는 행위</li>
                        <li>
                            회사의 사전 서면 동의 없이 로봇, 스파이더, 스크래퍼 등을 비롯한 자동화 수단을 사용하여 회사의 설비 및
                            소프트웨어, 시스템 등에 접근을 시도하는 행위; 혹은 유사 수단을 활용하여 회사가 외부 접근을 차단하거나
                            예방하기 위한 목적으로 마련한 설정들을 우회하는 행위
                        </li>
                        <li>
                            이용 계약 도중 또는 종료 후에 회사의 서비스를 무단으로 수정, 보완, 해석하거나, 이를 바탕으로 파생된
                            신규 서비스를 직접 구현하거나 제3자를 통해 우회 구현/판매하는 행위
                        </li>
                        <li>
                            회사의 명시적인 서면 동의 없이 회사의 서비스를 역설계(reverse-engineer), 역컴파일링(decompile), 혹은 역분해(disassemble)
                            하는 행위 혹은 이를 통하여 서비스의 소스코드(source code)를 추적하기 위한 시도를 하는 행위
                        </li>
                        <li>기타 불법적이거나 부당한 행위</li>
                    </ol>
                </li>
                <li>
                    회원은 관련 법령 및 본 약관, 회사의 운영정책 및 이용안내, 회사가 서비스와 관련하여 공지한 주의사항 및
                    통지사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
                </li>
                <li>
                    회원은 ‘유료서비스’를 신청하기 전에 반드시 회사가 전자우편 혹은 서비스 홈페이지를 통해 제공하는 상품의 거래 및
                    이용조건을 확인하여야 합니다. 회사의 귀책사유 없이 회원이 거래 및 이용조건을 확인하지 아니하고 ‘유료서비스’를 신청하여
                    발생한 모든 손실, 손해에 대한 책임은 회원이 부담합니다.
                </li>
            </ol>

            <br id="section-11-br" />

            {/* 제12조 서비스 제공 */}
            <p id="section-12" className="text-md font-bold mb-3 text-gray-800">
                제12조 (서비스 제공)
            </p>
            <p className="mb-6">
                회사가 제공하는 서비스 내용 및 범위는 다음과 같습니다.
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    <span className="font-bold ">회원의 분산 신원(DID) 기반의 인증 및 검증 소프트웨어를 이용할 수 있도록 지원하는 서비스</span>
                </li>
                <li>
                    <span className="font-bold ">기타 위 사항에 부수하는 소프트웨어, 콘텐츠 및 용역</span>
                </li>
                <li>
                    회사가 제공하는 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만 회사 시스템의
                    유지 · 보수를 위한 점검, 통신장비의 교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에
                    대하여 일시적인 제공 중단이 발생할 수 있습니다.
                </li>
                <li>전항의 경우 회사는 서비스의 제공이 중단되기 7일 전에 본 약관에서 정한 방법으로 회원에게 통지합니다.
                    다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.</li>
                <li>
                    회사는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는
                    경우, 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 발생한
                    경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                </li>
                <li>회사는 서비스의 원활한 제공을 위하여 정기적 또는 비정기적 점검을 실시할 수 있으며, 점검기간은 서비스 홈페이지에 공지한 바에 따릅니다.</li>
                <li>회사는 회원의 원활한 서비스 이용을 목적으로 하는 정보를 정기적 또는 비정기적인 이메일 및 서비스 홈페이지 등을 통하여 제공할 수 있습니다.</li>
            </ol>


            <br id="section-12-br" />


            {/* 제13조 서비스의 변경 */}
            <p id="section-13" className="text-md font-bold mb-3 text-gray-800">
                제13조 (서비스의 변경)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 서비스의 제공을 위하여 운영상, 기술상 상당한 이유가 있는 경우
                    서비스의 이용방법, 이용시간, 이용금액 등의 내용(이하 '서비스의 내용 등')
                    전부 또는 일부를 변경할 수 있습니다.
                </li>
                <li>
                    '서비스의 내용 등'에 대하여 변경이 있는 경우에는 변경사유, 변경될 내용 및 제공일자 등은
                    변경 전에 서비스 홈페이지에 게시해야 합니다.
                </li>
                <li>
                    '서비스의 내용 등'의 변경 절차 및 방법, 적용 등에 관하여서는 본 약관 제4조 제3항부터 제6항까지의 규정을 준용합니다.
                </li>
                <li>
                    회사는 ‘무료체험(Free-trial)’ 기간동안, 제0조에서 정한 방법으로 서비스 기간 만료일 및 유료 서비스 전환 방법을 통지하고,
                    회원에게 ‘유료서비스’ 전환 동의 여부를 확인합니다. ‘무료체험(Free-trial)’ 기간 만료 후 회원은 관련 데이터에 접근할 수 없습니다.
                </li>
            </ol>


            <br id="section-13-br" />

            {/* 제14조 서비스 이용의 제한 및 정지 */}
            <p id="section-14" className="text-md font-bold mb-3 text-gray-800">
                제14조 (서비스 이용의 제한 및 정지)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li className="list-decimal list-inside">
                    회원또는 구성원이 이 약관에서 정하는 의무 및 준수사항을 위반하거나 회사의 정상적인 업무를 방해한 경우, 회사는 경고, 일시정지,
                    영구이용정지 등으로 회원의 서비스이용을 단계적으로 제한할 수 있습니다.&nbsp;
                </li>
                <li className="list-decimal list-inside">
                    <span>
                        회사는 전항에도 불구하고 다음 각 호에 해당하는 경우 즉시 영구이용정지를 할 수 있습니다.
                        본항에 따른 영구이용정지시 회사는 서비스 및 이에 부수한 용역, 혜택 등을 일절 제공하지 않으며,
                        이와 관련하여 별도로 보상하지 않습니다.&nbsp;

                    </span>
                    <ol id="node_15_3" className="list-disc list-inside ml-6 space-y-1">
                        <li>명의 및 결제도용</li>
                        <li>저작권법을 위반한 불법프로그램의 제공</li>
                        <li>운영방해</li>
                        <li>
                            정보통신망 이용촉진 및 정보보호 등에 관한 법률을 위반한 불법통신 및 해킹
                        </li>
                        <li>악성프로그램의 배포, 접속권한 초과행위&nbsp;</li>
                        <li>기타 관련 법령 위반&nbsp;</li>
                    </ol>
                </li>
                <li className="list-decimal list-inside">
                    회사는 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용을 개별 운영정책으로 정할 수 있습니다.
                </li>
                <li className="list-decimal list-inside">
                    본조에 따라 서비스의 이용을 제한하는 경우에는 회사는 회원에게 그 사실과 이에 대한 이의신청 절차 및 방법을 본 약관에 따라 통지합니다.
                </li>
                <li className="list-decimal list-inside">
                    회원은 본 조에 따른 이용제한 등에 대해 회사가 정한 절차와 방법에 따라 이의신청을 할 수 있습니다. 회사는 회원의 이의신청에 정당한 이유가 있는 경우 당해 회원의 서비스의 이용제한을 취소할 수 있습니다.
                </li>
                <li className="list-decimal list-inside">
                    <span>
                        유료서비스를 이용 중인 회원이 결제 수단 등록 및 갱신에 실패하여 이용대금 지불이 최종 실패한 경우, 회사는 즉시 회원의 유료서비스 이용을 정지할 수 있습니다.
                    </span>
                    <ol id="node_15_4" className="list-disc list-inside ml-6 space-y-1">
                        <li>
                            회사는 회원의 이용대금 지불이 실패한 즉시, 유료서비스 이용정지를 시행하며, 이용정지 사실과 연체된 금액을 본 약관에서 정하는 방법에 따라 회원에게 통지합니다.
                        </li>
                        <li>
                            회원은 이용정지 후 연체된 이용요금을 전액 납부하고, 그 사실을 회사에 통지하는 경우에 한하여 회사는 회원의 유료서비스 이용을 재개할 수 있습니다.
                        </li>
                    </ol>
                </li>
                <li className="list-decimal list-inside">
                    회원이 제3항에서 규정한 기간 내에 연체된 이용요금 전액을 납부하지 않는 경우 회사는 연체 사실과 계약 해지 사실, 관련 데이터 삭제 사실을
                    본 약관에서 정하는 방법에 따라 당해 회원에게 통지하는 방법으로 회원과의 이용계약을 해지하고 관련 데이터를 삭제할 수 있습니다.
                </li>
            </ol>

            <br id="section-14-br" />

            {/* 제15조 서비스 이용요금 등의 계산 */}
            <p id="section-15" className="text-md font-bold mb-3 text-gray-800">
                제15조 (서비스 이용요금 등의 계산)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사가 제공하는 서비스 이용과 관련하여 회원이 납부하여야 할 서비스 이용요금 및 납부 방법은 "서비스 홈페이지"에 게재한 바에 따릅니다.
                </li>
                <li>
                    서비스 이용요금은 다음 각 호에 해당하는 요금을 포함하며, 구체적인 과금 기준은 "서비스 홈페이지"에 고지됩니다.
                </li>
                <li>
                    회원이 서비스 이용 도중 추가 서비스를 요청하는 경우, 추가 요청일 기준 활성 사용자 수에 따라 과금됩니다.
                </li>
                <li>
                    회원은 가입 시 무료 사용기간을 바로 시작하며, 무료 사용기간 종료와 동시에 서비스 이용요금 과금이 시작됩니다. 이후 매월 무료 사용기간 종료일(이하 "과금일")에 등록된 신용카드 또는 체크카드로, 과금일 시점의 활성 사용자 수에 따라 정기 결제가 이루어집니다. 단, 이용계약에서 별도의 과금 기준일이 정해진 경우 해당 내용이 본 약관에 우선하여 적용됩니다.
                </li>
                <li>
                    서비스 이용 도중 과금 기준이 변경되더라도, 이미 결제가 완료된 이용분에 대해서는 증감된 요금을 추가로 청구하거나 환불하지 않습니다.
                </li>
                <li>
                    회사는 판매 촉진, 이용자 유치 등의 목적으로 가격 할인, 이용기간 연장 등 프로모션 혜택을 제공할 수 있으나, 이용자의 서비스 신청 내용이 프로모션 조건에 부합하지 않는 경우 해당 혜택을 제공하지 않을 수 있으며, 이에 따른 책임은 부담하지 않습니다.
                </li>
                <li>
                    서비스 이용요금에 관하여 회사와 회원 간에 별도의 약정이 있는 경우, 해당 약정 내용이 본 약관에 우선하여 적용됩니다.
                </li>
            </ol>


            <br id="section-15-br" />

            {/* 제16조 결제 서비스 이용요금 등의 지급 */}
            <p id="section-16" className="text-md font-bold mb-3 text-gray-800">
                제16조 (결제 서비스 이용요금 등의 지급)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    <strong>회원는 다음 각 호의 방법 중 가능한 방법으로 서비스 이용요금을 결제할 수 있습니다.</strong>
                    단, 회사의 정책 및 결제기관의 기준에 따라 회원의 월 누적 결제 한도가 제한될 수 있으며,
                    해당 한도를 초과할 경우 서비스의 추가 이용이 제한될 수 있습니다.
                    <ul class="list-disc list-inside  ml-6 space-y-1">
                        <li>신용카드 자동이체 결제 방식 (1개월 단위)</li>
                    </ul>
                </li>

                <li>
                    회원는 서비스 이용요금 결제 시 회사가 정하는 범위 내에서 결제수단과 결제방식을 선택할 수 있습니다.
                    단, 회사는 직접적으로 전자결제대행 방식을 제공하지 않으며, 이에 따른 모든 책임은 회원이 부담합니다.
                </li>

                <li>
                    <strong>신용카드 자동이체 결제 방식</strong>이란, 일정 기간마다 회원이 사전에 승인한 신용카드로 서비스 이용요금을 자동 결제하는 방식을 의미합니다.
                    회원이 회사가 정한 절차에 따라 자동이체 결제 방식 철회의사를 밝히지 않는 한, 자동으로 이용계약이 갱신되며 결제가 이루어집니다.
                </li>

                <li>
                    회원는 서비스 이용 요금을 결제함에 있어 다음의 사항을 유의해야 합니다.
                    <ul class="list-disc list-inside ml-6 space-y-1">
                        <li>회원 본인 외의 결제수단 사용을 금지합니다.</li>
                        <li>회원는 결제수단의 비밀번호, 인증서 등의 유출로 인한 부정사용 또는 위변조 사고를 방지해야 합니다.</li>
                        <li>신용카드의 미서명, 관리 소홀, 무단 대여 및 양도, 담보제공으로 인한 부정사용을 방지해야 합니다.</li>
                        <li>불법 현금대출, 위변조 등의 금융사고가 발생하지 않도록 주의해야 합니다.</li>
                    </ul>
                </li>

                <li>
                    회사는 서비스 이용요금이 정상적으로 결제되지 않은 경우, 회원의 서비스 이용을 제한할 수 있습니다.
                    또한, 회원의 귀책사유로 인해 서비스 이용이 제한된 경우, 이에 따른 손해에 대해 회사는 책임을 부담하지 않습니다.
                </li>

                <li>
                    회사는 내부 정책 및 운영 사정에 따라 결제 방식, 결제 수단을 추가, 삭제, 변경할 수 있으며,
                    변경이 있을 경우 사전에 그 사유와 적용일자를 공지합니다.
                </li>
            </ol>

            <br id="section-16-br" />


            {/* 제17조 청약 철회 및 환불, 유료서비스 정기결제 중단 */}
            <p id="section-17" className="text-md font-bold mb-3 text-gray-800">
                제17조 (청약 철회 및 환불, 유료서비스 정기결제 중단)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    <strong>청약 철회 조건</strong>
                    <ol class="list-decimal list-inside ml-6 space-y-1">
                        <li>
                            유료회원은 결제일로부터 7일 이내에 한하여 청약 철회를 요청할 수 있습니다. 단, 다음의 경우 청약 철회가 불가능합니다.
                            <ol class="list-disc list-inside ml-6 space-y-1">
                                <li>서비스 개시 후 단 한 번이라도 이용한 경우</li>
                                <li>연간 결제 및 할인 요금제를 이용한 경우</li>
                                <li>선물, 프로모션을 통해 무상으로 제공받은 경우</li>
                            </ol>
                        </li>
                        <li>
                            회원은 유료서비스의 내용이 표시·광고의 내용과 다르거나 계약 내용과 다르게 이행된 경우, 공급받은 날로부터 3개월 이내 또는 그 사실을 알게 된 날로부터 30일 이내에 청약을 철회할 수 있습니다.
                            <strong>단, 할인 요금제를 이용한 경우 환불이 불가능합니다.</strong>
                        </li>
                    </ol>
                </li>

                <li>
                    <strong>청약 철회 신청 방법 및 처리</strong>
                    <ol class="list-disc list-inside ml-6 space-y-1">
                        <li>청약 철회는 회원이 서비스 홈페이지 또는 전자우편, 고객센터를 통해 요청해야 하며, 회사가 청약 철회 요청을 접수한 시점부터 효력이 발생합니다.</li>
                        <li>회사는 청약 철회 신청을 확인한 후, 3영업일 이내에 결제 수단 별 사업자에게 대금 청구 정지 또는 취소를 요청하며, 동일 결제수단으로 환불합니다.</li>
                        <li>신용카드 등 수납 확인이 필요한 경우, 수납 확인일로부터 3영업일 이내에 처리됩니다.</li>
                    </ol>
                </li>

                <li>
                    <strong>환불 규정</strong>
                    <ol class="list-disc list-inside ml-6 space-y-1">
                        <li>청약 철회 기간(결제일로부터 7일 이내)을 초과하여 환불을 신청하는 경우, 전체 이용대금에서 기 이용일수 또는 이용회차에 해당하는 금액과 잔여 이용요금의 10%를 공제 후 환불합니다.</li>
                        <li>할인 요금제(연간 결제 포함)를 이용한 회원이 계약을 중도 해지하는 경우, 단기 이용 요금제 기준으로 계산한 금액을 적용하여 차액을 공제 후 환불합니다.</li>
                        <li>회사는 환불 시 부대비용 및 결제 수수료를 차감할 수 있습니다.</li>
                        <li>유료서비스를 프로모션을 통해 무료로 취득한 경우, 환불이 불가능합니다.</li>
                    </ol>
                </li>

                <li>
                    <strong>정기결제 중단 및 미납 처리</strong>
                    <ol class="list-disc list-inside ml-6 space-y-1">
                        <li>유료회원이 정기결제를 중단한 경우, 이미 결제가 완료된 계약 기간 동안 유료서비스 이용이 가능합니다.</li>
                        <li>이용요금 체납 시 즉시 이용이 정지될 수 있으며, 연체 발생일 기준으로 자동 해지될 수 있습니다.</li>
                        <li>정기결제를 유지하고자 하는 회원은 결제수단 연체 및 체납이 발생하지 않도록 사전 조치해야 합니다.</li>
                    </ol>
                </li>

                <li>
                    <strong>유료서비스 이용 중 회원 탈퇴 시 처리</strong>
                    <ol class="list-disc list-inside ml-6 space-y-1">
                        <li>유료회원이 이용 중인 상태에서 회원 탈퇴를 신청하는 경우, 유료서비스는 즉시 해지되며 환불이 불가능합니다.</li>
                        <li>탈퇴 시 회원의 정보와 이용 내역은 관련 법령 및 회사의 개인정보 처리방침에 따라 관리됩니다.</li>
                    </ol>
                </li>
            </ol>

            <br id="section-17-br" />


            {/* 제18조 서비스 등의 보호 */}
            <p id="section-18" className="text-md font-bold mb-3 text-gray-800">
                제18조 (서비스 등의 보호)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회원은 <strong>YourD</strong>를 무단 복제하거나, 고의 또는 과실로 <strong>YourD</strong> 및 서비스에 관한 정보를 외부에 유출할 수 없습니다.
                </li>
                <li>
                    회원은 이용계약 도중 또는 종료 후에도 <strong>YourD</strong> 및 <strong>YourD</strong>와 유사한 솔루션의 제작/판매행위를 할 수 없으며, 제3자를 통한 우회적 제작/판매행위도 이용자 본인의 행위로 간주됩니다.
                </li>
                <li>
                    회원은 전 항을 위반할 경우, 민·형사상의 모든 법적 책임을 부담합니다.
                </li>
            </ol>


            <br id="section-18-br" />



            {/* 제19조 데이터의 보존 및 파기 */}
            <p id="section-19" className="text-md font-bold mb-3 text-gray-800">
                제19조 (데이터의 보존 및 파기)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회원은 서비스 이용 중 데이터를 별도로 상시 백업, 저장하여야 하며, 회사가 이용자의 데이터를 백업하거나 이용자에게 제공할 의무는 없습니다. 이용자가 전단의 의무를 소홀히 하여 발생한 데이터의 유출, 누락이나 손실에 대해서는 회사는 책임을 부담하지 않습니다.
                </li>
                <li>
                    서비스 이용기간 만료, 서비스 이용계약의 해제 또는 해지 등의 사유로 회사가 서비스 제공을 종료한 경우, 회사는 구성원의 정보를 비롯한 모든 데이터를 즉시 파기합니다. 단, 다음 정보들은 관련 법령에 따라 개인정보를 일정 기간 동안 보존하며, 해당 개인정보 또는 개인정보 파일을 다른 개인정보와 분리하여 저장, 관리하고 보존기간 경과 후 파기합니다.
                </li>
                <li>
                    무료체험 서비스 신청 시 수집한 정보주체(최고관리자)의 일부 개인정보
                </li>
                <li>
                    계약 또는 청약철회 등에 관한 기록
                </li>
                <li>
                    소비자의 불만 또는 분쟁처리에 관한 기록
                </li>
            </ol>
            <p className="text-sm">
                ※ 개인정보 파기와 관련된 자세한 내용은 개인정보 처리방침에서 확인하실 수 있습니다.
            </p>


            <br id="section-19-br" />

            {/* 제20조 게시물의 저작권 */}
            <p id="section-20" className="text-md font-bold mb-3 text-gray-800">
                제20조 (게시물의 저작권)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    서비스 자체에 대한 지식재산권은 회사에게 귀속됩니다. 다만, 회원이 서비스 이용 중 게시하거나 등록한 데이터의 지식재산권은 회원에게 귀속됩니다.
                </li>
                <li>
                    회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 게재된 데이터를 상업적으로 이용할 수 없으며 이를 위반하여 발생하는 제반 문제에 대한 책임은 회원에게 있습니다.
                </li>
            </ol>


            <br id="section-20-br" />


            {/* 제21조 손해배상의 범위 및 청구 */}
            <p id="section-21" className="text-md font-bold mb-3 text-gray-800">
                제21조 (손해배상의 범위 및 청구)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사의 귀책사유로 이용자가 서비스를 이용하지 못한 경우에는 (이하 ‘장애’라 합니다) 다음 각 호의 기준에 따라 배상합니다.
                    다만, 이용자가 서비스를 이용하지 못한 때로부터 8시간 이내에 서비스가 정상화 된 경우는 제외합니다.
                    <ul className="list-disc list-inside ml-6 mb-3">
                        <li>
                            회사는 회사의 귀책사유로 사전 고지 없이 발생한 장애 시간이 연속하여 8시간 이상인 경우 또는 이용자가 장애 발생 사실을 회사에 통보하거나 회사가 알게 된 때로부터 연속하여 8시간 이상인 경우, 이용자가 입은 손해를 배상합니다.
                        </li>
                        <li>
                            서비스가 정상화 된 이후 4시간 이내에 동일한 장애가 발생한 경우에는 이를 연속된 장애로 간주합니다.
                        </li>
                        <li>
                            회사는 이용자가 서비스를 이용하지 못한 일수의 2배에 해당하는 이용 기간을 무료로 연장하여 제공합니다.
                            단, 연속하여 8시간 이상 서비스를 이용하지 못한 날은 1일로 계산합니다.
                        </li>
                    </ul>
                </li>
                <p>본 조에서 "장애"라 함은 다음 각 호에 해당하는 경우를 말합니다.</p>
                <ol className="list-disc list-inside ml-6">
                    <li>회사의 귀책 사유로 YourD 서비스에 로그인하지 못한 경우</li>
                    <li>서비스에 데이터를 게시 또는 업로드하지 못하거나 서비스 내 저장된 데이터를 열람하지 못한 경우</li>
                    <li>단, 회사가 사전에 고지한 경우는 제외합니다.</li>
                    <li>회사가 고의 또는 과실로 이용자에게 손해를 끼친 경우, 그 손해에 대해 배상할 책임이 있습니다.</li>
                    <li>이용자가 고의 또는 과실로 회사에 손해를 끼친 경우, 회원은 회사에 그 손해에 대해 배상할 책임이 있습니다.</li>
                    <li>회사는 그 손해가 천재지변 등 불가항력적 사유이거나 이용자의 고의 또는 과실로 발생한 경우에는 손해배상을 하지 않습니다.</li>
                    <li>손해 배상의 청구는 회사에 청구사유, 청구금액 및 산출 근거를 기재하여 이메일, 전화 등으로 신청하여야 합니다.</li>
                    <li>회사 및 타인에게 피해를 주어 피해자의 고발 또는 소송 제기로 인하여 손해배상이 청구된 회원은, 회사 및 수사기관의 요청에 적극 협조하여야 합니다.</li>
                </ol>
            </ol>

            <br id="section-21-br" />

            {/* 제22조 면책 */}
            <p id="section-22" className="text-md font-bold mb-3 text-gray-800">
                제22조 (면책)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우, 이로 인하여 이용자 또는 제3자에게 발생한 손해에 대하여 책임을 부담하지 않습니다.
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>천재 지변 또는 이에 준하는 불가항력의 상태가 있는 경우</li>
                        <li>이용자의 시스템 환경이나 통신사 또는 호스팅업체의 장애 등 회사의 관리 범위 밖의 사정으로 인한 경우</li>
                        <li>현재의 보안기술 수준으로는 방어가 곤란한 네트워크 해킹 등으로 인한 경우</li>
                        <li>서비스의 효율적인 제공을 위한 시스템 개선, 장비 증설 등 계획된 서비스 중지 일정을 사전에 공지한 경우</li>
                        <li>이용자의 귀책사유로 메일 또는 데이터가 유출되거나 서비스 이용에 장애가 있는 경우</li>
                        <li>회사의 고의 및 과실이 없는 경우</li>
                    </ul>
                </li>
                <li>
                    회사는 이용자가 서비스를 통해 얻은 정보 또는 자료 등으로 인해 발생한 손해와, 서비스를 이용하거나 이용할 것으로부터 발생하거나 기대하는 손익 등 부가적, 영업적 손해에 대하여 책임을 면합니다.
                </li>
                <li>
                    회사는 이용자가 게시 또는 전송한 데이터의 내용에 대해서는 책임을 면합니다.
                </li>
                <li>
                    회사는 이용자 상호 간 또는 이용자와 제3자 상호 간에 서비스를 매개로 하여 거래 등을 한 경우 이에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임도 없습니다.
                </li>
                <li>
                    회사는 무료로 제공하는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.
                </li>
                <li>
                    회사는 이용자가 서비스 이용 종료 후 제24조에 따라 파기된 데이터와, 이용자가 직접 삭제를 요청한 데이터 및 기타 서비스 이용 중인 데이터의 백업 의무 소홀로 발생한 데이터의 손실에 대하여 책임을 지지 않습니다.
                </li>
                <li>
                    회사는 서비스를 통하여 이용자에게 제공된 정보, 자료, 사실의 신뢰도 및 정확성 등 그 내용에 대해서는 책임을 지지 않습니다.
                </li>
            </ol>

            <br id="section-22-br" />

            {/* 제23조 준쟁조정 (분쟁조정) */}
            <p id="section-23" className="text-md font-bold mb-3 text-gray-800">
                제23조 (분쟁조정)
            </p>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>
                    본 약관 및 서비스 이용과 관련된 분쟁은 대한민국 법령에 따르며, 분쟁 발생 시 회사 본사 소재지를 관할하는 법원을 제1심 관할 법원으로 합니다.
                </li>
                <li>
                    회사와 회원은 분쟁 해결을 위하여 성실히 협의하며, 협의가 이루어지지 않을 경우 민사소송법에 따른 절차를 따릅니다.
                </li>
            </ol>

            {/* 공고 및 시행일자 */}
            <ul className="list-disc list-inside mb-6 space-y-2">
                <li className="text-sm">공고일자 : 2025년 2월 10일</li>
                <li className="text-sm">시행일자 : 2025년 2월 10일</li>
            </ul>
        </div>
    );
};

export default TermsV1KO;