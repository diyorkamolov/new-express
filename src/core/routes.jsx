import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import About from "../page/About";
import FoodById from "../page/[id]";
import AlbumById from "../page/album/[id]";
import Album from "../page/album/album";
import PhotosById from "../page/photos/[id]";
import Photos from "../page/photos/photos";
import ProductById from "../page/photos/product/[id]";
import Product from "../page/photos/product/product";
import Restaraunts from "../page/express/Restaraunts";
import RestarauntById from "../page/express/[id]";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/store/:id" element={<FoodById />} />
        <Route path="photos" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotosById />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductById />}></Route>
        <Route path="/album" element={<Album />}></Route>
        <Route path="/album/:id" element={<AlbumById />} />
        <Route path="/restaraunt" element={<Restaraunts />}></Route>
        <Route path="/restaraunt/:id" element={<RestarauntById />} />




      </Routes>
    </BrowserRouter>
  );
};

export default Router;
