
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useGetProductById } from "../hooks/useProducts"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const {productData} = useGetProductById(id)
  return (
    <Card key={productData.id} style={{with: "18rem"}}>
      <Card.Img varian="top" src={productData.thumbnail}/>
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.description}
        </Card.Text>
        <div>{productData.price}</div>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer