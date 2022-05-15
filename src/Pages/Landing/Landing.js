import React from "react";
import BookDetails from "../../components/Book/BookDetails";
import KnowYourAuthor from "../../components/Author/KnowYourAuthor";
import Comments from "../../components/Review/Comments";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import OrderSearch from "../../components/OrderSearch/OrderSearch";
function Landing() {

  return ( 
<div className="overflow-hidden"> 
   <Header />
<BookDetails/>
<KnowYourAuthor/>
{/* <AuthorWorks/> */}
<Comments/>
<OrderSearch/>
<Footer/>
</div>

  );
}

export default Landing;