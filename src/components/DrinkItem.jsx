import { Col, Card, Button } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

export default function DrinkItem({ drink }) {
  const { idDrink, strDrink: name, strDrinkThumb: image } = drink;

  const { toggleModal, handleSetId } = useDrinks();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={image}
          alt={`Imagen de ${name}`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button
            variant="warning"
            className="w-100 mt-2 fw-bold"
            onClick={() => {
              toggleModal();
              handleSetId(idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
