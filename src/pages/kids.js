import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";

const Kids = (props) => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  console.log(ActiveDrop);
  return (
    <>
      <Dropdown activetab={ActiveDrop !== "/" ? "kids" : ActiveDrop} />
      <div>kids {ActiveDrop}</div>
    </>
  );
};

export default Kids;
