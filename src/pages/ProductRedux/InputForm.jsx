import { Form } from './component/Form';
import { Table } from './component/Table';
import Header from '../Counter/components/header';
import Footer from '../Counter/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, updateProduct } from './redux/slice/productSlice';
import { useState } from 'react';
export const InputFormRedux = () => {
  const product = useSelector((state) => state.products);

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    id: null,
    name: '',
    qty: 0,
    category: '',
  });

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    console.log(form);
    dispatch(
      addProduct({
        ...form,
        id: Date.now(),
      }),
    );

    setForm({ id: null, name: '', qty: 0, category: '' });
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleEditProduct = (product) => {
    setEditId(product.id);
    setForm(product);
  };

  const handleSaveUpdate = () => {
    dispatch(updateProduct(form));
    setEditId(null);
    setForm({ id: null, name: '', qty: 0, category: '' });
  };

  return (
    <>
      <Header />
      <div className="px-8 mt-10 h-100">
        <section className="flex flex-row gap-20 items-center justify-center">
          <Form form={form} setForm={setForm} onAdd={handleAddProduct} onSave={handleSaveUpdate} editId={editId} />

          <Table product={product} onUpdateProduct={handleEditProduct} onRemoveProduct={handleRemoveProduct} />
        </section>
      </div>
      <Footer />
    </>
  );
};
