import { useQueries } from "@tanstack/react-query"
import { getRandomProducts, getRecentProducts } from "../../actions"

export const useHomeProducts = () => {
    const results = useQueries({
        queries: [
            {
                queryKey: ['recentProducts'],
                queryFn: getRecentProducts,
            },
            {
                queryKey: ['popularProducts'],
                queryFn: getRandomProducts,
            }
        ]
    });

    const [recentProductResult, popularProductResult] = results;

    /* Combinacion de los estados de consulta */
    const isLoading = recentProductResult.isLoading || popularProductResult.isLoading;
    const isError = recentProductResult.isError || popularProductResult.isError;

    return {
        recentProducts: recentProductResult.data || [],
        popularProducts: popularProductResult.data || [],
        isLoading,
        isError,

    }
}