export default function YourdDiagram() {
  return (
    <div className="flex items-center justify-center flex-col p-32">
      <div className="text-5xl font-bold text-blue-700 p-12">
        Problems YourD is solving
      </div>
      <div className="flex flex-row items-center justify-center ">
        <div className="border rounded-full transform translate-x-32 border-blue-700 w-[700px] h-[700px] flex flex-col items-center justify-center">
          <div>Web 2</div>
          <div>
            Absense of data ownership <br /> Lack of privacy
          </div>
        </div>
        <div className="border rounded-full transform -translate-x-32  border-blue-700 w-[700px] h-[700px] flex flex-col items-center justify-center">
          <div>Web 3</div>
          <div>
            Fragmentation <br /> Complex UX
          </div>
        </div>
      </div>
    </div>
  );
}
