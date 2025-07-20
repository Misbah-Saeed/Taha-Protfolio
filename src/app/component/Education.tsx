import Image from "next/image";
export default function education() {
    return (
        <div className="bg-red mt-10 pr-10 pl-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[40px] h-[400px]">
          {/* Text Section (Left Side) */}
          <div className="flex flex-col items-start mr-[500px] w-[500px]">
                    <h1 className="text-4xl  text-[#20948B] w-[400px]  ml-[800px]  font-bold  mb-4">
                 Education
                    </h1>
                    <div className="font-bold">
                        <h2 className="text-2xl  text-[#155674] ml-[800px]">
                            Intermediate in Pre-Engineering</h2>
                    <p className="text-lg   text-[#1995AD] ml-[800px] w-[400px] mb-8">
                  (2023-2024)
                  Govt.Inter Boys College Lanhdi No 04 
                  </p></div>
                    <div className="font-bold">
                        <h2 className="text-2xl text-[#155674] ml-[800px]">
                            Matriculation in Computer Science</h2>
                    <p className="text-lg text-[#1995AD]    ml-[800px] w-[400px] mb-8">
                  (2020-2021)
                 The Citized Fundation School Korangi # 4
                  </p></div>
                    </div>
                     <div className="flex justify-center mb-[40px] w-[500px]  ml-[-600px] ">
                                            <Image
                                                src="/image/E1.jpeg"
                                                alt=" image"
                                                width={500}
                                                height={300}
                                                className="rounded-md shadow-md w-[500px] h-[300px]"
                                            />
                                        </div>
           </div>
                </div>
    )
}