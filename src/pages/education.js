import { useRouter } from "next/router";
import Dropdown from "./dropdown";

const Education = () => {
  const router = useRouter();
  const ActiveDrop = router.query.pathIs;
  return (
    <>
      <Dropdown activetab={ActiveDrop !== "/" ? "education" : ActiveDrop} />
      <div>education {ActiveDrop}</div>
    </>
  );
};

export default Education;
