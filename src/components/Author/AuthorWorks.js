import { Element } from 'react-scroll'
const AuthorWorks = () => {
    return (
        <Element name='work'>
        <div className=" flex  flex-col mt-32">
            <h3 className="text-left font-bold mb-24 ml-32">Works</h3>
            <div className="flex gap-4 mx-auto">
            <div className=" w-32 h-40 border-2 border-solid border-black m-auto"></div>
            <div className=" w-32 h-40 border-2 border-solid border-black m-auto"></div>
            <div className=" w-32 h-40 border-2 border-solid border-black m-auto"></div>
            <div className=" w-32 h-40 border-2 border-solid border-black m-auto"></div>
            <div className=" w-32 h-40 border-2 border-solid border-black m-auto"></div>
            </div>
        </div>
        </Element>
    )
}

export default AuthorWorks
