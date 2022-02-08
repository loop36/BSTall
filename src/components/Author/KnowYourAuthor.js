import Card from "../Layout/Card";
import { Element } from "react-scroll";
import avatar from "../../Assets/Balagopalan.jpg";
const KnowYourAuthor = () => {
  return (
    <Element name="kya">
      <div className="flex justify-center  self-center w-screen mb-10">
        <div className="flex flex-col w-10/12 justify-center self-center border-solid border-2 py-12 rounded-2xl">
          <h3 className="font-bold mb-7 self-center"> ബാലഗോപാലൻ പേരൂർ </h3>
          <div className="md:flex lg:flex mt-5 ">
            <img src={avatar} alt="Author" className="m-auto px-3 mb-4 sm:w-4/12 md:w-3/12" />
            <p className="w-8/12 self-center m-auto text-left text-sm leading-7">
              കോട്ടയം ജില്ലയിൽ പേരൂർ ചാലയ്ക്കൽ വീട്ടിൽ റ്റി. എൻ കൃഷ്ണൻ
              കുട്ടിമാരാരുടെയും ദേവകിയമ്മയുടെയും മകനായി
            ജനനം.  ഏറ്റുമാനൂർ കാവ്യവേദി
              ട്രസ്റ്റ് സെക്രട്ടറി, പുരോഗമന കലാസാഹിത്യസംഘം പേരൂർ മേഖലാ
              സെക്രട്ടറി എന്നീ നിലകളിൽ പ്രവർത്തിക്കുന്നു. കൂടാതെ വിവിധ
              സാംസ്കാരിക സാമൂഹ്യ സംഘടനകളിലും ചേർന്ന് പ്രവർത്തിക്കുന്നു. കവികളുടെ
              സഹകരണത്തിലൂടെ പ്രസിദ്ധീകരിച്ച 16 കാവ്യസമാഹാരങ്ങളിൽ പങ്കാളി യാണ്.
              കഥ, കവിത എന്നിവ ആനുകാലികങ്ങളിൽ എഴുതി വരുന്നു. 
                വിവിധ കവിയരങ്ങുകളിൽ സജീവ
              സാന്നിധ്യം ഉണ്ണിക ഷ്ണൻ കാഞ്ഞിരത്താനം സ്മാരകമിത്ര പുരസ്കാരത്തിന്
              2009 ൽ അർഹനായി. 2018 ൽ പരസ്പരം വായനക്കൂട്ടം സാഹിത്യ പുരസ്കാരം,
              2021ൽ ജെ.സി. ഡാനിയൽ ഫൗണ്ടേഷന്റെ കാവ്യാ പുരസ്കാരം എന്നിവയും
              ലഭിച്ചു. ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല. പ്രഥമ കവിതാ സമാഹാരം. 
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default KnowYourAuthor;
