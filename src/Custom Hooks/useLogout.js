import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setIsLogin, setMyData,setUserData } from '../Store/mainSlice';
const useLogOut = () => {
  const dispatch = useDispatch();

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
      dispatch(setUserData(null));
      dispatch(setIsLogin(false));
    },
  });

  return loginOutStatus;
};

export default useLogOut;
