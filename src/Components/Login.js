import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({email:'', password:''});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if(!email){
      errors.email = "Email is required";
    }
    if(!password){
      errors.password = "Password is required";
    }
    return errors
  };

  const handleLogin = async (e) => {
    e.preventDefault(); //prevent the form from refreshing the page 
    const errors = validateForm();
    setValidationErrors(errors);
    if(Object.keys(errors).length === 0){
      await fetch(`http://localhost:8080/user?email=${email}&password=${password}`)
      .then((response) => {
        return response.json();
      }).then((response) => {
        if(Object.keys(response).length === 0){
          toast.error('Invalid email or password');
        }else {
          if(response[0].password === password){
            toast.success('Login Successful');
            navigate('/')
          }else{
            toast.error('Invalid email or password');
          }
        }
      }).catch((error) => {
        toast.error('Error Occured:' +error.message);
        setErrorMessage('An error occured');
      });
    }
  };

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleLogin}>
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
                <span className='text-red-500'>{validationErrors.email}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link  to={"/"} className="font-semibold text-red-600 hover:text-red-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
                <span className='text-red-500'>{validationErrors.password}</span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link  to={"/signup"} className="font-semibold leading-6 text-red-600 hover:text-red-500">
              Sign Up 
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
