import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6 border-b border-gray-700">
          <button
            className={`px-16 py-4 font-semibold rounded-t-lg transition-colors ${
              isLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-16 py-4 font-semibold rounded-t-lg transition-colors ${
              !isLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <>
            <div>
              <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
              <a href="#">Forgot Password?</a>
            </form>
            <p>Not a Member? <a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AuthForm;
