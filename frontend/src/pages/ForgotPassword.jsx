import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const { backendUrl } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async () => {
    try {
      const res = await axios.post(`${backendUrl}/api/user/check-email`, { email });
      if (res.data.exists) {
        setStep(2);
        toast.success('Имейл намерен. Въведи нова парола.');
      } else {
        toast.error('Няма акаунт с този имейл.');
      }
    } catch (err) {
      toast.error('Грешка при заявка');
    }
  };

  const handlePasswordReset = async () => {
    try {
      const res = await axios.post(`${backendUrl}/api/user/reset-password`, { email, newPassword });
      if (res.data.success) {
        toast.success('Паролата е променена успешно!');
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error('Неуспешна смяна на парола');
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded text-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-center">Забравена парола</h2>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Въведи своя емайл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={handleEmailSubmit}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900"
            >
              Продължи
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
            >
              Отказ
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Въведи нова парола"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={handlePasswordReset}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900"
            >
              Смени паролата
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
            >
              Отказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;


