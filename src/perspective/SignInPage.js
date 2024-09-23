import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="flex flex-col w-full max-w-md mx-auto my-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:max-w-6xl md:flex-row">
        {/* Sign In Form */}
        <div className="w-full p-8 md:w-1/2 md:p-12">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2 md:text-3xl">Welcome back</h1>
            <p className="text-sm text-gray-600">New to Untitled? <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition duration-150 ease-in-out">Create an account</a></p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" 
                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out" />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" id="password" name="password" placeholder="••••••••" 
                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember for 30 days</label>
              </div>
              <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out">Forgot password?</a>
            </div>
            
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out">
              Sign in
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        
        {/* Image and Info */}
        <div className="w-full bg-purple-600 p-8 text-white md:w-1/2 md:p-12">
          <div className="h-full flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 md:text-3xl">Introducing AutoReports 2.0®</h2>
              <p className="text-purple-200">You asked and we listened. Faster and more accurate automated reports. Sign in to explore!</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
                <h4 className="font-semibold text-lg mb-2">Sales account</h4>
                <p className="text-3xl font-bold mb-1 md:text-4xl">$288k</p>
                <p className="text-sm text-purple-200">↗ 3.4% vs last year</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
                <p className="text-3xl font-bold mb-1 md:text-4xl">$58,144.80</p>
                <p className="text-sm text-purple-200">↗ 52,204.12 (+899%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;