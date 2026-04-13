import { Form } from './component/Form';
import { Table } from './component/Table';
import Header from '../Counter/components/header';
import Footer from '../Counter/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, setSelectedProduct, updateProduct } from './redux/slice/productSlice';

export const InputFormRedux = () => {
  const product = useSelector((state) => state.products);
  const selectedProduct = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        ...selectedProduct,
        id: Date.now(),
      }),
    );
    dispatch(
      setSelectedProduct({
        id: null,
        name: '',
        qty: 0,
        category: '',
      }),
    );
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ id }));
  };

  const handleEditProduct = (product) => {
    dispatch(
      setSelectedProduct({
        ...product,
      }),
    );
  };

  const handleSaveUpdate = () => {
    dispatch(updateProduct(selectedProduct));
    dispatch(
      setSelectedProduct({
        id: null,
        name: '',
        qty: 0,
        category: '',
      }),
    );
  };

  return (
    <>
      <Header />
      <div className="px-8 mt-10 h-100">
        <section className="flex flex-row gap-20 items-center justify-center">
          <Form onAdd={handleAddProduct} onSave={handleSaveUpdate} />
          <Table product={product} onUpdateProduct={handleEditProduct} onRemoveProduct={handleRemoveProduct} />
        </section>
      </div>
      <Footer />
    </>
  );
};
