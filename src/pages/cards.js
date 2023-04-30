import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Cards = ({ activetab }) => {
  const router = useRouter();
  const [activePageName, setActivePageName] = useState("education");
  const [isActive, setIsActive] = useState(false);
  const CardsTypes = [
    {
      name: "education",
    },
    {
      name: "kids",
    },
    {
      name: "school",
    },
    {
      name: "games",
    },
  ];
  useEffect(() => {
    setActivePageName(activetab);
  }, []);
  const handleDrop = () => {
    setIsActive(!isActive);
  };
  console.log("card active tab", activePageName);
  return (
    <div className="boxRow">
      {/* <div className="card">Education</div>
      <div className="card">Games</div>
      <div className="card">Kids</div>
      <div className="card">School</div> */}
      {CardsTypes.map((item, id) => (
        <div
          key={id}
          className={`card ${
            activePageName === item.name ? "activeCard" : null
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Cards;
