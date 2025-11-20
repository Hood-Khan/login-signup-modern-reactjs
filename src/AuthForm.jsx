// import React, { useState } from "react";

// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
//       <div className="bg-gray-800 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">
//         {/* Toggle Tabs */}
//         <div className="relative flex justify-center bg-gray-700 rounded-t-2xl">
//           {/* Sliding indicator */}
//           <div
//             className={`absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-t-2xl transition-all duration-300 ${
//               isLogin ? "translate-x-0" : "translate-x-full"
//             }`}
//           ></div>
//           {/* Buttons */}
//           <div className="flex w-full relative z-10">
//             <button
//               className={`w-1/2 py-3 font-semibold text-white transition-colors ${
//                 isLogin ? "" : "text-gray-300"
//               }`}
//               onClick={() => setIsLogin(true)}
//             >
//               Login
//             </button>
//             <button
//               className={`w-1/2 py-3 font-semibold text-white transition-colors ${
//                 !isLogin ? "" : "text-gray-300"
//               }`}
//               onClick={() => setIsLogin(false)}
//             >
//               Signup
//             </button>
//           </div>
//         </div>

//         {/* Forms */}
//         <div className="p-8">
//           {isLogin ? (
//             <div>
//               <h2 className="text-2xl font-bold text-white text-center mb-6">
//                 Welcome Back
//               </h2>
//               <form className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
//                 >
//                   Login
//                 </button>
//               </form>
//               <div className="mt-4 text-right">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-500 text-sm"
//                 >
//                   Forgot Password?
//                 </a>
//               </div>
//               <p className="mt-6 text-gray-300 text-center text-sm">
//                 Not a Member?{" "}
//                 <a
//                   href="#"
//                   onClick={() => setIsLogin(false)}
//                   className="text-blue-400 hover:text-blue-500 font-semibold"
//                 >
//                   Signup now
//                 </a>
//               </p>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-2xl font-bold text-white text-center mb-6">
//                 Create Account
//               </h2>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
//                 >
//                   Signup
//                 </button>
//               </form>
//               <p className="mt-6 text-gray-300 text-center text-sm">
//                 Already have an account?{" "}
//                 <a
//                   href="#"
//                   onClick={() => setIsLogin(true)}
//                   className="text-blue-400 hover:text-blue-500 font-semibold"
//                 >
//                   Login
//                 </a>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;

import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 border-b border-gray-700">
  <button
    className={`w-1/2 py-3 font-semibold rounded-t-lg transition-colors ${
      isLogin
        ? "bg-blue-500 text-white"
        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
    onClick={() => setIsLogin(true)}
  >
    Login
  </button>
  <button
    className={`w-1/2 py-3 font-semibold rounded-t-lg transition-colors ${
      !isLogin
        ? "bg-blue-500 text-white"
        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
    onClick={() => setIsLogin(false)}
  >
    Signup
  </button>
</div>


        {/* Forms */}
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Welcome Back
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-right">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 text-sm"
              >
                Forgot Password?
              </a>
            </div>
            <p className="mt-6 text-gray-300 text-center text-sm">
              Not a Member?{" "}
              <a
                href="#"
                onClick={() => setIsLogin(false)}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Signup now
              </a>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Create Account
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Signup
              </button>
            </form>
            <p className="mt-6 text-gray-300 text-center text-sm">
              Already have an account?{" "}
              <a
                href="#"
                onClick={() => setIsLogin(true)}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;

