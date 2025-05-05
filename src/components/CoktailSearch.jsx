import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import CardList from "./CardList";
import Footer from "./Footer";
import Header from "./Header";
const CocktailSearch = () => {
  const { text } = useParams();
  const { setSearchTerm } = useGlobalContext();

  useEffect(() => {}, [text]);

  useEffect(() => {
    setSearchTerm(text);
  }, [text, setSearchTerm]);

  return (
    <>
      <Header />
      <CardList list={text} />
      <Footer />
    </>
  );
};

export default CocktailSearch;
