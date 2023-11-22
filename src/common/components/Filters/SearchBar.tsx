"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { useManufacturerContext } from './ManufacturerContext';
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

const SearchButton = ({ otherClasses }: {otherClasses: string}) => (
  <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
    <Image 
      src={"/magnifying-glass.svg"}
      alt="Search"
      width={40}
      height={40}
      color="blue"
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const { manufacturer, setManufacturer } = useManufacturerContext();
  console.log(manufacturer)
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '') {
      return alert('please fill in the searchbar')
    }

    setManufacturer(manufacturer.toLowerCase());
  }

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer= {manufacturer}
          setManufacturer = {setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}

export default SearchBar