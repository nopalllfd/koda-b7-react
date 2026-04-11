import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function EditProfile() {
  const { data, editProfile } = useAuth();
  const [newUsername, setNewUsername] = useState(data.username);
  const [newImage, setNewImage] = useState(data.photoUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('p');
    console.log({ username: newUsername, photoUrl: newImage });
    editProfile({ username: newUsername, photoUrl: newImage });
  };

  return (
    <section className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-100">
        <img className="w-28 h-28 rounded-full object-cover border-4 border-blue-50 shadow-sm" src={data.photoUrl} alt="" />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">{data.username}</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
          <input
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-full px-4 py-2.5 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            type="text"
            value={newUsername}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Photo URL</label>
          <input
            onChange={(e) => setNewImage(e.target.value)}
            className="w-full px-4 py-2.5 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            type="text"
            value={newImage}
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update Profile
        </button>
      </form>
    </section>
  );
}

export default EditProfile;
