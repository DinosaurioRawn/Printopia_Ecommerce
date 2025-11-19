//import React from 'react'
import { FeatureGrid } from '../components/home/FeatureGrid'
import { ProductGrid } from '../components/home/ProductGrid'
import { popularCelulares, recentCelulares} from '../data/initialData'
import { prepareProductsForGrid } from '../helpers'

export const HomePage = () => {
  const preparedRecentProducts = prepareProductsForGrid(recentCelulares);
  const preparedPopularProducts = prepareProductsForGrid(popularCelulares);

  return (
      <div>
      <FeatureGrid/>

      <ProductGrid
        title='Lo Nuevo'
        //products={[{id: 1, title: 'Producto 1'}]}
        /* ruta: src/data/initialData.ts (el archivo extension ts sera sustituido por la base de datos que se genere del catalogo de printopia) */
        products={preparedRecentProducts}
      />

      <ProductGrid
      title='Mas Vendidos'
      //products={[{id: 1, title: 'Producto mas vendido 1'}]}
      products={preparedPopularProducts}
      />
    </div>
  )
}
