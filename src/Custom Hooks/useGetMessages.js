import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetMessages = () => {
  const { userData } = useSelector((store) => store.main);
  const getMessages = async () => {
    const res = await axios.get(`${url}message/${userData._id}`, {
      withCredentials: true,
    });
    return res.data;
  };

  const getMessagesStatus = useQuery({
    queryKey: ['Messages', userData._id],
    queryFn: getMessages,
  });

  return getMessagesStatus;
};

export default useGetMessages;
