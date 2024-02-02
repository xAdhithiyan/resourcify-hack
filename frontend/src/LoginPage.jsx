import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';

function LoginPage() {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  function changeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  let navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    let div = document.querySelector('.errorMessage');

    if (value.username == 'admin' && value.password == 'admin') {
      navigate('/dashboard', {});
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-700">
      <div className="flex justify-center">
        <img src={logo} alt="Stopwatch Logo" className="w-64  mb-6 rounded" />
      </div>
      <form onSubmit={submitForm} className="bg-white p-8 rounded shadow-md w-2/5 h-2/5">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={changeValue}
            value={value.username}
            className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={changeValue}
            value={value.password}
            className="mt-1 p-2 w-full outline-none border-0 border-b-2 hover:border-green-600 focus:border-green-600"
            autoComplete="off"
          />
        </div>
        <div className="-mt-3 text-sm text-red-500 errorMessage hidden">*enter the correct username/password </div>
        <div className="flex items-center justify-between mt-10">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
            Submit
          </button>
          <button type="button" className="text-blue-500">
            New Employee?
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
