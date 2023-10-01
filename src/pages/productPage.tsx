// import TabsFeatures from "../components/tabsFeatures";
export default function ProductPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" flex flex-col">
        <div>YourD Pass</div>
        <div>
          <li>유저 Verifiable Credential 저장 지원</li>
          <li>Fast Authentication Service 제공</li>
          <li>EBSI(European Blockchain Services Infrastructure)</li>

          {/* <TabsFeatures /> */}
        </div>
      </div>

      <div className="flex flex-col">
        <div>YourD 3.0 Protocol</div>
        <ul>
          <li></li>
        </ul>
      </div>

      <div>
        <div>Data Selling</div>
        <li>YourD Authentication</li>
        <li>web3 user Analytics</li>
        <li>Realtime db</li>
      </div>
    </div>
  );
}
