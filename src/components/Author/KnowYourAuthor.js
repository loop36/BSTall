import Card from "../Layout/Card";
import { Element } from "react-scroll";

const KnowYourAuthor = () => {
  return (
    <Element name="kya">
    <div  className="flex justify-center  self-center w-screen">
     
        <div className="flex flex-col w-10/12 justify-center self-center border-solid border-2 py-12 rounded-2xl">
          <h3 className="font-bold mb-7 self-center"> Paulo Coelho</h3>
          <div className="flex mt-5">
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+5.png" alt= "Author  " className="m-auto"/>
            <p className="w-8/12 self-center m-auto text-left">
              Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a
              Jesuit school. At 17, Coelho's parents committed him to a mental
              institution from which he escaped three times before being
              released at the age of 20.[3][4] Coelho later remarked that "It
              wasn't that they wanted to hurt me, but they didn't know what to
              do... They did not do that to destroy me, they did that to save
              me."[5] At his parents' wishes, Coelho enrolled in law school and
              abandoned his dream of becoming a writer. One year later, he
              dropped out and lived life as a hippie, traveling through South
              America, North Africa, Mexico, and Europe and started using drugs
              in the 1960s.[6][7]
            </p>
          </div>
        </div>
    
    </div>
</Element>
  );
};

export default KnowYourAuthor;
