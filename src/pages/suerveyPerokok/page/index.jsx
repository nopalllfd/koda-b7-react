import ListSurvey from '../component/ListSurvey';
import { useDispatch, useSelector } from 'react-redux';
import { addSurvey } from '../redux/slices/surveySlice';

function SurveyPerokok() {
  const surveys = useSelector((state) => state.survey.surveys);
  const dispatch = useDispatch();
  console.log(surveys);

  const brands = ['Gudang-garam', 'Sampoerna', 'Dunhill'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    dispatch(
      addSurvey({
        id: Date.now(),
        name: formData.get('name'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        isSmoker: formData.get('isSmoker'),
        brands: formData.getAll('brands'),
      }),
    );
  };
  return (
    <section className="flex items-center justify-center pb-10">
      <div className="p-6 max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center">Form Survey Perokok</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nama :</label>
            <input id="name" name="name" type="text" placeholder="Masukkan Nama..." className="border rounded px-3 py-2" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="age">Umur :</label>
            <input id="age" name="age" type="number" placeholder="Masukkan Umur..." className="border rounded px-3 py-2" />
          </div>

          <div className="flex flex-col gap-2">
            <span>Jenis kelamin :</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="M" value="Laki-laki" />
                <label htmlFor="M">Laki-laki</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="W" value="Perempuan" />
                <label htmlFor="W">Perempuan</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="isPerokok">Apakah anda seorang perokok?</label>
            <select name="isSmoker" id="isPerokok" className="border rounded px-3 py-2">
              <option disabled selected>
                Pilih yang sesuai dengan anda
              </option>
              <option value={true}>Ya</option>
              <option value={false}>Tidak</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span>Jika iya, brand rokok mana yang dipakai?</span>
            <div className="flex flex-col gap-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <input type="checkbox" id={brand} name="brands" value={brand} />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
      <ListSurvey surveys={surveys} />
    </section>
  );
}

export default SurveyPerokok;
