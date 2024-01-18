import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {

  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (name.trim().length < 3 || name.trim().length > 50) {
      errors.name = "Name must be between 3 and 50 characters";
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = "Mobile Number must be 10 digits";
    }
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      errors.email = 'Enter a valid email address';
    }
    if (password.trim().length < 6 || password.trim().length > 50) {
      errors.password = "Password must be between 6 and 50 characters";
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      let userObj = { name, mobileNumber, email, password };

      fetch("http://localhost:8080/user", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userObj),
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          toast.error("SignUp Failed");
          setRegistrationStatus("failed");
        }
      }).then((data) => {
        if (data) {
          toast.success("SignUp Successful");
          setRegistrationStatus("success");
          //const { id } = data;
        }
      }).catch((error) => {
        toast.error("SignUp Failed");
      })
    }
  };

  useEffect(() => {
    if (registrationStatus === "success") {
      navigate("/login");
    }
  }, [registrationStatus, navigate]);




  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="h-10 mx-auto w-auto"
            src="/images/TasteBudLogo.png"
            alt="TasteBud"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  value={name}
                  name="name"
                  type="text"
                  onChange={e => setName(e.target.value)}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                <span className='text-red-500'>{validationErrors.name}</span>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  value={mobileNumber}
                  name="phone"
                  type="tel"
                  onChange={e => setMobileNumber(e.target.value)}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                <span className='text-red-500'>{validationErrors.mobileNumber}</span>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                <span className="text-red-500">{validationErrors.email}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                />
                <span className="text-red-500">{validationErrors.password}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center text-sm">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor="terms">
                  I agree to TasteBud's
                  <Link to={"/"} className="font-semibold p-1 text-red-600 hover:text-red-500">
                    Terms of Service
                  </Link>,
                  <Link to={"/"} className="font-semibold p-1 text-red-600 hover:text-red-500">
                    Privacy Policy
                  </Link>and
                  <Link to={"/"} className="font-semibold p-1 text-red-600 hover:text-red-500">
                    Content Policies
                  </Link>

                </label>
              </div>
              <button
                type="submit"
                disabled={!checked}
                className={`flex w-full justify-center rounded-md bg-red-600 mt-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${!checked ? 'bg-gray-500' : 'bg-red-500'}`}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to={"/login"} className="font-semibold leading-6 text-red-600 hover:text-red-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
