import { useRouter } from "next/router";
import Dropdown from "./dropdown";
import Cards from "./cards";

const Education = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Cards activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />
      <Dropdown activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />
      <div>education {ActiveDrop}</div>
    </>
  );
};

export default Education;
