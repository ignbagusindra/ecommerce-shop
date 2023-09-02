import React, { useContext } from 'react';

// import Params
import { useParams } from 'react-router-dom';

// import Cart Context
import { CartContext } from '../contexts/CartContext';
// import Product Context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product base on id
  const product = products.find(item => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  console.log(product);
  // de-structure products
  const { category, description, image, price, title,  } = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-md' src={image} alt="" />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-2-[450px] mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
             USD {price}
            </div>
            <p className='text-gray-500 mb-5 font-semibold'>{category}</p>
            <p className='mb-8'>{description}</p>
            <button 
            onClick={() => addToCart(product, product.id)}
            className='bg-primary py-4 px-8 text-white'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
