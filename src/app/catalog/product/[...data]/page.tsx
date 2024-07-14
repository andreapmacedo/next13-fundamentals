// interface ProductProps {
//   params: {
//     id: string[]
//   }
// }

// export default function Product({ props }: ProductProps) {
//     return (  
//       <h1>Product: {props.params.id}</h1>
//   )
// }


interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}