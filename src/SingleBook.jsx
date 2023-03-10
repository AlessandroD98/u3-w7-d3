import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Component } from "react";
import "./App.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={3} lg={2}>
        <Card
          style={{ width: "18rem" }}
          onClick={(e) => {
            console.log("clicked", e);
            e.currentTarget.classList.toggle("bg-change");
            let result = this.state.selected ? false : true;
            this.setState({ selected: result });
          }}
        >
          <Card.Img variant="top" src={this.props.booktopass.img} />
          <Card.Body>
            <Card.Title>{this.props.booktopass.title}</Card.Title>
            <Card.Text>{this.props.booktopass.price}€</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

// function SingleBook(props) {
//   return (
//     <Col xs={12} md={3} lg={2}>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={props.booktopass.img} />
//         <Card.Body>
//           <Card.Title>{props.booktopass.title}</Card.Title>
//           <Card.Text>{props.booktopass.price}€</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }
