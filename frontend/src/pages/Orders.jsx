import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const translateStatus = (status) => {
    switch (status.toLowerCase()) {
      case 'order placed': return 'Поръчката е приета';
      case 'packing': return 'Опакова се';
      case 'shipped': return 'Поръчката е изпратена';
      case 'out for delivery': return 'Доставя се от куриер';
      case 'delivered': return 'Доставена';
      default: return status;
    }
  };

  const translatePayment = (method) => {
    switch (method.toLowerCase()) {
      case 'card': return 'Карта';
      case 'cash': return 'В брой';
      case 'cod': return 'Плащане при доставка';
      default: return method;
    }
  };

  const translateSize = (size) => {
    switch (size.toLowerCase()) {
      case 'small': return 'Малък';
      case 'medium': return 'Среден';
      case 'large': return 'Голям';
      default: return size;
    }
  };

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t pt-16'>
      <div className='flex justify-between items-center text-2xl mb-4'>
        <Title text1={'МОИТЕ'} text2={'ПОРЪЧКИ'} />
        <Title text1={'СТАТУС НА'} text2={'ПОРЪЧКАТА'} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image} alt="" />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                  <p>{currency}{item.price}</p>
                  <p>Количество: {item.quantity}</p>
                  <p>Размер: {translateSize(item.size)}</p>
                </div>
                <p className='mt-1'>Дата: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                <p className='mt-1'>Начин на плащане: <span className='text-gray-400'>{translatePayment(item.paymentMethod)}</span></p>
              </div>
            </div>
            <div className='flex items-center gap-2 md:flex-col md:items-end mr-4'>
              <div className='flex items-center gap-2'>
                <span className='min-w-2 h-2 rounded-full bg-green-500'></span>
                <p className='text-sm md:text-base'>{translateStatus(item.status)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {orderData.length > 0 && (
        <div className='flex justify-end pt-6'>
          <button onClick={loadOrderData} className='border px-6 py-3 text-sm font-medium rounded-sm'>
            Актуализирай статус
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;



