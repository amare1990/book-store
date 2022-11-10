import React from "react";
import Book from "./Book";
import InputBook from "./InputBook";
import NavBar from "./NavBar";


class Books extends React.Component {

  state = {books:[
    {id: 1, title: "Operating Systems", author: "Amare Kassa"},
    {id: 2, title: "Computer Security", author: "Shirodinger"}
  ]};

  render() {
    return (
      <div className="books-wrapper">
        <NavBar />
        <ul>
         <Book books ={this.state.books}/>
        </ul>

        <InputBook />

      </div>
    );
  }
}

export default Books;