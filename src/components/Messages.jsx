import useGetMessages from '../Custom Hooks/useGetMessages';
import { useSelector } from 'react-redux';
import MyMessage from './MyMessage';
import UserMessage from './UserMessage';
import { useRef, useEffect } from 'react';

const Messages = () => {
  const { userData, myData } = useSelector((store) => store.main);
  const getMessagesStatus = useGetMessages();
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [getMessagesStatus.data]);

  if (getMessagesStatus.isLoading) {
    return (
      <div className='flex justify-center items-center h-full px-5 grow overflow-y-auto'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  if (getMessagesStatus.isError) {
    return (
      <div className='flex justify-center items-center h-full px-5 grow overflow-y-auto'>
        <h1>Error Happened</h1>
      </div>
    );
  }

  if (!getMessagesStatus.data.length) {
    return (
      <div className='flex justify-center items-center h-full px-5 grow overflow-y-auto'>
        <h1 className='text-white text-3xl'>There Is No Messages To See</h1>
      </div>
    );
  } else {
    return (
      <div className='px-5 grow overflow-y-auto' ref={messagesRef}>
        {getMessagesStatus.data.map((message) => {
          if (message.senderId === myData._id) {
            return (
              <MyMessage
                key={message._id}
                fullName={myData.fullName}
                profilePic={myData.profilePic}
                createdAt={message.createdAt}
                message={message.message}
              />
            );
          } else {
            return (
              <UserMessage
                key={message._id}
                fullName={userData.fullName}
                profilePic={userData.profilePic}
                createdAt={message.createdAt}
                message={message.message}
              />
            );
          }
        })}
      </div>
    );
  }
};

export default Messages;
