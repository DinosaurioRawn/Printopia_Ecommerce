//import React from 'react'
import { FeatureGrid } from '../components/home/FeatureGrid'
import { ProductGrid } from '../components/home/ProductGrid'
import { ProductGridSkeleton } from '../components/skeletons/productGridSkeleton'
import { prepareProductsForGrid } from '../helpers'
import { useHomeProducts } from '../hooks'

export const HomePage = () => {
  const{recentProducts, popularProducts, isLoading} =  useHomeProducts();


  const preparedRecentProducts = prepareProductsForGrid(recentProducts);
  const preparedPopularProducts = prepareProductsForGrid(popularProducts);

  return (
      <div>
      <FeatureGrid/>

      {
        isLoading ? (
          <ProductGridSkeleton numberOfItems = {4} />
        ) : ( <ProductGrid title='Nuevos Productos' products={preparedRecentProducts} />
        )}

      {
        isLoading ? (
          <ProductGridSkeleton numberOfItems = {4} />
        ) : ( <ProductGrid title='Más vendidos' products={preparedPopularProducts} />
        )}

    </div>
  )
}
