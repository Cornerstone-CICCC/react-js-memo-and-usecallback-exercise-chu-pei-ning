import { useCallback, useEffect, useState } from "react"
import GetProductsrButton from "./GetProductsButton"

type Product = {
  id: number,
  title: string,
  price: number
}

const ProductList = () => {
  const [product, setProduct] = useState<Product[]>([])

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products`)
      const data = await res.json()
      setProduct(data.products)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    console.log("useEffect triggered")
    fetchUser()
  }, [fetchUser])

  return (
    <div>
      <GetProductsrButton onFetch={fetchUser} />
      <h2>Product</h2>
      <ul>
        {product.map(product => (
        <li key={product.id}>
          <span>{product?.title}</span>
          <span>{product?.price}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList