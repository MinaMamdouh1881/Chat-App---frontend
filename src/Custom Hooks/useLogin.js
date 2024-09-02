import axios from 'axios';
import { url, setIsLogin, setMyData, setOnlineUsers } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { initializeSocket } from '../socket/socket';

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (data) => {
    if (!data.userName) throw new Error('Please Enter Your User Name');
    if (!data.password) throw new Error('Please Enter Your Password');
    const res = await axios({
      url: `${url}auth/Login`,
      method: 'POST',
      data,
      withCredentials: true,
    });
    return res.data;
  };

  const loginStatus = useMutation({
    mutationKey: 'Login',
    mutationFn: login,
    onError: (error) => {
      toast.error(error?.response?.data?.error || error.message);
    },
    onSuccess: async (data) => {
      localStorage.setItem('chatAppUser', JSON.stringify(data));
      dispatch(setMyData(data));
      dispatch(setIsLogin(true));
      const socket = initializeSocket(data._id);
      socket.on('getOnlineUsers', (users) => dispatch(setOnlineUsers(users)));
    },
  });

  return loginStatus;
};

export default useLogin;
