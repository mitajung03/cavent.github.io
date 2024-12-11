import Image from "next/image";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 border border-gray-300">

      {/* Logo */}
      <div className="flex justify-center items-center w-full max-w-xs mb-8">
        <Image
          src="/logo.svg"
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[250px]"
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

        {/* Send Code*/}
        <div className="mb-4 text-right text-xs -mt-3">
                <a href="/send code" className="text-blue-500 hover:underline">
                send code
                </a>
        </div>

        {/* Verification Code Input */}
        <div className="flex justify-center items-center gap-2 mb-6">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-bold outline-none focus:ring-2 focus:ring-sky-300"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90">
          Submit
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
