import  ReactDOM  from "react-dom";

const ModalData  = (props) => {
    return (
        <div  className="fixed z-10  overflow-scroll top-0 w-full text-center pt-auto bg-transparent h-screen left-0 " id="modal">
        <div className="absolute flex justify-center self-center z-30 h-screen w-screen ">
        {props.children}
         </div>
      
        
         <div className="fixed z-0 w-screen h-screen bg-gray-700 opacity-50 " >         
         </div>          
        </div>
    )
}
const Modal =(props) =>{
    return (
        <>
        {ReactDOM.createPortal(<ModalData close={props.close} {...props}/>,document.getElementById('overlays'))}
        </>
    )
}
export default Modal
