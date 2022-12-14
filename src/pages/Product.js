import React, { useEffect } from 'react';
import ProductDisplay from '../components/ProductDisplay';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Product = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <ProductDisplay />
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Product;
