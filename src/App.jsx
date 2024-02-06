/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import CardDetails from './components/cardDetailsComponent/CardDetails';
import './App.css'

import productsData from '../fakeapi/data.json';

function App() {
  const [filter, setFilter] = useState("");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  return (
    <>
      <Header onFilterChange={handleFilterChange}/>
      <CardDetails products={productsData} filter={filter}/>
      <Footer/> </>
   
  )
}

export default App
