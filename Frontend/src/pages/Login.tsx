import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const FoodOrderingLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState("user"); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
        role,
      });

      // Handle response
      if (response.data.success) {
        console.log("Login successful:", response.data);

        // Save token or user info in localStorage (optional)
        localStorage.setItem("authToken", response.data.token);

        // Navigate to the appropriate dashboard
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 to-orange-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Food Ordering Login
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{""}
          <a href="/signup" className="text-yellow-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default FoodOrderingLogin;
