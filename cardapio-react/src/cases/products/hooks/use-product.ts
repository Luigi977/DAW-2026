import { useEffect, useState } from "react";
import { productService } from "../services/product-service";
import type { Product } from "../dtos/product";

export function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        productService.listAll()
            .then(setProducts)
            .catch(err => {setError(err.message);})
            .finally(() => {setLoading(false);});
    }, []);

    return { products, loading, error};
}