import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSurvey } from '../redux/slices/surveySlice';

function ListSurvey(props) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeSurvey({ id }));
  };
  return (
    <section className="flex flex-col justify-center items-center gap-5 p-4">
      <table className="table-auto w-full max-w-6xl border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border-b">Nama</th>
            <th className="px-4 py-2 border-b">Umur</th>
            <th className="px-4 py-2 border-b">Jenis Kelamin</th>
            <th className="px-4 py-2 border-b">Perokok</th>
            <th className="px-4 py-2 border-b">Roko</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.surveys.map((survey) => (
            <tr key={survey.id} className={`border-b hover:bg-gray-50  ${survey.isSmoker === 'true' ? 'bg-red-400 text-white' : 'bg-blue-400'}`}>
              <td className="px-4 py-2">{survey.name}</td>
              <td className="px-4 py-2">{survey.age}</td>
              <td className="px-4 py-2">{survey.gender}</td>
              <td className="px-4 py-2 ">{survey.isSmoker === 'true' ? 'Ya' : 'Bukan'}</td>
              <td className="px-4 py-2">{survey.brands && survey.brands.length > 0 ? survey.brands.join(', ') : '-'}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => {
                    handleClick(survey.id);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListSurvey;
