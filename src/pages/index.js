import Dropdown from "./dropdown";
import Cards from "./cards";
import { useRouter } from "next/router";
import Gallery from "./Gallery/gallery";

const index = (props) => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      {/* <Cards activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />

      <Dropdown activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} /> */}
      {/* <Education /> */}
      <Gallery />
    </>
  );
};

export default index;
