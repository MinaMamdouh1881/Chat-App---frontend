import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setIsLogin, setMyData } from '../Store/mainSlice';

const useSignUp = () => {
  const dispatch = useDispatch();

  const signUp = async (data) => {
    if (!data.fullName) throw new Error('Please Enter Your Full Name');
    if (!data.userName) throw new Error('Please Enter Your User Name');
    if (!data.password) throw new Error('Please Enter Your Password');
    if (!data.confirmPassword)
      throw new Error('Please Enter Your Confirm Password');
    if (!data.gender) throw new Error('Please Enter Your Gender');

    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords Don't Match");
    }
    const res = await axios({
      url: `${url}auth/signup`,
      method: 'POST',
      data,
      withCredentials: true,
    });
    return res.data;
  };

  const signUpStatus = useMutation({
    mutationKey: 'signUp',
    mutationFn: signUp,
    onError: (error) => {
      toast.error(error?.response?.data?.error || error.message);
    },
    onSuccess: (data) => {
      localStorage.setItem('chatAppUser', JSON.stringify(data));
      dispatch(setMyData(data));
      dispatch(setIsLogin(true));
    },
  });

  return signUpStatus;
};

export default useSignUp;
