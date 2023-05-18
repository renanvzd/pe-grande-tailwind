import React from "react";
import Image from "next/image";
// import Image from "@/assets/images/image.png";


const FirstSectionHomePage: React.FC = () => (
  <>
    <main className="bg-gradient-to-b from-background via-white to-background">
      <div className="mx-auto sm:px-6 lg:px-8 bg-primary-background pb-8">
        <div className="flex flex-col py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-green-100 mx-3 sm:p-4 rounded-lg py-5 px-5 lg:py-5 md:px-2">
            <div className="flex flex-col justify-start items-start">
              <p className="text-3xl font-bold text-black mb-2 sm:text-5xl items-start mx-0 sm:mx-4">
                Find <span className="text-slogan font-bold text-left">who</span> you need,
              </p>
              <p className="text-3xl font-bold text-black mb-2 sm:text-5xl items-start mx-0 sm:mx-4">
                <span className="text-slogan font-bold">when</span> you need,
              </p>
              <p className="text-3xl font-bold text-black mb-2 sm:text-5xl items-start mx-0 sm:mx-4">
                <span className="text-slogan font-bold text-left">where</span> you are!
              </p>
              <div className="flex flex-col mt-8 m-auto mx-0 sm:mx-4 items-start justify-start">
                <p className="text-xl sm:text-3xl">
                  How about having a list of companies and professionals from different parts of the world who offer their services in your city?
                </p>
                {/* <p className="text-xl sm:text-3xl">
                  Pretty good, right?!
                </p> */}
                <div className="mt-8">
                  {/* <p className="text-xl sm:text-3xl">
                    We&apos;ll get there little by little!
                  </p> */}
                  <p className="text-xl sm:text-3xl">
                    Pretty good, right?! <b> This is the right place for you!</b>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center items-center sm:pl-6">
              <Image src={Image} alt="description" className="w-full sm:w-3/4 lg:w-2/3" />
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-10 mx-2 sm:mx-4 ">
            <div className="flex flex-col md:mt-8 items-start justify-start bg-green-100 p-6 rounded-lg px-6">
              <p className="text-3xl font-bold text-black">
                Companies & Professionals
              </p>
              <p className="mt-4 text-black text-xl">
                Here, we want to make life easier for everyone living in Cork and be the bridge between those who have a problem and those who can help solve it!
              </p>
              <div className="mt-6">
                <p className="text-black">
                  Want to advertise?
                  <a href="/contato" className="pl-3 text-green-900 font-bold">
                    Contact us here!
                  </a>
                </p>
              </div>

            </div>
            <div className="flex flex-col mt-8 items-start justify-start bg-green-100 p-6 rounded-lg  px-6">

              <div className="mb-6">
                <p className="text-3xl font-bold text-black">
                  Make it Easy!
                </p>
                <p className="mt-4 text-black text-xl">
                  No matter your business or size, the idea is to bring all professionals and services together in one place and make it easy for everyone!
                </p>
              </div>
              <div>
                <p className="text-sm  text-black">
                  * The listing of professionals in this Classifieds is purely informative. Any hiring, requests or complaints should be dealt directly with the professional.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export { FirstSectionHomePage };
