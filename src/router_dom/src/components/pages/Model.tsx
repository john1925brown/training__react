import { useNavigate, useParams } from 'react-router-dom';
import { adidasArr } from './Adidas';
import { useEffect } from 'react';
import { pumaArr } from './Puma';
import { PATH } from '../../routes/router';

type ParamsType = { brandName: 'adidas' | 'puma'; modelId: string };

const brandArray = {
  adidas: adidasArr,
  puma: pumaArr,
};

export const Model = () => {
  const { brandName, modelId } = useParams<ParamsType>();
  const navigate = useNavigate();

  const currentItem = brandName
    ? brandArray[brandName].find((item) => item.id === modelId)
    : null;

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
