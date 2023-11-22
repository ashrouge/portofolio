"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from "src/shared/config/constants"
import { FiCheck } from "react-icons/fi";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, SetQuery] = useState('');

  const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  ))

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/logo.svg"
              alt="car"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-full max-sm:rounded-full bg-gray-700 outline-none cursor-pointer text-sm"
            placeholder='Vario'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => SetQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => SetQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-500 text-white' : 'bg-gray-500 text-gray-200'}`}
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-red-700'}`}
                        >
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              )
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer