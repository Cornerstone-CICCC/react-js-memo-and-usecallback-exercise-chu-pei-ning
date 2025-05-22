import { memo } from "react"

type Props = {
  onFetch: () => void
}

const GetProductsButton = memo(({ onFetch }: Props) => {
  console.log("Rendered Button Component")
  return (
    <div>
      <button onClick={onFetch}>Get products</button>
    </div>
  )
})

export default GetProductsButton