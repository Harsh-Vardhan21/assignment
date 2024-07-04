import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { BsFillEyeFill } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { fullName, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://assignment-himu.onrender.com/api/users/signup', {
        fullName,
        email,
        password
      });
      toast.success(`Signup successful. Welcome ${fullName}!`);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      toast.error(`${error.response.data.message}.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative bg-[rgba(39,41,30,0.14)] rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px] rounded-bl-[70px] shadow-md w-[80%] max-w-[717px] max-h-full min-w-[300px] min-h-[400px] flex flex-col items-center p-8 overflow-auto">
      <h2 className="text-3xl font-bold mb-8">Signup</h2>

      <div className="w-full mb-6">
        <div className="relative bg-white shadow-md rounded-[22px] px-4 py-2 flex items-center">
          <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6 mr-3">
            <rect width="30" height="35" fill="url(#pattern0_9_27)"/>
            <defs>
              <pattern id="pattern0_9_27" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_9_27" transform="matrix(0.0078125 0 0 0.00669643 0 0.0714286)"/>
              </pattern>
              <image id="image0_9_27" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC+ElEQVR42u3a3WvOYRzH8fdt92y0LA/ZRAg7mRApeSgPLQ/zrKY8hAPigANFHEiIQpEDMidilh3IDiitqBmxkRSldiBt02SkWHPbw73f1z8w2e5d133/vr99X++/4PqcXCdfjDHGGGOMMcYYY4wxxviWRTE7OEU5lVRygzPsZg7xofH01dymDemjH1SxkWwiK4cDfET+UwuHGUEEraQR6WdNbCJScrlGgAyoCvKIiALqkRR6x2TQbyKNSIo1MwPlxvABGUSfmIBicWqRQdZADmqdQBx0CaVm0oU4qJcFqFSDOKqeGOosIUCctQ517iMOq0OZ8XQhDutlOqrsQxx3FFXuIY57jCIxPiOO+0UcNcYSIM6bhhrzEA+tQI2ViIe2osYGxEO7UKMU8dB21FiEeGgtakxBPDQHNeK0I47rJg9FniKOe48qpxDHXUGVuYjjlqNKjPeIw5qIo8x+xGHHUCeXZsRR38lHoZ2Iow6hUoxaxEENZKHUJNqQQfaTIhRbRicyiJKsR7kyupEU62Uv6LeFBJJCXewmIhak8CV+ZTkRMoY7BEi/q6aQyFnKS6QfvWU1kbWUKjqQf/SHalYRI+LyWMdFHtNEB9308Jtm6rjMZvIZYrIYwUjidjtsjDHGGDNkDKeAYhZSwhpKKWERMykklwjLppgyTlLBC1roRPqoiy/Uc5fTbGMWOUTCVHZwlXoSyADr5A3l7KGIGAqNYxs3aUIc1EoluyhEiSkc5jk9iOOSNHCcIkJsFHt5RhLxWMArDjKW0JlFOe1Imkpwi/mExmIeESBpLuAJJWTcXGqQDPaUhWTMaK6TRDJcQAUFZEAprUhI+kYZaRXnAr1IiAq4znDSZCQPkRBWR356nl+HhLTX/icYxn0kxNWSjVdHkJB3Fo+mkUBCXjez8eYmoqBqPBlNAlFQkkl4UYYoaR9enEeUdAMvKhAlPcCLKkRJNTaADWAD2AA2gA1gA9gANoBTx6lR0jk7wTDGGGOMMcYYY4wxxpg+/QUQc4zwCfBDKAAAAABJRU5ErkJggg=="/>
            </defs>
          </svg>
          <input
            name="fullName"
            value={fullName}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none py-2 pl-9"
            placeholder="Full Name"
            required
          />
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="relative bg-white shadow-md rounded-[22px] px-4 py-2 flex items-center">
          <span className="w-6 h-6 mr-3">
            <HiOutlineMailOpen className="w-full h-full" />
          </span>
          <input
            name="email"
            value={email}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none py-2 pl-9"
            placeholder="Email ID"
            required
          />
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="relative bg-white shadow-md rounded-[22px] px-4 py-2 flex items-center">
          <IoMdLock className="w-6 h-6 mr-3" />
          <input
            name="password"
            value={password}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none py-2 pl-9"
            placeholder="Create a Password"
            type={showPassword ? 'text' : 'password'}
            required
          />
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="relative bg-white shadow-md rounded-[22px] px-4 py-2 flex items-center">
          <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            className="w-full bg-transparent border-none outline-none py-2 pl-9"
            placeholder="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <BsFillEyeFill className="text-lg" />
          </button>
        </div>
      </div>

      <button type="submit" className={`w-3/4 h-12 rounded-lg text-white font-bold mb-6 ${isLoading ? 'bg-blue-300' : 'bg-blue-600'}`} disabled={isLoading}>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </div>
        ) : (
          'Signup'
        )}
      </button>

      <p className="text-gray-800 text-base">
        Already have an Account? <span className="text-red-500 cursor-pointer">Login</span>
      </p>

      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
};

export default Signup;
