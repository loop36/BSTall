import { Element } from 'react-scroll'
const AuthorWorks = () => {
    return (
        <Element name='work'>
        <div className=" flex  flex-col mt-32">
            <h3 className="text-left font-bold mb-24 ml-32 text-xl">Works</h3>
            <div className="flex gap-12 mx-auto">
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+8.png" alt= "works"/>
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+9.png" alt= "works"/>
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+10.png" alt= "works" />
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+11.png" alt= "works" />
            <img src="https://bookstallbucket.s3.amazonaws.com/Image+12.png" alt= "works" />

            </div>
        </div>
        </Element>
    )
}

export default AuthorWorks
