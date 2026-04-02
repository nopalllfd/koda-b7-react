import { useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';
import Header from '../Counter/components/header';
import Footer from '../Counter/components/Footer';

export const InputForm = () => {
  const [product, setProduct] = useState([]);

  const handleAddProduct = (product) => {
    setProduct((prev) => [...prev, product]);
  };
  return (
    <>
      <Header />
      <div className="px-8 mt-10 h-100">
        <section className="flex flex-row gap-20 items-center justify-center">
          <Form onAddProduct={handleAddProduct} />
          <Table product={product} />
        </section>
      </div>
      <Footer />
    </>
  );
};
