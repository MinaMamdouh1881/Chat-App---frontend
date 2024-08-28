import SearchInput from './SearchInput';
import Users from './Users';
import LogOutButton from './LogOutButton';
const Sidebar = () => {
  return (
      <div
      className='col-span-1 border-r-2 pr-2 max-md:col-span-3'
    >
      <SearchInput />
      <Users />
      <Users />
      <LogOutButton />
    </div>
  );
};

export default Sidebar;
