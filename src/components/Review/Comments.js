import { Element } from "react-scroll";
import Card from "../Layout/Card";

const Comments = () => {
  return (
    <Element name="comments">
      <div className="flex flex-col self-center justify-center my-auto mt-32 mb-32">
        <h1 className="font-bold ml-32 mb-12"> Recognitions</h1>
        <div className="flex w-screen self-center justify-center">
          <Card class="flex-col m-auto">
            <h1 className="font-bold "> Akhil </h1>
            <p className="italic  w-52">
              Reading the book was best thing i did
            </p>
          </Card>
          <Card class="flex-col m-auto">
            <h1 className="font-bold"> Akhil </h1>
            <p className="italic  w-52">
              Reading the book was best thing i did
            </p>
          </Card>
          <Card class="flex-col m-auto">
            <h1 className="font-bold"> Akhil </h1>
            <p className="italic  w-52">
              Reading the book was best thing i did
            </p>
          </Card>
          <Card class="flex-col m-auto">
            <h1 className="font-bold"> Akhil </h1>
            <p className="italic  w-52">
              Reading the book was best thing i did
            </p>
          </Card>
        </div>
      </div>
    </Element>
  );
};

export default Comments;
