import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const Profile = () => {
  const { token, backendUrl } = useContext(ShopContext);
  const [user, setUser] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) return; // Wait for token to be ready
  
    axios.get(`${backendUrl}/api/user/me`, { headers: { token } }).then(res => {
      //console.log('API response:', res.data); // DEBUG
      if (res.data.success) {
        const { name, email } = res.data.user;
        setUser({ name, email });
        setFormData({ name, email, password: '' });
      }
    });
  }, [token]);
  

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(`${backendUrl}/api/user/me`, formData, { headers: { token } });
    setMessage(res.data.message);
    if (res.data.success) {
      setUser({ name: formData.name, email: formData.email });
      setEditMode(false);
      setFormData(prev => ({ ...prev, password: '' }));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Моят профил</h2>

      {!editMode ? (
        <div className="flex flex-col gap-4 text-gray-700">
          <div><strong>Име:</strong> {user.name}</div>
          <div><strong>Емайл:</strong> {user.email}</div>
          <div><strong>Парола:</strong> ********</div>
          <button onClick={() => setEditMode(true)} className="bg-black text-white p-2 rounded w-fit">Промени</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
          <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="New Password" className="border p-2 rounded" />
          <div className="flex gap-2">
            <button type="submit" className="bg-black text-white p-2 rounded">Запази</button>
            <button type="button" onClick={() => setEditMode(false)} className="bg-gray-300 p-2 rounded">Отмени</button>
          </div>
        </form>
      )}

      {message && <p className="mt-3 text-sm text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default Profile;
