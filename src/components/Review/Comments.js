import { Element } from "react-scroll";
import Card from "../Layout/Card";

const Comments = () => {
  return (
    <Element name="comments">
      <div className="flex flex-col self-center justify-center xl:px-16 xl:mx-auto xl:justify-center xl:max-w-7xl   px-32  my-auto mt-20 mb-32">
        <h1 className="font-bold xl:ml-24 self-center mb-12 text-xl  sm:mb-24 md:mb-12 lg:self-baseline">
          അവലോകനങ്ങൾ
        </h1>
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-10 flex-col md:w-10/12 sm:10/12 lg:w-10/12 xl:10/12 self-center justify-center sm:gap-20">
          <Card class="flex-col m-auto w-72 md:w-100 md:w-10/12 py-5 h-72">
            <h1 className="font-bold mb-5"> കുരീപ്പുഴ ശ്രീകുമാർ </h1>
            <p className=" m-auto  w-52 text-xs text-left px-2 leading-5">
              കവിതയിലെ കാൽപ്പനിക പരിവേഷങ്ങളെ അഴിച്ചെറിഞ്ഞു യാഥാർത്ഥ്യത്തിന്റെ
              പരുക്കൻ കുപ്പായങ്ങൾ അണിയിക്കുകയാണ്.
              നിർവചനത്തിന്റെ ഉൾക്കാമ്പുള്ള നിരവധി കവിതകൾ ഈ സമാഹാരത്തിലുണ്ട്. 
            </p>
          </Card>
          <Card class="flex-col m-auto w-72 shadow-sm md:w-10/12 py-5 h-72">
            <h1 className="font-bold mb-3 "> പി. പി. നാരായണൻ </h1>
            <p className="  m-auto w-52 text-xs text-left px-2 leading-5">
              ചില കവിതകൾ തഴുകിത്തലോടുമ്പോൾ മറ്റു ചിലത് ഗർവ്വോടെ
              മാന്തിക്കീറിമുറിപ്പെടുത്തുന്നു. വേറെ ചിലത് ഉറക്കം കെടുത്തുന്നു.
              ഇങ്ങനെ വികാര വൈരുദ്ധ്യങ്ങളും വൈവിദ്ധ്യങ്ങളും ഇരകളെ കാത്തു
              കിടക്കുന്നു
            </p>
          </Card>
          <Card class="flex-col m-auto w-72 md:w-10/12 py-5  h-72">
          
            <h1 className="font-bold mb-3"> സുരേഷ് കുറുമുള്ളൂർ </h1>
            <p className=" m-auto w-52 text-left text-xs px-2 leading-5 ">
               തന്റെ മനസ്സിനെ പൊള്ളലേൽപ്പിച്ച
              സംഭവങ്ങൾക്കും, കാ ഴ്ചകൾക്കും നടപടികൾക്കും പ്രവർത്തനങ്ങൾക്കുമെതിരെ
              ശക്തമായി തന്റെ കവിതകളിലൂടെ പ്രതികരിക്കാൻ കവി തയെ കൂടെ കൂട്ടിയതാണ്
            </p>
          </Card>
        </div>
      </div>
    </Element>
  );
};

export default Comments;
