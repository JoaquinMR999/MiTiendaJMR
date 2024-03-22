import { useContext } from 'react';
import { ProductsContext} from '../../context/ProductContext';

const MoreDetails = () => {

  const { getProductDetails } = useContext(ProductsContext);

 
  const handleClick = async () => {
    try {
      const productDetails = await getProductDetails(id);
      console.log('Detalles del producto:', productDetails);
    } catch (error) {
      console.error('Error al obtener los detalles del producto:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Obtener detalles del producto</button>
    </div>
  );
};

export default MoreDetails;