import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        swal("You're logged in!", "Login Successful!", "success");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        swal(
          "Login Failed!",
          "Wrong credentials! Please login again.",
          "error"
        );
      });
  };

  const handleGoogle = () => {
    signInGoogle()
    .then((result) => {
      const userInfo = {
        email: result._tokenResponse?.email,
        displayName: result._tokenResponse?.displayName,
        image: result._tokenResponse?.photoUrl,
      }
      console.log(result);
      axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res.data);
          swal("You're logged in!", "Login Successful!", "success");
      navigate("/");
      })
      
    })
    .catch((error) => {
      console.log(error);
      swal(
        "Login Failed!",
        "Wrong credentials! Please login again.",
        "error"
      );
    });
};
  return (
    <div className="py-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl text-black font-bold">Login now!</h1>
        <p className="py-2 my-4 text-black font-medium px-4 rounded-xl">
          Please log in to access your account and explore our donation
          services.
        </p>
      </div>

      <div className=" w-full max-w-sm mx-auto p-7 shadow-xl bg-base-100">
        <form onSubmit={handleLogin} className="space-y-4 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            {/* email  */}
            <input
              type="email"
              placeholder="Enter your email..."
              className="input input-bordered"
              name="email"
              required
            />
          </div>

          {/* password  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter your password..."
              className="input input-bordered"
              name="password"
              required
            />
          </div>

          {/* login button */}
          <div className=" text-center">
            <button
              className="btn text-black bg-amber-400 hover:bg-black hover:text-white "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-500">or login with</p>

        {/* google button */}
        <p className="text-center my-4 text-black">
          {" "}
          <button
            onClick={handleGoogle}
            className="btn w-1/2  border-none bg-amber-400 hover:bg-amber-500"
          >
            <FaGoogle></FaGoogle>Google
          </button>
        </p>

        <p className="text-center">
          Do not have an account?{" "}
          <Link to="/registration" className="text-amber-600 font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
