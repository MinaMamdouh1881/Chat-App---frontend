import useGetUsers from '../Custom Hooks/useGetUsers';
import toast from 'react-hot-toast';
import { useDispatch,useSelector } from 'react-redux';
import { setUserData, switchSideBar } from '../Store/mainSlice';
const Users = () => {
  const dispatch = useDispatch();
  const {userData}=useSelector(store=>store.main)
  const usersState = useGetUsers();
  if (usersState.isLoading)
    return <span className='loading loading-spinner loading-lg'></span>;
  if (usersState.isError) return toast.error('Error Happened');
  return (
    <div className='grid grid-cols-1 gap-y-3 overflow-y-auto flex-grow'>
      {usersState?.data?.map((el) => {
          return (
            <div
              key={el?._id}
              className={`col-span-1 flex flex-row items-center justify-between gap-x-5 duration-300 hover:bg-cyan-400 py-2 px-5 cursor-pointer md:justify-start ${
                el._id == userData?._id ? 'bg-cyan-400 rounded-3xl' : ''
              }`}
              onClick={() => {
                dispatch(setUserData(el));
                dispatch(switchSideBar());
              }}
            >
              <div className='relative flex justify-start items-start w-12'>
                <img src={el?.profilePic} />
                <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
              </div>
              <h1 className='text-base md:text-sm text-white font-bold'>
                {el?.fullName}
              </h1>
            </div>
          );
        
      })}
    </div>
  );
};

export default Users;
