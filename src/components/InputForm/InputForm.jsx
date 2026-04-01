import { useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';

export const InputForm = () => {
  const [product, setProduct] = useState([]);

  const handleAddProduct = (product) => {
    setProduct((prev) => [...prev, product]);
  };
  return (
    <section className="flex flex-row gap-20 items-center justify-center">
      <Form onAddProduct={handleAddProduct} />
      <Table product={product} />
    </section>
  );
};
