//import React from 'react'
import { Separator } from '../shared/Separator';

// Aquí puedes definir los tipos de filtros disponibles
// Por ejemplo, cortadores de galletas, navidad, cascos y mascaras, otros.
const availableFilters = [
    'Samsung',
    'Apple',
    'Xiaomi',
    'Huawei',
    'Realme',
    'Honor',
];

// Componente de filtro de productos
export const ContainerFilter = () => {
  return <div className="p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1">
    <h3 className='font-semibold text-x1 mb-4'>
        Filtros
    </h3>

    {/* Separador */}
    <Separator />

    <div className="flex flex-col gap-3">
        <h3 className="text-lg font-medium text-black">Marcas</h3>
        <div className="flex flex-col gap-2"> 
            {availableFilters.map((filter) => (
                <label key={filter} className="inline-flex items-center">
                    <input type="checkbox" className='text-black border-black focus:ring-black accent-black' />
                    <span className="ml-2 text-black text-sm cursor-pointer">{filter}</span>
                </label>
            ))}
        </div>
    </div>
  </div>
}
