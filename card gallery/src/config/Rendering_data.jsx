// import React from 'react'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Product_details from '../pages/Product_details'
// import Products from '../pages/Products'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
      
//       <Route path='' element={<Products/>} />

//       {/* Dynamic Routes */}
      

//       <Route path='products/:id' element={<Product_details/>} />


//     </Route>

//   )
// )

// export const Rendering_data = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import { Product_details } from '../pages/Product_details';
const Rendering_data = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="products/:id" element={<Product_details />} />
      </Routes>
    </Router>
  );
}

export default Rendering_data;