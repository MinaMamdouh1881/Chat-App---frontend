import { FaRegSnowflake } from 'react-icons/fa';
import { PiHandWavingDuotone } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { TiMessages } from 'react-icons/ti';
import { switchSideBar } from '../Store/mainSlice';
import { useDispatch } from 'react-redux';
const EmptyChat = () => {
   const dispatch = useDispatch();
 const {myData}=useSelector(store=>store.main)
  return (
    <div className='flex flex-col gap-10 justify-center items-center h-full'>
      <div className='flex justify-center items-center gap-5 flex-col sm:flex-row'>
        <p className='flex flex-row items-center text-3xl gap-3'>
          Welcome <PiHandWavingDuotone className='text-cyan-400' />
        </p>
        <p className='flex flex-row items-center text-3xl gap-3'>
          {myData.fullName} <FaRegSnowflake className='text-cyan-400' />
        </p>
      </div>
      <h1 className='text-3xl text-center'>Select A Chat To Start Message</h1>
      <button onClick={() => dispatch(switchSideBar())}>
        <TiMessages size={50} className='text-cyan-400' />
      </button>
    </div>
  );
};

export default EmptyChat;
