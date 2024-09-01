import { useSelector, useDispatch } from 'react-redux';
import { HiUsers } from 'react-icons/hi2';
import { switchSideBar } from '../Store/mainSlice.js';

const Header = () => {
  const { userData } = useSelector((store) => store.main);
  const dispatch = useDispatch();

  return (
    <div className='p-5 flex-shrink-0 flex items-center gap-x-3 border-b border-gray-400 flex-row justify-between'>
      <div className='flex flex-row justify-center items-center gap-x-5'>
        <div className='w-12 relative'>
          <img src={userData.profilePic} />
          <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
        </div>
        <h1>{userData.fullName}</h1>
      </div>
      <button className='md:hidden' onClick={() => dispatch(switchSideBar())}>
        <HiUsers className='text-3xl text-cyan-400' />
      </button>
    </div>
  );
};

export default Header;
