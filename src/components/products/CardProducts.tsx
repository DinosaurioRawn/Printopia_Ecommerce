import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { formatPriceToMXN } from '../../helpers';

interface CardProductsProps {
    img: string;
    name: string;
    price: number;
    slug: string;
    colors?: { name: string; color: string }[];
    variants?: { color: string; stock?: number }[];
}

export const CardProducts = ({
    img,
    name,
    price,
    slug,
    colors = [],
    variants = [],
}: CardProductsProps) => {
    const [activeColor, setActiveColor] = useState<{ name: string; color: string }>(
        colors[0] ?? { name: 'Default', color: '#000000' } //Valor por defecto si no hay colores
    );

    // Identificar la variante según el color activo (protegido)
    const selectedVariant =
        variants.find((variant) => variant.color === activeColor.color) ?? { stock: 0 };

    const stock = selectedVariant.stock ?? 0;

    return (
        <div className="flex flex-col gap-6 relative">
            <Link to={`/product/${slug}`} className="group relative flex overflow-hidden">
                <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h[250px]">
                    <img src={img} alt={name} className="object-contain h-full w-full" />
                </div>

                <button className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-full transition-all duration-300 group-hover:translate-y-0">
                    <FiPlus />
                    Añadir al carrito
                </button>
            </Link>

            <div className="flex flex-col-1 gap-1 items-center">
                <p className="text-[15px] font-medium">{name}</p>
                <p className="text-[15px] font-medium">{formatPriceToMXN(price)}</p>

                {colors.length > 0 && (  /*solo hago map si hay colores */
                    <div className="flex gap-3">
                        {colors.map((color) => (
                            <span
                                key={color.color}
                                className="grid place-items-center w-5 h-5 rounded-full cursor-pointer"
                                onClick={() => setActiveColor(color)}
                            >
                                <span
                                    className="w-3.5 h-3.5 rounded-full"
                                    style={{ backgroundColor: color.color }}
                                />
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="absolute top-2 left-2">
                {stock === 0 && <span>Agotado</span>}
            </div>
        </div>
    );
};


