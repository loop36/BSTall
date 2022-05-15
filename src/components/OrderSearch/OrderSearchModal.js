import axios from 'axios';
import { useEffect ,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Modal from '../Layout/Modal'
const OrderSearchModal = (props )=>{
    const [order, setOrder] = useState([]);
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
    <div className=" bg-white w-96 pb-10 m-auto rounded-lg ">
        <h1 className=" font-bold mt-5 mb-10 text-xl">Order Details</h1>
    {
       !order.length?<h1>No Orders found</h1>:order.map(order=>{
            return (
            <div className='flex mx-auto mb-3 w-10/12 gap-4 border-2 border-dotted p-5'>
                <h1 className=' w-8/12'> {order.orderID.S}</h1>
                <button className='border-2 border-green-400 m-auto flex transition-colors hover:bg-green-500 hover:text-gray-50  px-4' onClick={()=>{navigate("/oc/" + order.orderID.S);}}>View</button>
            </div>)

        })
    }
    </div>
</Modal>
}

export default OrderSearchModal;