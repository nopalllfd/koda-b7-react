import { useState } from 'react';
import Header from '../Counter/components/header';
import Review from './Review';
import { storeData } from './data';
import { Card } from './Card';
import { getData } from './data';
import Footer from '../Counter/components/Footer';

function Home() {
  const get = getData();
  const [data, setData] = useState(get);

  const onAddData = (dataSent) => {
    setData(dataSent);
    storeData(dataSent);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col p-0 m-0">
        <Header />
        <main className="flex-1 flex flex-col items-center pt-10 px-4 gap-8">
          <Review onAddData={onAddData} />
          <Card datas={data} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
