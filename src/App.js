import React from "react";
import KnowYourAuthor from "./components/Author/KnowYourAuthor";
import BookDetails from "./components/Book/BookDetails";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";

function App() {

  return ( 
<React.Fragment>  <Header />
<BookDetails/>
<KnowYourAuthor/>
</React.Fragment>

  );
}

export default App;
