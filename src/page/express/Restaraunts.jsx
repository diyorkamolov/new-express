import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout/layout";

function Restaraunts() {
  const [restaraunt, setRestaraunt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2");
        const data = await response.json();
        setRestaraunt(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {restaraunt.map((restaurant) => (
        <Box key={restaurant.id} display="flex" gap={20} flexWrap="wrap">
          <Avatar src={restaurant.logo} />
          <NavLink to={`/restaurant/${restaurant.id}`}>{restaurant.name}</NavLink>
        </Box>
      ))}
    </Layout>
  );
}

export default Restaraunts;
