/* eslint-disable react/prop-types */

const UserMessage = ({ createdAt, message, fullName, profilePic }) => {
  return (
    <div className='chat chat-start text-white'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt='' />
        </div>
      </div>
      <div className='chat-header text-white'>{fullName}</div>
      <div className='chat-bubble text-white'>{message}</div>
      <div className='chat-footer opacity-70 text-white'>
        {createdAt.slice(0, 10)}
      </div>
    </div>
  );
};

export default UserMessage;
