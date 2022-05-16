import axios from 'axios';
import { useEffect ,useState} from 'react';
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import Modal from '../Layout/Modal'
const OrderSearchModal = (props )=>{
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(props.email)
        axios.post('http://localhost:3001/eps',{'email':props.email,'phone':props.phone})
        .then(res=>{
            setOrder(res.data.Items)
            console.log(res.data.Items)
        })
    },[]);
return <Modal>

    <div className=" bg-white w-96 pb-10 max-w-7xl m-auto rounded-lg ">
        <h1 className=" font-bold mt-5 mb-10 text-xl">Order Details</h1>
        {!order ?
        <div className=" flex m-auto items-center w-full justify-center">
          <ReactLoading
            type="bars"
            color="rgba(239, 68, 68,1)"
            height={"15%"}
            width={"15%"}
          />
        </div>:
    
      order.length===0?<h1>No Orders found</h1>:order.map(order=>{
            return (
            <div className='flex mx-auto mb-3 w-11/12 border-2 border-dotted py-5 '>
                <div className='flex flex-col px-3'>
                <h1 className='  font-bold text-sm'> ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല</h1>
                {order.timeStamp&&
                <span className='text-xs mt-2'> <strong className='text-red-600 font-semibold'>order placed :  </strong>{new Date(parseInt(order.timeStamp.S)).toLocaleString()  }</span>}
                </div>
                <button className='border-2 border-green-400 m-auto flex transition-colors hover:bg-green-500 hover:text-gray-50  px-4' onClick={()=>{navigate("/oc/" + order.orderID.S);}}>View</button>
            </div>)

        })
    }

    </div>
</Modal>
}

export default OrderSearchModal;