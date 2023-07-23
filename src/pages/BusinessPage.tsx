import BusinessPlan from "../component/business/businessPlan";
import Feature1 from "../component/business/feature1";
import Feature2 from "../component/business/feature2";
import Feature3 from "../component/business/feature3";

export function BusinessPage() {
  return (
    <div>
      <BusinessPlan/>
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </div>
  );
}

// Business
// GDPR compliant 하게 제공한다.
// 1.Data 통계 - 차트나 그래프
// 2.원하는 자료형식에 맞춰서 API제공  , 랭킹, 이런 데이터들
// 3.분석과 해당 솔루션( 통계에 따른)
// ㄴ 게임 - 여러 정보가 있잖아 정보를 바탕으로 게임에 적합한 사람들에 광고 ,
// - 유저관련 이탈율
