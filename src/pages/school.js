import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";
import Cards from "./cards";

const School = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Cards activetab={ActiveDrop !== "/" ? "school" : ActiveDrop} />
      <Dropdown activetab={ActiveDrop !== "/" ? "school" : ActiveDrop} />
      <div>school {ActiveDrop}</div>
    </>
  );
};

export default School;
