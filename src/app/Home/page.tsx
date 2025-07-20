import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
export default function Hero() {
  return (
    <>
   <Header />
      <div className="bg-red mt-10 pr-10 pl-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[40px] h-[400px]">
          {/* Text Section (Left Side) */}
          <div className="flex flex-col items-start ml-[150px] w-[500px]">
            <h1 className="text-4xl  text-[#20948B] w-[400px] font-bold text-gray-800 mb-4">
            Hi,  I am Shaikh Taha Ahmed
              </h1>
            <p className=" text-gray-600 w-[400px] mb-8">
            I am Student for Bano Qabil
            </p>
            <div className="flex items-center grap-5">
            <button className="bg-[#20948B] hover:bg-[#C4DFE6] hover:text-[#20948B] w-[150px] text-white font-bold py-2 px-4 rounded">
             Contact Me
            </button>
            </div>
          </div>
          
          <div className="flex justify-center mb-[40px] w-[500px] mr-[200px]">
                        <Image
                            src="/image/t1.png"
                            alt=" image"
                            width={300}
                            height={500}
                            className="rounded-md shadow-md w-[500px] h-[300px]"
                        />
                    </div>

         
         
        </div>
      </div>
      <Footer />
  </>
  )
}
