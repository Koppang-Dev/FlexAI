import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaUser,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center black h-screen">
      <div className="bg-purple-800 text-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/* Signup section */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-purple-300">Flex AI</span>
          </div>
          <div className="py-10 ">
            <h2 className="text-3xl font-bold text-purple-200 mb-2 ">
              Create an account
            </h2>
            <div className="border-2 w-10 border-purple-300 inline-block mb-2"></div>
            {/* Social log in */}
            <div className="flex justify-center my-2">
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </Link>
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </Link>
            </div>
            <p className="text-gray-400 my-3">Or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-purple-700 w-64 py-2 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="Name"
                  name="name"
                  placeholder="Name"
                  className="bg-purple-700 outline-none text-sm flex-1 text-white"
                />
              </div>
              <div className="bg-purple-700 w-64 py-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-purple-700 outline-none text-sm flex-1 text-white"
                />
              </div>
              <div className="bg-purple-700 w-64 py-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-purple-700 outline-none text-sm flex-1 text-white"
                />
              </div>
              <div className="bg-purple-700 w-64 py-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-purple-700 outline-none text-sm flex-1 text-white"
                />
              </div>
              <div className="flex justify-between w-64 mb-5 mt-5">
                <label className="flex items-center text-xs text-white">
                  <input type="checkbox" name="agreeTerms" className="mr-1" />I
                  agree to the terms and conditions
                </label>
              </div>
              <Link
                href="#"
                className="border-2 border-purple-300 text-purple-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-300 hover:text-white "
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
        {/* Login section */}
        <div className="w-2/5 bg-purple-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Already have an account?</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            If you already have an account, please log in to continue.
          </p>
          <Link
            href="/login"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-700"
          >
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
}
