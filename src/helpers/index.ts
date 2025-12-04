import type { Color, Product, VariantProduct } from "../interfaces";

//Funcion para preparar el precio a pesos mexicanos
export const formatPriceToMXN = (price: number) =>{
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};

//Funcion para preparar los productos para el grid 
export const prepareProductsForGrid = (products: Product[]) => {
    return products.map(product => {
        //Agrupar variantes por color
        const colors = product.variants.reduce((acc: Color[], variant: VariantProduct) => {
            const colorExists = acc.find(item => item.color === variant.color)
            
            if (colorExists) {
                //Si el color ya existe, comparamos precios
                colorExists.price = Math.min(colorExists.price, variant.price);
            }//Mantenemos el precio mas bajo
            else{
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
            });
            }
            return acc;
        }, []);

        //Obtener el precio minimo de las variantes
        const price = Math.min(...colors.map(item => item.price));

        //Devolver el producto preparado
        return {
            ...product,
            price,
            colors: colors.map(({name, color}) => ({name, color})),
            variants: product.variants,
        };
    });
};

// Función para formatear la fecha a formato 3 de diciembre de 2025
export const formatDateLong = (date: string): string => {
	const dateObject = new Date(date);

	return dateObject.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

// Función para obtener el estado del pedido en español
export const getStatus = (status: string): string => {
	switch (status) {
		case 'Pending':
			return 'Pendiente';
		case 'Paid':
			return 'Pagado';
		case 'Shipped':
			return 'Enviado';
		case 'Delivered':
			return 'Entregado';
		default:
			return status;
	}
};