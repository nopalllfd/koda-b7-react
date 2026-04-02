export const Card = ({ datas }) => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-4 gap-4">
      {datas.length ? (
        datas.map((review, idx) => (
          <div
            key={idx}
            className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <span className="font-semibold text-sm text-gray-800 break-all">{review.name}</span>
              <span className="text-xs font-semibold px-2 py-1 bg-amber-200 text-amber-900 rounded whitespace-nowrap ml-2">Rate: {review.rate}</span>
            </div>
            <p className="text-sm text-gray-700">{review.msg}</p>
          </div>
        ))
      ) : (
        <div className="col-span-4 border border-amber-200 rounded-lg p-8 bg-amber-50 flex justify-center items-center">
          <span className="text-sm text-gray-500">Kosong</span>
        </div>
      )}
    </div>
  );
};
