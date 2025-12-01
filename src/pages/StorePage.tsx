//import React from 'react';
import { prepareProductsForGrid } from '../helpers';
import { CardProducts } from '../components/products/CardProducts';
import { ContainerFilter } from '../components/products/ContainerFilter';
import { useFilteredProducts } from '../hooks';
import { useState } from 'react';
import { Pagination } from '../components/shared/Pagination';

export const StorePage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const{
    data:products = [],
    isLoading,
    totalProducts } =  useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  if(isLoading || !products) return <div>Cargando...</div>

  const prepareProducts = prepareProductsForGrid(products);

  return <>
    <h1 className='text-5xl font-semibold text-center mb-12'>
      Catalogo
    </h1>

    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
      {/* Filtros */}
      <ContainerFilter 
        setselectedBrands={setSelectedBrands}
        selectedBrands={selectedBrands}
      />

      {/* LOADING */}
      {
        isLoading ? (
          <div className="col-span-2 flex items-center justify-center h-[500px]">
            <p className='text-2xl'>Cargando...</p>
          </div>
        ):(
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
        <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
          {/* Productos */}
          {prepareProducts.map(product =>(
              <CardProducts
                key={product.id}
                name={product.name}
                price={product.price}
                colors={product.colors}
                img={product.images?.[0] ?? ""}
                slug={product.slug}
                variants={product.variants}
              />
          ))}
        </div>
        {/* Paginación */}
        <Pagination
          totalItems={totalProducts}
          page={page}
          setPage={setPage}
        />
      </div>
        )
      }

      
    </div>
  </>;
};
