import React from "react";
import Card from "./Card";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CardList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div className="container">
      {cocktails.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
}
