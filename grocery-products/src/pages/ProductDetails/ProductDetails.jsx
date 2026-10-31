import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ProductsDetails() {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/products/${productId}`
                );

                const data = await response.json();

                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProduct();
    }, [productId]);

    return (
        <div>
            <h1>Product Details</h1>

            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            )}
        </div>
    );
}

export default ProductsDetails;