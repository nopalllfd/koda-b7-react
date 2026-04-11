import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

function Profile() {
  const navigate = useNavigate();
  const { data, logout } = useAuth();
  console.log(data);
  return (
    <header>
      <nav className="flex justify-between bg-blue-400 px-8 py-4">
        <h1 className="text-xl">{data ? data.username : 'Guest'}</h1>
        {data ? (
          <div className="flex gap-4">
            <div className="flex gap-3">
              <button className="border px-6 bg-amber-300 py-2 rounded-xl cursor-pointer " onClick={() => logout()} type="">
                Logout
              </button>
              <button className="border px-6 bg-amber-300 py-2 rounded-xl cursor-pointer " onClick={() => navigate('/auth/profile/edit')} type="">
                Edit Profile
              </button>
            </div>
            <img width={50} height={50} src={data.photoUrl} alt={data.username} />
          </div>
        ) : (
          <button className="border px-6 bg-amber-300 py-2 rounded-xl cursor-pointer " onClick={() => navigate('/auth/login')} type="">
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

export default Profile;
