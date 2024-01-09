import process1 from "../../../assets/img/process1.png";
import process2 from "../../../assets/img/process2.png";
import process3 from "../../../assets/img/process3.png";
import process4 from "../../../assets/img/process4.png";
export default function PaymentProcess() {
  const process = [
    {
      id: 1,
      title: "Select YourD Pay",
      subtitle: "Select YourD Pay on the e-commerce platform",
      imgsrc: process1,
    },
    {
      id: 2,
      title: "Scan QR",
      subtitle: "Scan the QR code with payment information",
      imgsrc: process2,
    },
    {
      id: 3,
      title: "Card Selection",
      subtitle: "Please select the card for payment",
      imgsrc: process3,
    },
    {
      id: 4,
      title: "Settlement",
      subtitle: "Payment approved and transaction completed",
      imgsrc: process4,
    },
  ];
  return (
    <div className="flex-col items-center justify-center px-10">
    <div className="mt-10 sm:mt-16 sm:text-5xl text-4xl font-bold ">
      <div className="flex items-center justify-center">Your<span className="text-[#fccc00]">D</span>&nbsp; <br /></div>
      <div className="flex items-center justify-center font-pre-bold bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2 text-transparent ">
        Payment Process
      </div>
    </div>
    <div className="mt-10 sm:mb-20 sm:flex-row flex-col flex sm:mt-16">
      {process.map((process) => (
        <div key={process.id} className="flex flex-col sm:flex-col items-center justify-center w-full pb-12">
          <div className="w-[30px] sm:w-[60px] sm:h-[60px] bg-yellow-300 h-[30px] rounded-full flex items-center justify-center">
            <div className="text-2xl font-bold"> {process.id}</div>
          </div>
          <div className="font-bold text-3xl mt-6">{process.title}</div>
          <div className="text-2xl font-semibold text-center mt-2 sm:mt-4 text-gray-400">
            {process.subtitle}
          </div>
          <div className="mt-10">
            <img src={process.imgsrc} className="w-[260px]" alt={`Process ${process.id}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
