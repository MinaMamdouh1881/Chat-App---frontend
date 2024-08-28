import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto text-blue-200 md:h-[80%] h-[100%]'>
      <div className='w-full p-6 max-md:p-0 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 grid grid-cols-3 overflow-hidden'>
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
