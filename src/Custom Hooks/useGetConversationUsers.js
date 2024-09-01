import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useQuery } from '@tanstack/react-query';

const useGetConversationUsers = () => {
  const getUsers = async () => {
    const res = await axios.get(`${url}users/conversation`, {
      withCredentials: true,
    });
    return res.data.data;
  };

  const usersState = useQuery({ queryKey: ['users'], queryFn: getUsers });

  return usersState;
};

export default useGetConversationUsers;
