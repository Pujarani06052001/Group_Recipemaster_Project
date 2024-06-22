import React, { useEffect } from 'react';
import './ImageGrid.css';

const ImageGrid = ({ data, loading }) => {
  useEffect(() => {
    console.log('image call', data);
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="loader">Loading...</div> // Simple loader text. You can replace it with a spinner or other loading animation.
      ) : (
        data && data.length > 0 ? (
          <div className="image-grid">
            {data.map((recipe) => (
              <img key={recipe.recipe_id} src={recipe.image_url} alt={recipe.title} />
            ))}
          </div>
        ) : (
          <div className="image-grid">
          <img src="/images/img1.png" alt="Image 1" />
          <img src="/images/img17.jpg" alt="Image 2" />
          <img src="/images/img11.jpeg" alt="Image 2" />
          <img src="/images/img10.webp" alt="Image 2" />
          <img src="/images/img9.webp" alt="Image 2" />
          <img src="/images/img16.jpg" alt="Image 2" />
          <img src="/images/img3.jpg" alt="Image 2" />
          <img src="/images/img15.webp" alt="Image 2" />
          <img src="/images/img4.jpg" alt="Image 2" />
          <img src="/images/img12.jpg" alt="Image 2" />
          <img src="/images/img14.jpg" alt="Image 2" />
          <img src="/images/img13.jpg" alt="Image 1" />
        </div>

        )
      )}
    </>
  );
};

export default ImageGrid;
