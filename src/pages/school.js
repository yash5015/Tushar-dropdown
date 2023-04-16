import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";

const School = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Dropdown activetab={ActiveDrop !== "/" ? "school" : ActiveDrop} />
      <div>school {ActiveDrop}</div>
    </>
  );
};

export default School;
