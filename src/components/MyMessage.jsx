/* eslint-disable react/prop-types */

const MyMessage = ({ createdAt, message, fullName, profilePic }) => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt='' />
        </div>
      </div>
      <div className='chat-header text-white'>{fullName}</div>
      <div className='chat-bubble bg-blue-500 text-white'>{message}</div>
      <div className='chat-footer opacity-70 text-white'>
        {createdAt.slice(0, 10)}
      </div>
    </div>
  );
};

export default MyMessage;
