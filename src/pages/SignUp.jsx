import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authenticate } from "../lib";
import { BASE_URL, GOOGLE_URL } from "../lib/constants";
import { ThreeCircles } from "react-loader-spinner";

const SignUp = () => {
      const [formsState, setFormState] = useState({ email: "", name: "", password: "" });
      const [error, setError] = useState({ email: false, name: false, password: false });
      const [isLoading, setIsLoading] = useState(false);
      const [serverError, setServerError] = useState(null);

      const navigate = useNavigate();

      const validateForm = () => {
            const emailisValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formsState.email);
            const PasswordValid = formsState.password.trim().length > 5;
            const NameisValid = formsState.name.trim().length > 2;

            setError({ email: !emailisValid, password: !PasswordValid, name: !NameisValid });

            return emailisValid && PasswordValid && NameisValid;
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormState((prev) => ({ ...prev, [name]: value }));
            setError((prev) => ({ ...prev, [name]: false })); // Clear field-specific errors on input
      };

      const onSubmit = async (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            setIsLoading(true);
            try {
                  const request = await fetch(BASE_URL + "/api/register/", {
                        method: "POST",
                        body: JSON.stringify({ ...formsState, username: formsState.name }),
                        headers: {
                              "Content-Type": "application/json",
                        },
                  });
                  const response = await request.json();
                  if (!request.ok) {
                        setServerError(Object.values(response)[0]);
                        return;
                  }
                  setFormState({ email: "", name: "", password: "" });
                  Authenticate("token", response.token)// Reset form

                  navigate("/home");
            } catch (error) {
                  console.error("Error during submission:", error);
                  setServerError("An unexpected error occurred. Please try again later");

            } finally {
                  setIsLoading(false)
            }
      };

      return (
            <form onSubmit={onSubmit} className="space-y-5 text-muted w-full max-w-[600px]">
                  <h1 className="text-3xl md:text-4xl font-medium">Sign Up</h1>
                  {serverError && <p className="text-red-400  md:text-xl">{serverError}</p>}


                  <div className="space-y-1">
                        <label htmlFor="email" className="inline-block">
                              Email<span className="text-red-600 text-lg">*</span>
                        </label>
                        <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="Your Email"
                              className={`w-full border px-3 bg-slate-500/10 focus:outline-none p-2 rounded-lg ${error.email ? "border-red-600" : "border-white/10"
                                    }`}
                              onChange={handleChange}
                        />
                        {error.email && <span className="text-red-600/60 text-sm">Invalid Email</span>}
                  </div>
                  <div className="space-y-1">
                        <label htmlFor="name" className="inline-block">
                              Name<span className="text-red-600 text-lg">*</span>
                        </label>
                        <input
                              id="name"
                              name="name"
                              required
                              placeholder="Your name"
                              className={`w-full border px-3 bg-slate-500/10 focus:outline-none p-2 rounded-lg ${error.name ? "border-red-600" : "border-white/10"
                                    }`}
                              onChange={handleChange}
                        />
                        {error.name && (
                              <span className="text-red-600/90 text-sm">Your name must be at least 3 characters.</span>
                        )}
                  </div>



                  <div className="space-y-1">
                        <label htmlFor="password" className="inline-block">
                              Password<span className="text-red-600 text-lg">*</span>
                        </label>
                        <input
                              id="password"
                              name="password"
                              type="password"
                              required
                              placeholder="Your password"
                              className={`w-full border px-3 bg-slate-500/10 focus:outline-none p-2 rounded-lg ${error.password ? "border-red-600" : "border-white/10"
                                    }`}
                              onChange={handleChange}
                        />
                        {error.password && (
                              <span className="text-red-600/90 text-sm">Password must be at least 6 characters.</span>
                        )}
                  </div>

                  <button
                        disabled={isLoading}
                        className={`bg-primary text-primary-foreground ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                              } p-2 md:p-3 rounded-full w-full md:text-md font-medium`}
                  >
                        {isLoading ? <div className="flex h-full justify-center  w-full gap-2 items-center mx-auto">
                              <ThreeCircles color="white" width={19} height={19} />
                              <p>Loading</p>
                        </div> : "Sign Up"}
                  </button>

                  <div className="flex justify-center">
                        <div onClick={() => location.href = GOOGLE_URL} className="rounded-full cursor-pointer hover:bg-primary/20 transition-all duration-300 hover:text-white w-full p-3 text-center">Sign in with Google</div>
                  </div>                  <p className="text-sm !text-muted-foreground text-left">Already a member? <Link className="text-primary" to="/auth/login">Login in!</Link></p>
            </form>
      );
};

export default SignUp;
