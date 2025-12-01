import React from 'react'

interface PaginationProps{
    totalItems: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({totalItems, page, setPage} : PaginationProps) => {
    const handleNextPage = () => {
        setPage(page + 1);
    }
    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    }

    const itemsPerPage = 10;
    const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1; // Calcula el total de páginas
    const isLastPage = page >= totalPages; // Verifica si es la última página
    const startItem = (page - 1) * itemsPerPage + 1; // Índice del primer ítem en la página actual
    const endItem = Math.min(page * itemsPerPage, totalItems); // Índice del último ítem en la página actual

  return (
    <div className="flex justify-between items-center">
        <p className='text-xs font-medium'>
            Mostrando <span className='font-bold'>
                {startItem} - {endItem} 
            </span> de <span className='font-bold'>{totalItems}</span> productos
        </p>
        <div className="flex gap-3">
            <button className='border border-slate-700 rounded-md font-semibold text-xs py-1 px-3 hover:bg-slate-700 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-800 disabled:hover:bg-white disabled:hover:text-slate-700' onClick={handlePrevPage} disabled= {page===1}>Anterior</button>
            <button className='border border-slate-700 rounded-md font-semibold text-xs py-1 px-3 hover:bg-slate-700 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-800 disabled:hover:bg-white disabled:hover:text-slate-700' onClick={handleNextPage} disabled = {isLastPage}>Siguiente</button>
        </div>
    </div>

  );
}
