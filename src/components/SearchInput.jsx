import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';
const SearchInput = () => {
  const formRef = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
    formRef.current.reset();
  };
  return (
    <form
      className='flex flex-row gap-x-3 max-md:justify-center max-md:pt-5'
      onSubmit={formHandler}
      ref={formRef}
    >
      <div>
        <input
          type='search'
          placeholder='Search here'
          className='input input-bordered w-full rounded-full'
          name='query'
        />
      </div>
      <div>
        <button className='bg-cyan-400 rounded-full size-12 flex justify-center items-center duration-300 hover:bg-slate-800'>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
