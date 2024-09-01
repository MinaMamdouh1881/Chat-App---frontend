import axios from 'axios';
import { url } from '../Store/mainSlice';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

const useSearchForUsers = () => {
  const queryClient = useQueryClient();
  const getSearchForUsers = async (data) => {
    if (!data.query || data.query == '' || data.query == ' ') {
      queryClient.invalidateQueries('users');
      throw new Error('.');
    }
    const res = await axios.post(`${url}users/search`, data, {
      withCredentials: true,
    });

    return res.data;
  };

  const searchState = useMutation({
    mutationKey: 'getSearchForUsers',
    mutationFn: getSearchForUsers,
    onError: (error) => {
      if (error.message) return;
      toast.error(error?.response?.data?.error);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['users'], () => data);
    },
  });

  return searchState;
};

export default useSearchForUsers;
