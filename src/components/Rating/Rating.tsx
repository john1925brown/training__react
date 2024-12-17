import { useState } from 'react';
import { Star } from './Star/Star';

export const Rating = () => {
  const [starsValue, setStarsValue] = useState(3);

  return (
    <div>
      <Star selected={starsValue > 0} setStarsValue={setStarsValue} value={1} />
      <Star selected={starsValue > 1} setStarsValue={setStarsValue} value={2} />
      <Star selected={starsValue > 2} setStarsValue={setStarsValue} value={3} />
      <Star selected={starsValue > 3} setStarsValue={setStarsValue} value={4} />
      <Star selected={starsValue > 4} setStarsValue={setStarsValue} value={5} />
    </div>
  );
};
