import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  state = {
    NameOfBook: "",
  };
  filterBookList(e) {
    this.setState({ NameOfBook: e.target.value });
  }
  render() {
    return (
      <Row>
        <input type="text" onChange={(event) => this.filterBookList(event)} />
        {this.props.books
          .filter((book) => {
            return book.title.toLowerCase().includes(this.state.NameOfBook.toLowerCase());
          })
          .map((book) => (
            <SingleBook key={book.asin} booktopass={book} />
          ))}
      </Row>
    );
  }
}

export default Booklist;
