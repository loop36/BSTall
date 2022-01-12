import { Element } from "react-scroll";
import Card from "../Layout/Card";
import Modal from "../Layout/Modal";
import AddressForm from "../Payment/AddressForm";


const BookDetails = () => {
      return (
      <Element name="home">
        {/* <Modal>
          <Card class="w-96  bg-yellow-500 m-auto "> 
          <AddressForm/>
          </Card>
          </Modal> */}
      <div className="lg:flex md:flex w-screen h-full mb-32 border-box hidden">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col justify-center  mt-24 gap-2">
          <h1 className=" font-bold text-6xl self-center">Alchemist</h1>
          <h4 className=" self-center ml-60 text-gray-600 font-semibold text-3xl ">Paulo Coelho</h4>
          <p className=" w-7/12 self-end lg:mr-auto sm:mx-auto mt-12">
            Duis ut exercitation duis proident. Enim reprehenderit labore magna eu
            ea ad ullamco cillum ipsum officia mollit excepteur velit. Excepteur
            sunt esse et laborum dolor laborum proident dolor irure exercitation
            officia elit aliquip.
          </p>
          <button className=" w-72 self-center border-2 border-solid bg-red-500 mt-16 rounded-3xl h-10 font-bold text-gray-100">
              Buy now $ 49.50
          </button>
          </div>
        </div>
        <div className="flex  mt-24 -m-5 gap-4 justify-center ">
        <img src="https://bookstallbucket.s3.amazonaws.com/Image+1.png" className="h-3/4" alt="Alchemist Back"/>
        <img src="https://bookstallbucket.s3.amazonaws.com/alchemist.png"  className="h-3/4" alt="Alchemist"/>
        </div>
      </div>
      </Element>
    );
  };
  
  export default BookDetails;
  