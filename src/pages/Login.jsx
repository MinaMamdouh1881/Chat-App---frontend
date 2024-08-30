import { useRef } from 'react';
import useLogin from '../Custom Hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const formRef = useRef(null);
  const loginStatus = useLogin();
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    loginStatus.mutate(Object.fromEntries(formData));
    loginStatus.isSuccess && formRef.current.reset();
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-blue-200'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-4'>
          Login <span className='text-blue-400'>Chat App</span>
        </h1>
        <form
          className='flex flex-col gap-y-3'
          onSubmit={formHandler}
          ref={formRef}
        >
          <div className='grid grid-cols-1 gap-y-2'>
            <label htmlFor='userName' className='col-span-1 text-xl'>
              User Name
            </label>
            <input
              type='text'
              id='userName'
              name='userName'
              placeholder='Enter User Name'
              className=' input input-bordered w-full col-span-1 focus:outline-none'
              required
            />
          </div>
          <div className='grid grid-cols-1 gap-y-2'>
            <label htmlFor='password' className='col-span-1 text-xl'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter Password'
              className='input input-bordered w-full col-span-1 focus:outline-none'
              required
            />
          </div>
          <button
            type='button'
            className='text-left hover:underline hover:text-blue-400'
            onClick={() => navigate('/signup')}
          >
            {"Don't"} Have an Account ?
          </button>
          <button className='btn btn-block btn-small'>
            {loginStatus.isPending ? (
              <span className='loading loading-spinner loading-md'></span>
            ) : (
              'LogIn'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
