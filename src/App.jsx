import React, { useRef, useState } from 'react';

function App() {
  const username = useRef();
  const password = useRef();
  const [result, setResult] = useState('');

  function login(e) {
    e.preventDefault();
    setResult('Welcome ' + username.current.value);
  }

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Login Form
        </h1>

        <form onSubmit={login}>
          <input
            ref={username}
            className="border p-2 w-full mb-3 rounded"
            placeholder="Username"
            required
          />

          <input
            ref={password}
            type="password"
            className="border p-2 w-full mb-4 rounded"
            placeholder="Password"
            required
          />

          <button className="bg-blue-600 text-white p-2 w-full rounded">
            Login
          </button>
        </form>

        <p className="text-green-600 mt-4 text-center">
          {result}
        </p>

      </div>
    </div>
  );
}

export default App;