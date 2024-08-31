import axios from 'axios';
import { url } from '../Store/mainSlice';
// import { url, setIsLogin, setUserData } from '../Store/mainSlice';
import { useQuery } from '@tanstack/react-query';
// import { useDispatch } from 'react-redux';

const useGetUsers = () => {
  const getUsers = async () => {
    const res = await axios.get(`${url}users/`,{withCredentials:true});
    console.log(res);
    return res.data;
    
  };

  const usersState = useQuery({ queryKey: ['users'], queryFn: getUsers });

  return usersState;
};

export default useGetUsers;
