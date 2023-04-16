import Dropdown from "./dropdown";
import Education from "./education";
import Kids from "./kids";
import School from "./school";
import Games from "./games";
import { useRouter } from "next/router";

const index = (props) => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Dropdown activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />
      {/* <Education /> */}
    </>
  );
};

export default index;
