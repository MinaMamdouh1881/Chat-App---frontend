import { BsEmojiSmile } from 'react-icons/bs';
const Users = () => {
  return (
    <div className='border-t border-gray-400 mt-5 pt-5 grid grid-cols-1 gap-y-3'>
      <div className='col-span-1 flex flex-row items-center justify-between max-md:justify-center max-md:gap-x-10 duration-300 hover:bg-cyan-400 py-2'>
        <div className='col-span-1 relative flex justify-start items-start w-12'>
          <img src='https://avatar.iran.liara.run/public/girl?username=Mina' />
          <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
        </div>
        <h1 className='col-span-2 text-white font-bold'>Mina Mamdouh</h1>
        <div className='col-span-1'>
          <BsEmojiSmile />
        </div>
      </div>
      <div className='col-span-1 flex flex-row items-center justify-between max-md:justify-center max-md:gap-x-10 duration-300 hover:bg-cyan-400 py-2'>
        <div className='col-span-1 relative flex justify-start items-start w-12'>
          <img src='https://avatar.iran.liara.run/public/girl?username=Mina' />
          <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
        </div>
        <h1 className='col-span-2 text-white font-bold'>Mina Mamdouh</h1>
        <div className='col-span-1'>
          <BsEmojiSmile />
        </div>
      </div>
      <div className='col-span-1 flex flex-row items-center justify-between max-md:justify-center max-md:gap-x-10 duration-300 hover:bg-cyan-400 py-2'>
        <div className='col-span-1 relative flex justify-start items-start w-12'>
          <img src='https://avatar.iran.liara.run/public/girl?username=Mina' />
          <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
        </div>
        <h1 className='col-span-2 text-white font-bold'>Mina Mamdouh</h1>
        <div className='col-span-1'>
          <BsEmojiSmile />
        </div>
      </div>
    </div>
  );
};

export default Users;
