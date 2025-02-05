import React, { useEffect, useState } from "react";
import { Authenticate } from "../lib";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../lib/constants";

const Login = () => {
      const [formsState, setFormState] = useState({
            email: "",
            password: "",
      });
      const [serverError, setServerErrors] = useState(null)
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null)
      const navigate = useNavigate()
      const validateForm = () => {
            const isEmailValid = formsState.email.trim() !== "";
            const isPasswordValid = formsState.password.trim() !== "";
            setError({
                  email: !isEmailValid,
                  password: !isPasswordValid,
            });
            return isEmailValid && isPasswordValid;
      };

      const onSubmit = async (e) => {
            e.preventDefault();
            if (!validateForm()) return;
            setServerErrors(null)
            setIsLoading(true)

            try {

                  const request = await fetch(BASE_URL + "/api/login/", {
                        method: 'POST',
                        body: JSON.stringify({ email: formsState.email, password: formsState.password }),
                        headers: {
                              "Content-Type": "application/json",

                        }
                  })
                  let response;
                  try {
                        response = await request.json();

                  } catch (err) {
                        response = null
                        return console.log(err)
                  }
                  if (!request.ok) {
                        setServerErrors(Object.values(response)[0])
                        setIsLoading(false)
                        return;
                  }
                  toast.success("Login Successfull")
                  navigate("/home", { replace: true })
                  Authenticate("token", response.token);
                  setIsLoading(false);
            } catch (err) {
                  setServerErrors("An error occured, Please try again later")
            }
            finally {
                  setIsLoading(false)
            }
      };


      useEffect(() => {
            if (serverError) {
                  toast.error(serverError)
            }
      }, [serverError])
      return (
            <div className="max-w-[600px] w-full p-6 rounded-lg">
                  <form onSubmit={onSubmit} className="space-y-5">
                        <h1 className="text-4xl font-medium">Sign In</h1>
                        <div className="space-y-1">
                              <label htmlFor="email" className="inline-block">
                                    Email<span className="text-red-600 text-lg">*</span>
                              </label>
                              <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className="w-full border-white/20 px-3 bg-slate-500/10 focus:outline-none border p-2 rounded"
                                    onChange={(e) => { setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value, })); setError((prev) => ({ ...prev, [e.target.name]: false })) }}
                              />
                              {error?.email && (
                                    <span className="text-destructive text-sm">Email is required</span>
                              )}
                        </div>
                        <div className="space-y-1">
                              <label htmlFor="password" className="inline-block">
                                    Password<span className="text-destructive text-lg">*</span>
                              </label>
                              <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full border-white/20 px-3 bg-slate-500/10 focus:outline-none border p-2 rounded"
                                    onChange={(e) => { setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value, })); setError((prev) => ({ ...prev, [e.target.name]: false })) }}
                              />
                              {error?.password && (
                                    <span className="text-destructive text-sm">Password is required</span>
                              )}
                        </div>
                        <button
                              disabled={isLoading}
                              className={`bg-primary text-primary-foreground ${isLoading ? "cursor-not-allowed opacity-90" : "cursor-pointer"
                                    } p-3 rounded-md w-full text-md font-medium`}
                        >
                              {isLoading ? "Loading..." : "Sign In"}
                        </button>
                        <p className="text-sm !text-muted-foreground text-left">Don&apos;t have an account? <Link className="text-blue-500" to="/auth/sign-up">Sign up</Link></p>
                  </form>
            </div>
      );
};

export default Login;
