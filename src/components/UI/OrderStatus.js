import './OrderStatus.css';

const OrderStatus = () => {
  return (
    <div className=" flex sm:flex-col mb-5 lg:flex-row md:flex-row justify-center  items-center self-start gap-3 mt-10 ">
      <div className="flex flex-col">
        <svg height="8" width="8" className="self-center">
          <circle
            cx="4"
            cy="4"
            r="3"
            stroke="green"
            stroke-width="1"
            fill="green"
          />
        </svg>
        <p className="text-xs">Created</p>
      </div>
      <div className="order-status gap-0 lg:border-t mb-4 w-20 border-gray-600"></div>
      <div className="flex flex-col gap-2">
      <svg height="8" width="8" className="self-center">
          <circle
            cx="4"
            cy="4"
            r="3"
            stroke="black"
            stroke-width="2"
            fill="white"
          />
        </svg>
        <p className="text-xs">Shipped</p>
      </div>
      <div className="order-status gap-0 lg:border-t mb-4 w-20 border-gray-600"></div>
      <div className="flex flex-col gap-2">
      <svg height="8" width="8" className="self-center">
          <circle
            cx="4"
            cy="4"
            r="3"
            stroke="black"
            stroke-width="2"
            fill="white"
          />
        </svg>
        <p className="text-xs">Delivered</p>
      </div>
    </div>
  );
};
export default OrderStatus;
