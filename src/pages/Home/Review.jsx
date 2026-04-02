import { getData } from './data';

function Review({ onAddData }) {
  const handleSubmit = (e) => {
    console.log(getData());
    let prevData = getData();
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      rate: e.target.review.value,
      msg: e.target.msg.value,
    };

    prevData.push(data);
    onAddData(prevData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="max-w-md p-6 bg-amber-50 border border-amber-200 rounded-lg"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-800"
          >
            Nama :
          </label>
          <input
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-800">Review :</label>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <input
                id="two"
                value={2}
                name="review"
                type="radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="two"
                className="text-sm text-gray-700"
              >
                2
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <input
                id="five"
                value={5}
                name="review"
                type="radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="five"
                className="text-sm text-gray-700"
              >
                5
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <input
                id="eight"
                value={8}
                name="review"
                type="radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="eight"
                className="text-sm text-gray-700"
              >
                8
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <textarea
            name="msg"
            id="msg"
            rows="4"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-none"
            placeholder="Masukkan review anda"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white font-semibold py-2 rounded-md text-sm"
          >
            Masukkan review
          </button>
        </div>
      </div>
    </form>
  );
}

export default Review;
