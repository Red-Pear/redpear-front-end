import React from 'react';
import { ChevronDown } from 'lucide-react';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-400">
            New to Splurge Pay? <a href="#" className="text-blue-400 hover:underline">Create an account</a>
          </p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" 
                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" 
                   className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-800" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">Remember for 30 days</label>
            </div>
            <a href="#" className="text-sm font-medium text-blue-400 hover:underline">Forgot password?</a>
          </div>
          
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-full text-sm font-semibold text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Sign in
          </button>
        </form>
        
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-950 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-full text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Bottom UI Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <button className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">L</button>
          <button className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">B</button>
          <button className="w-12 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">SI</button>
          <button className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">G</button>
          <button className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">Y</button>
        </div>
        <button className="mt-4 mx-auto block w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SignInPage;