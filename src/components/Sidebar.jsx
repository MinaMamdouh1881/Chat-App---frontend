import SearchInput from './SearchInput';
import Users from './Users';
import LogOutButton from './LogOutButton';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { sideBar } = useSelector((store) => store.main);
  return (
    <div
      className={`md:basis-1/3 md:flex flex-col h-[100vh] md:h-[80vh] max-md:flex-1 ${
        sideBar ? 'flex' : 'hidden'
      }`}
    >
      <SearchInput />
      <Users />
      <LogOutButton />
    </div>
  );
};

export default Sidebar;
