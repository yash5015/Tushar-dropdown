import React from "react";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";

const Games = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Dropdown activetab={ActiveDrop} />
      <div>games {ActiveDrop}</div>
    </>
  );
};

export default Games;
