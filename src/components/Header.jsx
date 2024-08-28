const Header = () => {
  return (
    <div className='p-[10px] w-[100%] rounded-b-lg shadow-md bg-gray-400 z-[10] sticky top-0'>
      <div className='flex flex-row items-center gap-x-5'>
        <div className='col-span-1 relative flex justify-start items-start w-12'>
          <img src='https://avatar.iran.liara.run/public/girl?username=Mina' />
          <span className='bg-green-500 size-3 rounded-full absolute top-0 right-0'></span>
        </div>
        <h1 className='col-span-2 text-white font-bold'>Mina Mamdouh</h1>
      </div>
    </div>
  );
};

export default Header;
