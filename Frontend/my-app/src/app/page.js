export default function Home() {
  return (
    
    
    <div className="w-[95%] mx-auto">   

      <main className="border-l-2 border-[#7763F9]  mt-5 flex justify-between px-10 min-h-52 items-center ">

        <div>
          <h1 className="text-7xl font-bold text-[#2D3750]">
            Nexora
          </h1>

          <h1 className="ml-8 text-7xl font-bold text-[#7763F9]">
            Technology.
          </h1>
        </div>

        <div className="w-[30%]">
          <div className=" flex-1 flex flex-col gap-3 ">
            <p className="text-gray-600  ">
            We create modern digital experiences and scalable technology solutions
            that help businesses grow, connect, and stand out.
            </p>

            <button className="bg-[#7763F9] text-white w-fit p-2 rounded">
              view Portfolio
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}