import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';
const ChatBox = () => {
  return (
    <div className='col-span-2 max-md:col-span-3 overflow-auto relative flex flex-col justify-between'>
      <Header />
      <Messages />
      <MessageInput/>
    </div>
  );
};

export default ChatBox;
