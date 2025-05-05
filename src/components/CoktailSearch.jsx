import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context"; // if you’re using context
import CardList from "./CardList";

const CocktailSearch = () => {
  const { text } = useParams();
  const { setSearchTerm } = useGlobalContext(); // only if you’re fetching via context

  // if your <CocktailList> fetches based on a `list` prop:
  useEffect(() => {
    // this empty effect simply forces React to notice “text” changed
  }, [text]);

  // if you’re using context to fetch, you need to tell it the new term:
  useEffect(() => {
    setSearchTerm(text);
  }, [text, setSearchTerm]);

  // pass the URL param straight in as the “list”:
  return <CardList list={text} />;
};

export default CocktailSearch;
