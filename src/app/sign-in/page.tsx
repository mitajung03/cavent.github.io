import Image from "next/image";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 border border-gray-300">
      {/* Title */}
      <div className="w-full max-w-xs mb-20">
        <span className="text-3xl font-bold">WELCOME...</span>
      </div>

      {/* Logo */}
      <div className="w-full max-w-xs mb-8 -mt-4">
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[300px]"
        />
      </div>

      {/* Form */}
      <div className="w-full max-w-xs">
        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2 relative">
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

        {/* Forgot Password */}
        <div className="text-right mb-6 -mt-2">
          <a href="/forgot-password" className="text-blue-500 hover:underline text-xs">
            forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 -mt-2">
          Sign-In
        </button>

        {/* Sign-Up */}
        <div className="mt-4 text-center text-sm">
          <p>
            Doesn&apos;t have an account?{" "}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Sign-Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
