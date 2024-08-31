import { BiLogOut } from 'react-icons/bi';
import useLogOut from '../Custom Hooks/useLogout';
const LogOutButton = () => {
  const logOutStatus = useLogOut();
  return (
    <button className='pt-5 flex-shrink-0' onClick={() => logOutStatus.mutate()}>
      {/* <button className='mt-6 sticky bottom-0 row-span-1' onClick={() => logOutStatus.mutate()} > */}
      {logOutStatus.isPending ? (
        <span className='loading loading-spinner loading-md'></span>
      ) : (
        <BiLogOut size={30} />
      )}
    </button>
  );
};

export default LogOutButton;
