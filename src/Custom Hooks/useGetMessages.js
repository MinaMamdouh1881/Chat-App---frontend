import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getSocket } from '../socket/socket';
import { useQueryClient } from '@tanstack/react-query';
import notificationSound from '../assets/notification.mp3'

const useGetMessages = () => {
  const queryClient = useQueryClient();
  const { userData } = useSelector((store) => store.main);
  const socket = getSocket();
  socket.on('newMessage', (senderId, newMessage) => {
    queryClient.setQueryData(['Messages', senderId], (oldData) => {
      const existingMessage = oldData.find((msg) => msg._id === newMessage._id);
      if(existingMessage){
        return oldData
      }else{
        const sound = new Audio(notificationSound);
        sound.play()
        return [...oldData, newMessage]
      }
    });
  });

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
