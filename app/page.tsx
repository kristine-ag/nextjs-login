import Head from 'next/head';
import Image from 'next/image';

const Login = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/adducampus.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
      <div className=" pb-5 flex justify-center">
        <Image src="/logo2.png" alt="Logo" width={300} height={100} />
      </div>
        <div className="bg-white bg-opacity-60 p-10 rounded-lg shadow-md w-96 relative">
          <div className="pt-1"> 
            <h1 className="text-2xl font-semibold mb-10 text-black text-center">Login</h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-1 text-black"
            />
            <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
            <div className=" pt-5 flex justify-between mb-4">
              <button className="w-1/2 bg-blue-500 text-white py-2 rounded-md mr-2">
                Login
              </button>
              <button className="w-1/2 bg-red-500 text-white py-2 rounded-md ml-2">
                Sign Up
              </button>
            </div>
            <button className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-md mb-4">
              <Image src="/google.webp" alt="Google Logo" width={24} height={24} className="mr-2" />
              Login with Google
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-400">Powered by GallawanK@2024</p>
      </div>
    </div>
  );
};

export default Login;
