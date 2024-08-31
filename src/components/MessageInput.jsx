import { IoMdSend } from 'react-icons/io';
import { useRef } from 'react';
const MessageInput = () => {
  const formRef = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
    formRef.current.reset();
  };
  return (
    <form
      className=' row-span-1  flex flex-row'
      ref={formRef}
      onSubmit={formHandler}
    >
      <div className='relative w-full'>
        <input
          type='text'
          placeholder='Enter Your Message'
          className='input input-bordered w-full pr-10'
          name='message'
        />
        <button className=' absolute right-0 top-[50%] -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>
          <IoMdSend size={25} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
