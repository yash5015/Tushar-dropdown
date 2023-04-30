import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";
import Cards from "./cards";

const Games = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Cards activetab={ActiveDrop !== "/" ? "games" : ActiveDrop} />
      <Dropdown activetab={ActiveDrop !== "/" ? "games" : ActiveDrop} />
      <div>games {ActiveDrop}</div>
    </>
  );
};

export default Games;
