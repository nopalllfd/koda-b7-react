import { useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';

export const InputForm = () => {
  const [product, setProduct] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct((prev) => [
      ...prev,
      {
        name: e.target.name.value,
        sum: e.target.sum.value,
        category: e.target.category.value,
      },
    ]);
  };
  return (
    <section className="flex flex-row gap-20 items-center justify-center">
      <Form onAddProduct={handleSubmit} />
      <Table product={product} />
    </section>
  );
};
