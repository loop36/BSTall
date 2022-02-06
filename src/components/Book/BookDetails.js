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
      <div className="lg:flex md:flex  mb-28 lg:mt-10 md:mt-10 sm:mt-5 border-box lg:flex-row md:flex-row lg:justify-center">
        
          <div className="flex flex-col  lg:w-1/2 md:w-1/2 gap-1">
          <div className="m-6 items-center flex-grow-0">
            <h1 className=" font-bold lg:text-3xl self-center md:text-xl text-2xl">
              ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല
            </h1>
            <h4 className=" self-center ml-30 lg:ml-60 md:ml-60 text-gray-600 font-semibold lg:text-xl mt-1 md:text-base ">
              ബാലഗോപാലൻ പേരൂർ{" "}
            </h4>
            </div>
         
          <div id="content">   
          <img
            src="https://bookstallbucket.s3.amazonaws.com/alchemist.png"
          className="shrink w-4/12 text-center m-auto lg:hidden md:hidden"
            alt="Alchemist"/>   
              <p className=" text-xs lg:text-sm md:text-xs mx-4  px-6 leading-5  mt-4 tracking-widest">
            കവിത കുറുക്കിയെടുത്ത്‌ അതിൻ്റെ കാമ്പും കഴമ്പും മാത്രം കൊണ്ടു
              രൂപപ്പെടുത്തിയ ഒരു കാവ്യ ശിൽപമാണ് ഈ പുസ്തകം. വിവിധ ആശയങ്ങളിലൂടെ
              സഞ്ചരിച്ചു അനന്യമായ സുഖം വായനക്കാരനു തരുന്ന ഈ കാവ്യ സമാഹാരത്തിൽ
              പ്രാപഞ്ചിക സത്യത്തിൻ്റെ നേർവഴക്കങ്ങൾ വിരചിതമായിട്ടുണ്ട് .
              ഉത്തരങ്ങൾക്കായി തലയുയർത്തി നിൽക്കുന്ന കവിതകളുടെ ഒരു കൂട്ടമാണിത് .
              .യാതൊരു നിഗൂഢതകളും കവിതകളെ ഇവിടെ
              രൂപമാക്കുന്നില്ല. എല്ലാം സുതാര്യമസൃണം മാത്രമാണ്.
            </p>
            </div>    
            <div id="placeoreder" className=" text-center"> 
            <button
              className=" w-72 self-center justify-end mt-6 lg:mt-10 border-2 border-solid bg-red-500  rounded-3xl h-10 font-bold text-gray-100"
              onClick={() => {
                setToggleAddress(!toggleAddress);
              }} >
              Buy now $ 49.50
            </button>
        </div>
        </div>
        <div className="md:flex lg:flex lg:justify-center gap-4 items-center -mt-5 hidden">
          <img
            src="https://bookstallbucket.s3.amazonaws.com/Image+1.png"
            className="shrink h-4/6  lg:block"
            alt="Alchemist Back"            
          />
          <img
            src="https://bookstallbucket.s3.amazonaws.com/alchemist.png"
          className="shrink h-4/6"
            alt="Alchemist"
          />
        </div>
      </div>
    </Element>
  );
};

export default BookDetails;
