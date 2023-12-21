import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const ItemListContainer = ({productsData}) => {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
     {productsData.map((products) => {
     return (
      <Card key={products.id} style={{with: "18rem", }}>
        <Link to={`/item/${products.id}`}>
        <Card.Img varian="top" src={products.thumbnail}/>
        </Link>
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>
          {products.description}
          </Card.Text>
          <div>{products.price}</div>
          <Button variant="primary">Go Somewhere</Button>
        </Card.Body>
    </Card>
    );
    }
    )
    }
    </div>
  );
}

export default ItemListContainer;