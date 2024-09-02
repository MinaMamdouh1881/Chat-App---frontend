import useSearchForUsers from '../Custom Hooks/useSearchForUsers'
const SearchInput = () => {
  const searchStatus = useSearchForUsers();
  const changeHandler = (e) => {
    searchStatus.mutate({"query":e.target.value});
  };
  return (
    <form
      className='p-5 flex-shrink-0 flex gap-x-3 border-b border-gray-400'
      onSubmit={(e)=>e.preventDefault()}
    >
      <div className='w-full'>
        <input
          type='search'
          placeholder='Search here'
          className='input input-bordered w-full rounded-full'
          name='query'
          onChange={changeHandler}
        />
      </div>
      <div>
      </div>
    </form>
  );
};

export default SearchInput;
