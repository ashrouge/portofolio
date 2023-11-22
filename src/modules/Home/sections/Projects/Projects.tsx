import React from 'react'
import { motion } from 'framer-motion'
import Featured from '@components/cards/Project/Featured'
import ProjectCard from '@components/cards/Project/ProjectCard'
import ProductCard from '@components/cards/Project/ProductCard'
import { fadeTop, fadeLeft, motionStep } from '@config/motion'
import { allCars, projects } from '@config/constants'
import { ProjectTypes } from '@config/types'
import SearchBar from '@components/Filters/SearchBar'
import CustomFilter from '@components/Filters/CustomFilter'
import { useManufacturerContext } from '@components/Filters/ManufacturerContext'

const Projects = () => {
  const { manufacturer, setManufacturer } = useManufacturerContext();
  
  const allCar = allCars

  const filteredProduct = allCar.filter(item => {
    const parts = item.name.toLowerCase();
    return parts.includes(manufacturer.toLowerCase());
  });
  

  
  const isDataEmpty = !Array.isArray(filteredProduct) || filteredProduct.length < 1 || !filteredProduct;

  return (
    <section id='works' className='container border border-white' >

      <motion.h1 variants={fadeLeft} {...motionStep} className='flex items-center gap-2 text-lg md:text-3xl font-medium text-white mb-12' >
        <span className='text-red-700 font-mono' >03. </span>
        Our Products
      </motion.h1>

      <div className='mt-12 w-full flex justify-between items-center flex-wrap gap-5'>
        <SearchBar />
        <div className='flex justify-start flex-wrap items-center gap-2 ml-4'>
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-10'>
            {filteredProduct?.map((product, index) => (
            <ProductCard product={product} key={index} />
            ))}
          </div>
        </section>
      ) : (
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-10'>
            {allCar?.map((product, index) => (
            <ProductCard product={product} key={index} />
            ))}
        </div>
      )}

    </section>
  )
}

export default Projects