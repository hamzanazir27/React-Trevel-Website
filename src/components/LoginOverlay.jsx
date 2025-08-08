import { useContext, useState } from "react";
import TripContext from "../context/TripContxt";

// Login Overlay Component
function LoginOverlay() {
  // const { admin } = useContext(TripContext);

  const {
    setLoginLogout,
    loginForm,
    setLoginFrom,
    setUser,
    handleAdminLogin,
    setAdmin,
  } = useContext(TripContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onLogin function passed from parent
    if (userType === "admin") {
      if (handleAdminLogin(username, password)) {
        setLoginFrom(false);
        setLoginLogout("logout");
      } else alert("invalid credentials");
    } else {
      setLoginLogout("logout");

      setUser({ name, email });
      setLoginFrom(false);
      setAdmin(false);
    }
  };

  // Don't render if not open

  if (!loginForm) return null;

  // if () return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setLoginFrom(false)}
      ></div>

      {/* Login Form */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
        {/* Close Button */}
        <button
          onClick={() => setLoginFrom(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          <span>❌</span>
        </button>
        {/* Form Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-600 mt-1">Please enter your credentials</p>
        </div>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {userType === "admin" ? (
            <>
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username : hamza
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password : hamza
                </label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </>
          ) : (
            <>
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Name"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </>
          )}

          {/* User Type Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Login as
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="user"
                  checked={userType === "user"}
                  onChange={(e) => setUserType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">User</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={(e) => setUserType(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Admin</span>
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            Forgot your password?
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default LoginOverlay;
