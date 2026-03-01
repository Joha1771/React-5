import React from "react";
import iphone from "../../assets/iphone.png";
import chehol1 from "../../assets/chehol1.png";
import chehol2 from "../../assets/chehol2.png";
import chehol3 from "../../assets/chehol3.png";

const HeroSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12 overflow-hidden bg-black rounded-4xl">
          <div className="flex items-center justify-between px-12 py-8">
            <div className="text-white">
              <h1 className="mb-2 text-4xl font-bold">
                Аксессуары для
                <br />
                Iphone 13 Pro Max
              </h1>
            </div>
            <div className="">
              <img src={iphone} alt="iPhone" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-6 text-xl font-semibold text-gray-700">Чехлы</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 bg-white border-2 border-blue-400 rounded-2xl">
              <div className="flex items-center justify-center mb-4 h-72">
                <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
                  <img
                    src={chehol1}
                    alt="Стеклянный чехол"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Стеклянные
              </h3>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300">
              <div className="flex items-center justify-center mb-4 h-72">
                <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
                  <img
                    src={chehol2}
                    alt="Стеклянный чехол"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Силиконовые
              </h3>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300">
              <div className="flex items-center justify-center mb-4 h-72">
                <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
                  <img
                    src={chehol3}
                    alt="Стеклянный чехол"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Кожаные
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
