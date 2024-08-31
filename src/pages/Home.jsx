import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';
const Home = () => {
  return (
    <div className='w-full p-6 max-md:p-0 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex justify-center'>
      <div className='flex flex-row justify-center gap-x-5 text-blue-200 w-[100%]'>
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
