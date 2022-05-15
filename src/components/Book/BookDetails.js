import { Element } from "react-scroll";
import { useState } from "react";
import Card from "../Layout/Card";
import Modal from "../Layout/Modal";
import AddressForm from "../Payment/AddressForm";

const BookDetails = () => {
  const [toggleAddress, setToggleAddress] = useState(false);
  return (
    <Element name="home">
      {toggleAddress ? (
        <Modal>
          <Card class=" bg-gray-50 m-auto lg:w-auto xl:w-auto md:w-auto sm:w-3/5 flex ">
            <AddressForm
              close={() => {
                setToggleAddress(false);
              }}
            />
          </Card>
        </Modal>
      ) : (
        ""
      )}
      <div className="lg:flex  lg:mx-auto xl:mx-auto xl:justify-center xl:max-w-7xl md:flex mb-16 sm:px-12 lg:ml-10  lg:mt-20  md:mt-16 mt-16 sm:mt-16 border-box lg:flex-row md:flex-row lg:justify-center">
        <div className="flex flex-col  gap-3 lg:w-1/2 md:w-3/4 md:pl-5 pl-10  px-3 lg:px-3 lg:p-0 xl:px-24">
          <div className="m-2 items-center flex-grow-0 md:w-80 lg:w-96 ">
            <h1 className=" font-bold lg:text-2xl lg:mb-0 self-center md:text-xl sm:text-lg text-base">
              ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല
            </h1>
            <h4 className=" mr-5 sm:ml-32 lg:ml-40 text-right md:text-left sm:text-left sm:mr-20 sm:self-center lg:text-sm md:ml-32 md:text-xs text-gray-600 ml-50 text-xs self-end font-semibold  mt-1 ">
              ബാലഗോപാലൻ പേരൂർ{" "}
            </h4>
          </div>

          <div id="content">
            <img
              src="https://bookstallbucket.s3.amazonaws.com/Front+page.jpg"
              className="shrink w-4/12 mb-8 text-center m-auto lg:hidden md:hidden"
              alt="Alchemist"
            />
            <p className=" text-xs mx-0 px-3 leading-6 ml-0  md:px-1  md:leading-6 p-0 lg:text-xs lg:font-light md:text-xs sm:mx-2 lg:min-w-full lg:max-w-3xl lg:m-0 lg:pr-0 lg:pt-0 sm:px-6  lg:leading-6  mt-4 tracking-widest">
              കവിത കുറുക്കിയെടുത്ത്‌ അതിൻ്റെ കാമ്പും കഴമ്പും മാത്രം കൊണ്ടു
              രൂപപ്പെടുത്തിയ ഒരു കാവ്യ ശിൽപമാണ് ഈ പുസ്തകം. വിവിധ ആശയങ്ങളിലൂടെ
              സഞ്ചരിച്ചു അനന്യമായ സുഖം വായനക്കാരനു തരുന്ന ഈ കാവ്യ സമാഹാരത്തിൽ
              പ്രാപഞ്ചിക സത്യത്തിൻ്റെ നേർവഴക്കങ്ങൾ വിരചിതമായിട്ടുണ്ട് .
              ഉത്തരങ്ങൾക്കായി തലയുയർത്തി നിൽക്കുന്ന കവിതകളുടെ ഒരു കൂട്ടമാണിത് .
              .യാതൊരു നിഗൂഢതകളും കവിതകളെ ഇവിടെ രൂപമാക്കുന്നില്ല. എല്ലാം
              സുതാര്യമസൃണം മാത്രമാണ്.
            </p>
          </div>
          <div id="placeoreder" className=" text-center">
            <button
              className=" w-40 text-sm self-center justify-end mt-6 lg:mt-10 border-2 border-solid bg-red-500  rounded-xl h-10 font-bold text-gray-100"
              onClick={() => {
                setToggleAddress(!toggleAddress);
              }}
            >
              Buy now Rs. 125
            </button>
          </div>
        </div>
        <div className="md:flex lg:flex xl:max-w-2xl lg:w-1/2 lg:pr-24 md:p-1 lg:justify-start gap-4 items-center -mt-5 hidden sm:ml-10">
          <div className="w-1/4 md:w-3/4 lg:w-2/5 lg:pr-2">
            <img
              src="https://bookstallbucket.s3.amazonaws.com/Front+page.jpg"
              alt="Front "
            />
          </div>
          <div className="w-1/4  md: md:w-3/4 lg:w-2/5 lg:pr-2">
            <img
              src="https://bookstallbucket.s3.amazonaws.com/Back+Page.jpg"
              alt="Back "
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default BookDetails;
