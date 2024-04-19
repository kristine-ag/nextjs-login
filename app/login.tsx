import Head from 'next/head';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
          Login
        </button>
        <button className="w-full bg-red-500 text-white py-2 rounded-md mb-4">
          Sign Up
        </button>
        <button className="w-full bg-gray-800 text-white py-2 rounded-md mb-4">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
