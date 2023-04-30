import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";
import Cards from "./cards";

const Kids = (props) => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  console.log(ActiveDrop);
  return (
    <>
      <Cards activetab={ActiveDrop !== "/" ? "kids" : ActiveDrop} />
      <Dropdown activetab={ActiveDrop !== "/" ? "kids" : ActiveDrop} />
      <div>kids {ActiveDrop}</div>
    </>
  );
};

export default Kids;
