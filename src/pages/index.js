import Dropdown from "./dropdown";
import Cards from "./cards";
import { useRouter } from "next/router";

const index = (props) => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Cards activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />

      <Dropdown activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />
      {/* <Education /> */}
    </>
  );
};

export default index;
