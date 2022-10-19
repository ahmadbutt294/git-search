import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import classes from "../pages/Viewprofile.module.css";
import { getUserDetail } from "../api/userSearch";

const Viewprofile = () => {
  const params = useParams();
  console.log(params);
  const { data, isLoading } = useQuery(["userDetail"], async () => {
    const data = await getUserDetail(params.userName);
    return data;
  });
  React.useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <div className={classes.view}>
        <div className={classes.image}>
          <img src={data?.avatar_url} alt="nul" />
        </div>
        <div className={classes.name}>
          <h2>{data?.login}</h2>
          <a>
            <button>Visit Github Profile</button>
          </a>
          <div className={classes.boxes}>
            <div className={classes.box1}>
              {" "}
              {data?.location === null ? "Null" : data?.location}
            </div>
            <div className={classes.box1}>
              {data?.blog ? data?.blog : "Null"}
            </div>
            <div className={classes.box1}>
              {" "}
              {data?.twitter_username === null
                ? "Null"
                : data?.twitter_username}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.section1}>
          <div>
            <h3>Followers</h3>
            <h2>{data?.followers}</h2>
          </div>
          <div className={classes.img}>
            <img src="/1.png" alt="dummy" />
          </div>
        </div>
        <div className={classes.section1}>
          <div className={classes.data}>
            <h3>Following</h3>
            <h2>{data?.following}</h2>
          </div>
          <div className={classes.img}>
            <img src="/2.png" alt="dummy" />
          </div>
        </div>
        <div className={classes.section1}>
          <div className={classes.data}>
            <h3>Public Repos</h3>
            <h2>{data?.public_repos}</h2>
          </div>
          <div className={classes.img}>
            <img src="/box.png" alt="dummy" />
          </div>
        </div>
        <div className={classes.section1}>
          <div>
            <h3>Public Gists</h3>
            <h2>{data?.public_gists}</h2>
          </div>
          <div className={classes.img}>
            <img src="/cube.png" alt="dummy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewprofile;
