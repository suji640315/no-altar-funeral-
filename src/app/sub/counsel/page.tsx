'use client';

import { useState } from 'react';
import { Send, X } from 'lucide-react';

export default function CounselPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    funeralHome: '',
    patientLocation: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Privacy policy state
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleChange = (e: any) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
      const p = value.replace(/[^0-9]/g, '');
      if (p.length < 4) value = p;
      else if (p.length < 8) value = p.slice(0, 3) + '-' + p.slice(3);
      else value = p.slice(0, 3) + '-' + p.slice(3, 7) + '-' + p.slice(7, 11);
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleLocationClick = (location: string) => {
    setFormData({ ...formData, patientLocation: location });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!privacyAgreed) {
      setErrorMsg('개인정보취급 방침에 동의해 주세요.');
      return;
    }
    
    setLoading(true);
    setErrorMsg('');
    
    try {
      const res = await fetch('/api/counsel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', phone: '', region: '', funeralHome: '', patientLocation: '', notes: '' });
        setPrivacyAgreed(false);
      } else {
        setErrorMsg(data.error || '접수 중 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    } catch (err) {
      setErrorMsg('네트워크 오류가 발생했습니다. 관리자에게 문의해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const locationOptions = ["요양병원", "요양원", "병원", "자택", "기타"];

  const privacyText = `개인정보 처리방침

(주)공무원라이프(이하 ‘회사’)는 정보주체의 개인정보 보호를 중요시하며, 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 사업자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하고, 관련 법령에 의거한 개인정보 처리(취급) 방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.

이에 회사는 개인정보 처리(취급)방침을 통하여 정보주체의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 등을 안내하고, 관련된 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립 및 공개합니다.

제1조 (개인정보의 수집 및 이용 목적)
회사는 개인정보를 다음의 목적을 위하여 처리하며, 다음의 목적 이외의 용도로는 개인정보를 사용하지 않습니다. 이용 목적이 변경되는 경우에는 「개인정보보호법」에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
회원 가입 및 관리
회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 인증, 회원자격 유지 관리, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 각종 고지 통지, 고충처리, 분쟁 조정을 위한 기록 보존 등 목적
민원사무 처리
민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락 통지, 처리결과 통보 등을 목적
금융거래 관계 관련
금융거래와 관련하여 신용조회회사 또는 신용정보 집중기관에 대한 개인정보의 조회, 금융 거래 관계의 설정 여부의 판단, 금융거래 관계의 설정·유지·이행·관리, 금융사고 조사, 분쟁 해결, 민원 처리 및 법령상 의무이행 등의 목적
금융거래라 함은 여신금융회사의 고유업무 (신기술사업금융 등) 및 「여신전문금융업법」 및 동법 시행령 상의 관련 부수업무를 의미
재화 또는 서비스 제공
물품배송, 서비스 제공, 계약서·청구서 발송, 맞춤서비스 제공, 본인인증, 연령인증 등을 목적
직원채용, 인사관리 및 계열회사 임직원 정보교류 등
직원채용, 인사관리, 계열회사 임직원 정보교류 등을 목적

제2조 (수집, 처리하는 개인정보의 항목 및 수집 방법)
수집하는 개인정보의 항목
회사는 서비스 제공을 위한 최소한의 범위 내에서 이용자의 동의 하에 개인정보를 수집하며, 수집한 모든 개인정보는 고지한 목적 범위 내에서만 사용됩니다.
회사는 개인정보를 수집함에 있어, 서비스 제공에 필요한 최소한의 개인정보를 ‘필수 동의 항목으로, 그 외 개인정보는 ‘선택’동의 항목으로 구분하여 이에 대해 개별적으로 동의할 수 있는 절차를 마련합니다. 선택항목을 입력하지 않아도 기본 서비스 이용은 가능하나 선택항목에 기반한 관련 서비스의 이용이 제한될 수 있습니다.
회사는 금융거래의 설정·유지·이행·관리 및 상품서비스의 제공을 위한 필수정보 및 선택정보를 다음 각 호와 같이 수집하고 있습니다.
필수적 정보
개인식별정보 : 성명, 고유식별정보(주민등록번호, 여권번호, 외국인등록번호, 운전면허번호), 직업, 주소(집 또는 직장), 연락처(집 또는 직장, 휴대전화번호), 전자우편주소
금융거래정보 : 투자자정보, 계약조건, 기타 거래관계의 설정·유지·이행·관리를 위한 상담, 투자관리 등을 통해 생성되는 정보 등 업무수행을 위해 필요한 정보
선택적 정보
개인식별정보 외에 거래신청서에 기재된 정보 또는 고객이 제공한 정보
회사는 서비스 이용 과정에서 자동화된 방법으로 생성된 정보를 수집하거나, 이용자 기기의 고유한 정보를 수집할 수 있습니다.
수집 목적 : 서비스 이용에 따른 자동 수집 및 생성 정보
수집 항목 : 쿠키(Cookie), 서비스 이용기록(방문일시, IP주소, 브라우져 정보, 정상 이용기록, 비정상 이용기록), 기기정보(단말기 명, OS, 기기 식별정보, IP주소, 광고 식별자)
회사는 회원가입을 만 14세 이상인 경우에만 가능하도록 하며, 개인정보의 수집 및 이용에 법정대리인의 동의가 필요한 만 14세 미만 아동의 개인정보는 원칙적으로 수집하지 않습니다. 단, 법정대리인의 동의를 얻은 경우에는 만 14세 미만 이용자의 개인정보를 수집 및 이용할 수 있습니다.
부가서비스 및 맞춤서비스 이용 시 또는 이벤트 응모과정에서 회원가입 시 수집하지 않았던 개인정보를 추가로 수집할 때에 회사는 해당 항목을 이용자들에게 고지하고 별도로 동의를 받아 업무를 처리합니다.
개인정보의 수집방법
홈페이지, 상담게시판을 통한 회원가입 등 온라인상에서의 수집, 전화, 팩스, 지점 내에서의 서면 양식 신청서 등을 통한 오프라인에서의 수집, 이메일, 배송요청, 경품행사 응모 등을 통한 수집
본인확인기관 또는 제휴사로부터 제공
생성정보 수집 툴을 통한 수집

제3조 (개인정보의 보유 및 이용기간)
회사는 이용자의 개인정보를 원칙적으로 고지 및 약정한 기간 동안 보유 및 이용합니다. 개인정보의 수집 및 이용목적 달성, 보유기간 만료, 회원의 수집 및 이용 동의 철회 시 수집된 개인정보는 지체 없이 파기 처리합니다. 다만, 관계 법령의 규정에 따라 보존할 필요성이 있거나 내부 방침 상 보관이 필요한 경우에는 목적 달성에 필요한 최소한의 기간 및 항목만을 보관합니다.
회원의 경우 개인정보의 보유 및 이용 기간은 서비스 이용계약 체결시(회원가입시)부터 서비스 이용계약 해지(탈퇴신청, 직권탈퇴 포함)까지 입니다. 회사는 다른 법령에서 별도의 기간을 정하고 있거나 고객의 요청이 있는 경우를 제외하면, 법령에서 정의하는 기간(1년) 동안 재이용하지 아니하는 회원의 개인정보를 파기하거나 다른 회원의 개인정보와 분리하여 별도로 저장·관리합니다. 단, 기간 만료 30일 전까지 개인정보가 파기되거나 분리되어 저장·관리되는 사실과 기간 만료일 및 해당 개인정보의 항목을 이메일·서면·모사전송·전화 또는 이와 유사한 방법 중 어느 하나의 방법으로 회원에게 알립니다.
(금융)거래와 관련한 개인(신용)정보는 수집·이용에 관한 동의일로부터 (금융)거래 종료일로부터 5년까지 위 이용목적을 위하여 보유·이용됩니다. 단, (금융)거래 종료일 이후에는 금융사고 조사, 분쟁 해결, 민원처리, 법령상 의무이행 및 당사의 리스크 관리업무만을 위하여 보유·이용됩니다.
개인(신용)정보의 조회를 목적으로 수집된 개인(신용)정보는 수집·이용에 대한 동의일로부터 고객에 대한 신용정보 제공·조회 동의의 효력 기간까지 보유·이용됩니다. 단, 신용정보 제공ㆍ조회 동의의 효력 기간 종료 후에는 금융사고 조사, 분쟁 해결, 민원처리 및 법령상 의무이행만을 위하여 보유·이용됩니다.
상품 및 서비스 홍보 등과 관련한 개인(신용)정보는 수집·이용에 관한 동의일로부터 동의 철회일까지 보유·이용됩니다. 단, 동의 철회일 후에는 제1조의 목적과 관련된 사고 조사, 분쟁 해결, 민원처리, 법령상 의무이행만을 위하여 보유·이용됩니다.
회원 가입 및 관리 목적으로 수집된 개인(신용)정보는 고객의 회원 가입일로부터 회원 탈퇴일까지 보유·이용됩니다. 단 회원 탈퇴일 후에는 제3조의 목적과 관련된 사고 조사, 분쟁 해결, 민원처리, 법령상 의무이행 만을 위하여 보유·이용됩니다.

제4조 (개인정보의 파기 절차 및 방법)
회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 단, 다른 법령에 의하여 해당 개인정보를 보존하여야 하는 경우는 예외로 합니다.
정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 존속하여야 하는 경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
개인정보 파기의 절차 및 방법은 다음과 같습니다.
파기절차
이용자가 입력한 정보는 목적 달성 후 별도의 데이터베이스에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, 데이터베이스로 옮겨진 개인정보는 법령에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
파기기한
이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5영업일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5영업일 이내에 그 개인정보 파기합니다. 만14세 미만 아동에 대한 법정대리인의 거부가 있거나 동의 의사가 확인되지 않는 경우 수집일로부터 5영업일 이내에 해당 개인정보를 파기합니다.
파기방법
전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.

제5조 (개인정보의 제3자 제공)
회사는 고객의 개인정보를 제1조 (개인정보의 수집 항목 및 이용 목적)에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업•기관에 제공하지 않습니다.
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래 각 호와 같이 법률에 특별한 규정이 있는 경우나 법령상 의무를 준수하기 위해 불가피한 경우에는 예외로 합니다. 회사는 개인정보를 목적 외로 제3자에게 제공할 때에는 개인정보를 제공받는 자가 개인정보를 안전하게 처리하도록 이용목적, 이용방법 등에 일정한 제한을 가하거나 안전성 확보를 위해 필요한 조치를 마련하도록 요청합니다.
이용자들이 사전에 동의한 경우
법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
통계 작성, 학술연구, 시장 조사, 정보 제공 및 공지 안내 메일 발송의 경우로서 특정 개인을 식별할 수 없는 형태로 제공되는 경우
정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전동의를 받을 수 없는 경우로서 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위해 필요한 경우
제3자 제공 시 개인정보의 보유 및 이용기간은 서비스 제공기간에 준용합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있거나 사전 동의를 득한 경우에는 해당 보유 기간을 준용합니다.
이용자는 개인정보의 제3자 제공에 대하여 동의를 하지 않을 수 있고, 언제든지 제3자 제공 동의를 철회할 수 있습니다. 동의 거부 시에도 기본적인 서비스는 이용하실 수 있으나, 제3자 제공에 기반한 관련 서비스의 이용이 제한될 수 있습니다.
제3자 제공동의 철회는 (주)공무원라이프 경영관리본부(1599-8379)로 요청 가능합니다.

제6조 (개인정보의 처리 위탁 안내)
회사는 이용자에게 보다 원활한 서비스를 제공하기 위하여 개인정보 처리 관련 업무를 외부 전문업체에 위탁할 수 있습니다.
회사는 위탁계약 체결 시 위탁업무 수행목적 외 개인정보 처리금지, 기술적 관리적 보호조치, 재 위탁 제한, 수탁자에 대한 관리 및 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 관리•감독합니다.
위탁업무의 내용이나 수탁업체가 추가•변경될 경우 지체없이 본 개인정보처리방침을 통하여 공개 하도록 하겠습니다.

제7조 (개인정보 수집·이용·제공에 대한 동의 철회)
개인정보의 수집·이용·제공에 대해 정보주체는 동의한 내용을 언제든지 철회할 수 있습니다. 동의 철회는 개인정보관리 담당자 및 책임자에게 서면, 전화, 이메일 등으로 하실 수 있으며, 회사는 지체 없이 개인정보의 삭제 등 필요한 조치를 합니다.
단, 정보주체의 개인정보 수집, 이용은 회사와의 계약체결 및 거래관계를 위해 필수적인 부분이므로, 개인정보 수집, 이용 동의를 철회한 경우 금융거래관계의 설정 및 유지가 불가능함을 알려드립니다.

제8조 (이용자 및 법정대리인의 권리와 그 행사 방법)
이용자는 회사에 대하여 언제든지 개인정보 수집이용제공 등의 동의를 철회할 수 있습니다. 동의 철회시 회사는 지체 없이 수집된 개인정보를 파기하는 등 필요한 조치를 취합니다.
이용자는 회사에 대하여 본인에 관한 다음 각호의 사항에 대해 열람, 제공, 정정을 요구할 수 있습니다.
회사가 가지고 있는 이용자의 개인정보
이용자 개인정보의 이용 및 제3자 제공 현황
회사에게 개인정보 수집 이용 제공 등의 동의를 한 현황
이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
회사는 만 14세 미만의 아동으로부터 개인정보 수집 이용 제공 등의 동의를 받을 경우 그 법정대리인의 동의 절차를 진행하며, 이 경우 회사는 해당 아동에게 법정대리인의 동의를 받기 위해 필요한 최소한의 정보(이름, 전화, 주소 등)를 요구할 수 있습니다.
이용자는 개인정보의 열람 등 청구를 아래의 부서에 할 수 있습니다. 이용자의 개인정보 열람 등 청구 업무가 신속하게 처리되도록 노력하겠습니다.
담당부서 : (주)공무원라이프 경영관리본부 (1599-8379)

제9조 (개인정보 자동 수집 장치의 설치•운영 및 그 거부에 관한 사항)
회사는 이용자를 식별하고 회원의 로그인 상태를 유지하며, 이용자 개인별 맞춤 서비스를 제공하기 위해 이용자의 정보를 저장하고 수시로 불러오는 쿠키(Cookie)를 사용합니다. 쿠키는 웹사이트 서버가 이용자의 웹브라우저에 전송하는 소량의 정보로서, 이용자의 컴퓨터 하드디스크에 저장됩니다.
이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자는 웹브라우저의 설정을 통해 모든 쿠키를 허용/거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다. 단, 쿠키의 저장을 거부할 경우에는 개인 맞춤서비스 등 회사가 제공하는 일부 서비스는 이용이 어려울 수 있습니다.
쿠키 설정 거부 방법은 다음과 같습니다. (Internet Explorer 기준)
웹브라우저 [도구] 메뉴 [인터넷 옵션] 선택 >[개인정보] 탭을 선택 >[고급]에서 원하는 옵션 선택

제10조 (개인정보의 안전성 확보조치에 관한 사항)
회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
개인정보 처리 : 직원의 최소화 및 교육 개인정보를 처리하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
정기적인 자체 감사 실시 : 개인정보 처리 관련 안전성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
개인정보의 암호화 : 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
해킹 등에 대비한 기술적 대책 : 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신 점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
개인정보에 대한 접근 제한 : 개인정보를 처리하는 데이터베이스시스템에 대한 접근 권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터 무단 접근을 통제하고 있습니다.
접속기록의 보관 및 위•변조 방지 : 개인정보처리시스템에 접속한 기록을 최소 2년 이상 보관, 관리하고 있으며, 접속 기록이 위•변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.
문서보안을 위한 잠금장치 사용 : 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
비인가자에 대한 출입 통제 : 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
개인정보 유효기간 제도 : 회사는 개인정보법에 따라 장기간(1년)서비스 미이용자의 개인정보보호를 위하여 다른 이용자의 개인정보와 분리 및 휴면계정으로 전환하여 별도 관리합니다.

제11조 (개인정보 보호책임자에 관한 사항)
이용자는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 답변 및 처리해드릴 것입니다.

[개인정보 보호책임자]
(주)공무원라이프 준법감시인
연락처: 1599-8379

제12조 (권익침해에 대한 구제방법)
이용자는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
개인정보보호 종합지원 포털 (개인정보보호위원회) 홈페이지 : http://www.privacy.go.kr / 전화번호 : 02-6952-8650
개인정보 침해신고센터 (한국인터넷진흥원 운영) 홈페이지 : http://privacy.kisa.or.kr / 전화번호 : (국번없이) 118
개인정보 분쟁조정위원회 홈페이지 : http://www.kopico.go.kr / 전화번호 : 1833-6972
경찰청 사이버범죄 신고 시스템 홈페이지 : http://www.police.go.kr/www/security/cyber.jsp / 전화번호 : (국번없이) 182

제13조 (청소년보호정책)
(주)공무원라이프(이하 “회사”)는 청소년이 건전한 인격체로 성장할 수 있도록 하기 위하여 정보통신망 이용촉진 및 정보보호에 관한 법률 및 청소년보호법에 근거하여 청소년보호정책을 수립, 시행하고 있습니다.

청소년보호 책임자 및 담당자
[청소년보호 책임자]
(주)공무원라이프 준법감시인
연락처: 1599-8379

제14조 (개인정보 처리방침 변경 및 고지 의무 등)
이 개인정보처리방침은 정부의 정책, 법령, 회사의 필요에 의하여 변경될 수 있으며, 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전에 홈페이지 게시, 이메일 등을 통해 사전 공지하고, 사전 공지가 곤란한 경우 최대한 빠른 시간 내 공지합니다.

공고일자 : 2026년 4월 1일
시행일자 : 2026년 4월 1일`;

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-[100px] pb-20 font-sans text-gray-800">
      <div className="w-full bg-[#00387f] py-12 text-center text-white mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">무빈소 130 신청 및 상담</h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
        <p className="text-blue-100 text-sm mt-3">전문 장례지도사가 신속하고 친절하게 상담해 드립니다.</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 relative">
        {/* 상단 인트로 안내 박스 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/90 rounded-2xl p-5 md:p-6 mb-6 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-blue-700 text-white text-xs font-bold rounded-full">특별혜택</span>
            <h2 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
              10만원 특별할인 적용! [무빈소 130] 안심 정찰 패키지 1:1 맞춤 상담
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium mb-3">
            상담 접수 시 전문 장례지도사가 5분 이내 신속히 연락드려 관내 최적 안치실 배정 및 화장장 예약을 안내해 드립니다.
          </p>
          <div className="pt-3 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-gray-700">
              <span className="font-semibold text-gray-600">무빈소 전담 직통상담:</span>
              <a href="tel:02-477-8379" className="text-blue-700 font-bold text-sm hover:underline">02-477-8379</a>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <span>24시간 긴급상황실:</span>
              <a href="tel:1599-8379" className="text-red-600 font-bold text-sm hover:underline">1599-8379</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-blue-50 text-[#00387f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">상담 신청이 완료되었습니다!</h2>
                <p className="text-gray-500 mb-6">담당 장례지도사가 확인 후 신속하게 연락드리겠습니다.</p>
                <button onClick={() => setSuccess(false)} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">추가 접수하기</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">고객 성함 <span className="text-red-500">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="홍길동" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="010-0000-0000" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 지역 <span className="text-red-500">*</span></label>
                  <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="예: 서울, 경기, 인천 등" required />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">희망 장례식장</label>
                  <input type="text" name="funeralHome" value={formData.funeralHome} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none" placeholder="원하시는 장례식장이 있다면 적어주세요 (선택사항)" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">현재 환자분 계신 곳</label>
                  <div className="grid grid-cols-5 gap-2">
                    {locationOptions.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleLocationClick(loc)}
                        className={`py-3 px-1 text-xs md:text-sm font-bold rounded-lg border transition-all ${
                          formData.patientLocation === loc 
                            ? 'border-[#00387f] text-[#00387f] bg-blue-50' 
                            : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기타 참고사항</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00387f] focus:border-[#00387f] transition-colors outline-none resize-none" placeholder="궁금하신 점이나 특별히 요청하실 사항을 적어주세요."></textarea>
                </div>

                {/* Privacy Policy Checkbox Section */}
                <div className="pt-2 pb-2">
                  <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="w-5 h-5 text-[#00387f] bg-white border-gray-300 rounded focus:ring-[#00387f] cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm font-bold text-gray-700 cursor-pointer flex-1 select-none">
                      개인정보취급 방침에 동의합니다.
                    </label>
                    <button 
                      type="button" 
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-xs px-3 py-1.5 border border-gray-300 bg-white rounded text-gray-600 hover:bg-gray-100 transition-colors font-medium whitespace-nowrap"
                    >
                      전문보기
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button disabled={loading} type="submit" className="w-full bg-[#00387f] hover:bg-[#002f6c] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-lg">
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {loading ? '접수 중...' : '상담 신청하기'}
                  </button>
                </div>
                
                <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                  남겨주신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.<br/>
                  무빈소 직통상담 <strong><a href="tel:02-477-8379" className="text-blue-700 hover:underline">02-477-8379</a></strong> / 24시간 긴급상황실 <strong><a href="tel:1599-8379" className="text-red-600 hover:underline">1599-8379</a></strong>
                </p>

              </form>
            )}
          </div>
        </div>

        {/* Privacy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowPrivacyModal(false)}>
            <div 
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">개인정보 처리방침</h3>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-1 rounded-lg text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                <div className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
                  {privacyText}
                </div>
              </div>
              
              <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => {
                    setPrivacyAgreed(true);
                    setShowPrivacyModal(false);
                  }}
                  className="px-6 py-2.5 bg-[#00387f] text-white rounded-lg font-bold hover:bg-[#002f6c] transition-colors"
                >
                  동의하고 닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
