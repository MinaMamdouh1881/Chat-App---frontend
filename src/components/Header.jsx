import { useSelector } from 'react-redux';

const Header = () => {
  const { userData } = useSelector((store) => store.main);
  
  return (
    <div className='p-5 flex-shrink-0 flex items-center gap-x-3 border-b border-gray-400'>
      <div className='w-12 relative'>
        <img src={userData.profilePic} />
        <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
      </div>
      <h1>{userData.fullName}</h1>
    </div>
  );
};

export default Header;
