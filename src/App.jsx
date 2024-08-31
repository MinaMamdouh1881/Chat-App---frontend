import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/SignUp';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
function App() {
  const { isLogin } = useSelector((store) => store.main);
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={isLogin ? <Home /> : <Navigate to={'/login'} />} />
        <Route
          path='/login'
          element={isLogin ? <Navigate to={'/'} /> : <Login />}
        />
        <Route
          path='/signup'
          element={isLogin ? <Navigate to={'/'} /> : <SignUp />}
        />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
