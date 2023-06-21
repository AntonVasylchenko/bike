import React from 'react'
import { CollectionItems, HeroBanner, ListProduct, Rent } from '../component'


const Home = () => {
  return (
    <>
      <HeroBanner />
      <Rent/>
      <ListProduct />
      <CollectionItems />
    </>
  )
}

export default Home