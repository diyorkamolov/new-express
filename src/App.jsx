import React, { useEffect, useState } from "react";

import { Box, Button, Grid } from "@mui/material";
import RecipeCard from "./components/Cards/RecipeCard";
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from "./components/Form/SearchBar";
import Layout from "./components/layout/layout";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const itemsPage= 6

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    searchRecipes();
  };

  const loadMore = () => {
    setCurrentPage((prevPage => prevPage + 1))
  }
  const handleClick = () => {
    setIsLoading(true);

    // Simulate a long-running process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Layout>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

      <Box sx={{ flexGrow: 1, maxWidth: "md", margin: "auto" }}>
        <h1>Restorantlar</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Aksiya
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Fast Food
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Pizza
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Burger
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Yana
          </button>
        </div>

        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
      {recipe
            ? recipe.slice(0, currentPage * itemsPage).map((r, idx) => (
                <Grid item xs={4} sm={4} md={4} key={idx}>
                  <RecipeCard key={r.idMeal} recipe={r} />
                </Grid>
              ))
            : "No Products"}
      {recipe && recipe.length > currentPage * itemsPage && (
        <Button style={{width: 1050,height: '5vh', marginLeft: '155px', backgroundColor: '#ececee', color: 'black', borderRadius: '10px'}} onClick={handleClick}>
          Show more
          {isLoading && <CircularProgress />}
        </Button>
      )}
    </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
