import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import {
  setIsLogin,
  setMyData,
  setUserData,
  setOnlineUsers,
} from '../Store/mainSlice';
import { getSocket } from '../socket/socket';

const useLogOut = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const logOut = async () => {
    const res = await axios({
      url: `${url}auth/logout`,
      method: 'POST',
    });
    return res.data;
  };

  const loginOutStatus = useMutation({
    mutationKey: 'Logout',
    mutationFn: logOut,
    onError: (error) => {
      toast.error(error.response.data.error);
    },
    onSuccess: () => {
      localStorage.removeItem('chatAppUser');
      dispatch(setMyData([]));
      dispatch(setOnlineUsers([]));
      dispatch(setUserData(null));
      dispatch(setIsLogin(false));
      queryClient.clear(['Messages']);
      queryClient.clear(['users']);
      getSocket().close();
    },
  });

  return loginOutStatus;
};

export default useLogOut;
