import React from "react";
import AuthorWorks from "./components/Author/AuthorWorks";
import KnowYourAuthor from "./components/Author/KnowYourAuthor";
import BookDetails from "./components/Book/BookDetails";
import Header from "./components/Layout/Header";
import Modal from "./components/Layout/Modal";
import Comments from "./components/Review/Comments";

function App() {

  return ( 
<React.Fragment> 
   <Header />
<BookDetails/>
<KnowYourAuthor/>
<AuthorWorks/>
<Comments/>
</React.Fragment>

  );
}

export default App;
