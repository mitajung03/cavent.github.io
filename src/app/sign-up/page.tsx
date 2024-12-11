import Image from "next/image";

const SignUp = () => {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 border border-gray-300">
      {/* Title */}
      <div className="w-full max-w-xs mb-6">
        <span className="text-3xl font-bold">WELCOME...</span>
      </div>

      {/* Logo */}
      <div className="w-full max-w-xs mb-8">
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[300px] mx-0"
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-xs">
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            👁️
          </button>
        </div>

        {/* Verifikasi Password Input */}
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Verifikasi password"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            👁️
          </button>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100"
          >
            User
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100"
          >
            Event Organizer
          </button>
        </div>
        

        {/* Sign-Up Button */}
        <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 mb-4">
          Sign-Up
        </button>

        {/* Already have an account */}
        <div className="text-center text-sm">
          <p>
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Sign-in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
