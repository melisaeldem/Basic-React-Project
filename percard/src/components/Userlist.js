import React, { useState, useEffect } from "react";
import Usercard from "./Usercard";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=12");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container m-0">
      <div className="row m-0">
        {users.map((user, index) => {
          return <Usercard key={index} user={user}></Usercard>;
        })}
      </div>
    </div>
  );
};

export default Userlist;
