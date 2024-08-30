import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setIsLogin, setUserData } from '../Store/mainSlice';

const useSignUp = () => {
  const dispatch = useDispatch();
  
  const signUp = async (data) => {
    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords Don't Match");
    }
    const res = await axios({
      url: `${url}auth/signup`,
      method: 'POST',
      data,
      withCredentials: true,
    });
    return res;
  };

  const signUpStatus = useMutation({
    mutationKey: 'signUp',
    mutationFn: signUp,
    onError: (error) => {
      toast.error(error?.response?.data?.error || error.message);
    },
    onSuccess: (data) => {
      localStorage.setItem('chatAppUser', JSON.stringify(data));
      dispatch(setUserData(data));
      dispatch(setIsLogin(true));
    },
  });

  return signUpStatus;
};

export default useSignUp;
