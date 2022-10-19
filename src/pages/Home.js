import { avatarClasses } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { getUser } from "../api/userSearch";
import Profileicon from "../components/profileicons/Profileicon";
import classes from "../pages/Home.module.css";

const Home = () => {
  const [user, setUser] = React.useState("");
  const { data, isLoading, refetch } = useQuery(
    ["users"],
    async () => {
      const res = await getUser({ queryParams: { q: user, per_page: 3000 } });
      return res;
    },
    {
      enabled: false,
    }
  );
  React.useEffect(() => {
    if (user) {
      refetch();
    }
  }, [data, user]);
  return (
    <>
      <div className={classes.home}>
        <h1>Enter the GitHub User_Name Below :</h1>
        <div className={classes.search}>
          <input
            type="text"
            placeholder="Search.."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setUser(event.target.value);
              }
            }}
          />
        </div>
      </div>
      <div className={classes.flexCards}>
        {data?.items?.map(({ avatar_url, login, id }, index) => {
          return (
            <div>
              <Profileicon
                id={id}
                imgSrc={avatar_url}
                key={index}
                name={login}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
