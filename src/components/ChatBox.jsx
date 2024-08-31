import Header from './Header';
import Messages from './Messages';
import MessageInput from './MessageInput';
import EmptyChat from './EmptyChat';
import { useSelector } from 'react-redux';

const ChatBox = () => {
  const { sideBar, userData } = useSelector((store) => store.main);
  return (
    <div
      className={`basis-1/3 md:flex flex-col h-[100vh] md:h-[80vh] grow ${
        sideBar ? 'hidden' : 'flex'
      }`}
    >
      {userData === null ? (
        <EmptyChat />
      ) : (
        <>
          <Header />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ChatBox;
