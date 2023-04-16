import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dropdown = ({ activetab }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const [activePageName, setActivePageName] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const dropMenu = [
    {
      name: "education",
    },
    {
      name: "kids",
    },
    {
      name: "school",
    },
    {
      name: "games",
    },
  ];
  console.log("activeTab is", activetab);
  useEffect(() => {
    setActivePageName(activetab);
  }, []);
  const handleDrop = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="main-dropdown">
        <div onClick={() => handleDrop()} className="head-dropdown">
          click to Open
        </div>
        <div className={isActive ? "body-dropdown" : "not-body-dropdown"}>
          <h2>dropdown</h2>
          <ul>
            {activePageName ? <li>{activePageName}</li> : null}
            {dropMenu.map((item) =>
              item.name != activePageName ? (
                <li>
                  <Link
                    href={{
                      pathname: `/${item.name}`,
                      query: { pathIs: item.name },
                    }}
                    as={`${item.name}`}
                    // className={currentPage === "/education" ? "active" : "nonActive"}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          {/* <ul>
        <li>
          <Link
            href={{
              pathname: "/kids",
              query: { pathIs: "kids" },
            }}
            as={"kids"}
            className={currentPage === "/kids" ? "active" : "nonActive"}
          >
            kids
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/school",
              query: { pathIs: "school" },
            }}
            as={"school"}
            className={currentPage === "/school" ? "active" : "nonActive"}
          >
            school
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/games",
              query: { pathIs: "games" },
            }}
            as={"games"}
            className={currentPage === "/games" ? "active" : "nonActive"}
          >
            games
          </Link>
        </li>
      </ul> */}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
