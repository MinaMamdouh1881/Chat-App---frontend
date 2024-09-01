import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const useSendMassage = () => {
  const queryClient = useQueryClient();
  const { userData } = useSelector((store) => store.main);

  const sendMessage = async (data) => {
   if(!data.message) throw new Error("Please Write A Massage To Send")
    const res = await axios({
      url: `${url}message/send/${userData._id}`,
      method: 'POST',
      data,
      withCredentials: true,
    });
    return res.data;
  };

  const sendMassageStatus = useMutation({
    mutationKey: 'sendMessage',
    mutationFn: sendMessage,
    onError: (error) => {
      toast.error(error?.response?.data?.error || error.message);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['Messages', userData._id], (oldData) => {
        return [...oldData, data.newMessage];
      });
      queryClient.invalidateQueries('users');
    },
  });

  return sendMassageStatus;
};

export default useSendMassage;
