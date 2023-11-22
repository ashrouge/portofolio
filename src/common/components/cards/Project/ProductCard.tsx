"use client";

import { useState } from 'react'
import Image from 'next/image';
import Button from '@components/Button'
import ProductDetails from './ProductDetails';
import { ProductProps } from '@config/interface';

interface ProductCardProps {
  product: ProductProps;
}


const ProductCard = ({ product }: ProductCardProps) => {

  const { name, price, type, layanan, image } = product;
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='flex flex-col p-6 justify-center items-start text-red-600 bg-white hover:shadow-md rounded-3xl'>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
          {name}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          {price}
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={image} alt="motor image" fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='bottom-0 w-full z-10'>
          <Button className='w-full py-[16px] rounded-full' secondary onClick={() => setIsOpen(true)} >View More</Button>
        </div>
      </div>
      <ProductDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} products={product} />
    </div>
  )
}

export default ProductCard