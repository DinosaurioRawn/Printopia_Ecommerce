//import React from 'react'

import { CardProducts } from "../products/CardProducts";
//import { title, name } from 'process';
//import { Product } from '../../interfaces/product.interface';


interface ProductGridProps {
    title: string;
    products: any[];
}

export const ProductGrid = ({ title, products }: ProductGridProps) => {
    return (
        <div className="my-32">
            <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
                {title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {products.map((product) => (
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
        </div>
        //<div>ProductGrid</div>
    );
};
