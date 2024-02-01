import { useState } from 'react';

function App() {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  function changeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function SubmitForm(e) {
    e.preventDefault();
    console.log('hi');
    console.log(value.username, value.password);
  }

  return (
    <div className="h-screen bg-slate-500">
      <form onSubmit={SubmitForm}>
        <div className="mb-5">
          <label htmlFor="username">username</label>
          <input id="username" name="username" type="text" onChange={changeValue} value={value.username} />
          <div>{value.firstName}</div>
        </div>

        <div className="mb-5">
          <label htmlFor="password">password</label>
          <input id="password" name="password" type="password" onChange={changeValue} value={value.password} />
          <div>{value.email}</div>
        </div>

        <div>
          <button type="submit" className="border-2 border-black bg-green-600 ml-20">
            Submit
          </button>
          <button type="button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
