import { useRef } from 'react';
import useSignUp from '../Custom Hooks/useSignUp';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const formRef = useRef(null);
  const signUpStatus = useSignUp();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signUpStatus.mutate(Object.fromEntries(formData));
    signUpStatus.isSuccess && formRef.current.reset();
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-blue-200'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center mb-4'>
          Sign Up <span className='text-blue-400'>Chat App</span>
        </h1>
        <form
          className='flex flex-col gap-y-3'
          onSubmit={formHandler}
          ref={formRef}
        >
          <div className='grid grid-cols-1 gap-y-2'>
            <label htmlFor='fullName' className='col-span-1 text-xl'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Enter Your Full Name'
              className='input input-bordered w-full col-span-1 focus:outline-none'
            />
          </div>
          <div className='grid grid-cols-1 gap-y-2'>
            <label htmlFor='userName' className='col-span-1 text-xl'>
              User Name
            </label>
            <input
              type='text'
              id='userName'
              name='userName'
              placeholder='Enter Your User Name'
              className=' input input-bordered w-full col-span-1 focus:outline-none'
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
              placeholder='Enter Your Password'
              className='input input-bordered w-full col-span-1 focus:outline-none'
            />
          </div>
          <div className='grid grid-cols-1 gap-y-2'>
            <label htmlFor='password' className='col-span-1 text-xl'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Enter Your Confirm Password'
              className='input input-bordered w-full col-span-1 focus:outline-none'
            />
          </div>
          <div className='grid grid-cols-3 gap-y-2 justify-center items-center'>
            <label className='col-span-1'>Gender</label>
            <div className='col-span-2 flex flex-col gap-y-2'>
              <div className='flex flex-row justify-between mx-6'>
                <label htmlFor='male'>Male</label>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  id='male'
                  className='radio'
                />
              </div>
              <div className='flex flex-row justify-between mx-6'>
                <label htmlFor='female'>Female</label>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  id='female'
                  className='radio'
                />
              </div>
            </div>
          </div>
          <button
            type='button'
            className='text-left hover:underline hover:text-blue-400'
            onClick={() => navigate('/login')}
          >
            Already Have an Account ?
          </button>
          <button className='btn btn-block btn-small'>
            {signUpStatus.isPending ? (
              <span className='loading loading-spinner loading-md'></span>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
