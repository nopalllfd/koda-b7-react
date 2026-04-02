import { useState } from 'react';
import Header from '../Counter/components/header';
import Review from './Review';
import { storeData } from './data';
import { Table } from './Table';
import { getData } from './data';

function Home() {
  const get = getData();
  const [data, setData] = useState(get);

  const onAddData = (dataSent) => {
    setData(dataSent);
    storeData(dataSent);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-10 px-4 gap-8">
        <Review onAddData={onAddData} />
        <Table datas={data} />
      </main>
    </div>
  );
}

export default Home;
