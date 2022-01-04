import Card from "../Layout/Card"

const Comments = () => {
    return (
        <div className="flex w-screen flex-col self-center justify-center my-auto mt-32 mb-32">
            <h1 className="font-bold ml-32 mb-12"> Recognitions</h1>
            <div className="flex w-screen self-center justify-center">
            <Card class ="flex-col">
                <h1 className="font-bold "> Akhil  </h1>
                <p className="italic"> Reading the book was best  thing i did</p>

            </Card>
            <Card class ="flex-col">
                <h1 className="font-bold"> Akhil  </h1>
                <p className="italic"> Reading the book was best  thing i did</p>

            </Card>
            <Card class ="flex-col">
                <h1 className="font-bold"> Akhil  </h1>
                <p className="italic"> Reading the book was best  thing i did</p>

            </Card>
            <Card class ="flex-col">
                <h1 className="font-bold"> Akhil  </h1>
                <p className="italic"> Reading the book was best  thing i did</p>

            </Card>
            </div>
        </div>

    )
}

export default Comments
