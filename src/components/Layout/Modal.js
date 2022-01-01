import  ReactDOM  from "react-dom";

const ModalData  = (props) => {
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full text-center pt-auto bg-transparent h-screen left-0 " id="modal">
        <div className="absolute flex justify-center self-center z-30 h-screen w-screen ">
        {props.children}  
         </div>
         <div className="fixed z-0 w-screen h-screen bg-primaryColor opacity-80 ">         
         </div>          
        </div>
    )
}
const Modal =(props) =>{
    return (
        <>
        {ReactDOM.createPortal(<ModalData {...props}/>,document.getElementById('overlays'))}
        </>
    )
}
export default Modal
