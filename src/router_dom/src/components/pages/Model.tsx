import { useNavigate, useParams } from 'react-router-dom';
import { adidasArr } from './Adidas';
import { PATH } from '../../AppRouter';
import { useEffect } from 'react';

export const Model = () => {
  const params = useParams();
  const navigate = useNavigate();
  const currentItem = adidasArr.find((item) => item.id === params.modelId);

  useEffect(() => {
    if (!currentItem) {
      navigate(PATH.ERROR404);
    }
  }, [navigate, currentItem]);

  return (
    <div>
      <p>model: {currentItem?.model}</p>
      <p>collection: {currentItem?.collection}</p>
      <div>
        <img
          src={currentItem?.picture}
          alt={currentItem?.model}
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <p>price: {currentItem?.price}</p>
    </div>
  );
};
