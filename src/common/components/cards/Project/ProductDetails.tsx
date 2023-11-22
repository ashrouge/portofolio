"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ProductProps } from '@config/interface';
import Button from '@components/Button'



interface ProductDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  products: ProductProps;
}

const ProductDetails = ({ isOpen, closeModal, products }: ProductDetailsProps) => {

  const { name, price, type, layanan, image } = products;
  console.log(products)


  // function formatRupiah(number: number): string {
  //   // Menggunakan metode toLocaleString() dengan opsi Indonesia
  //   return number.toLocaleString('id-ID', {
  //     style: 'currency',
  //     currency: 'IDR',
  //     minimumFractionDigits: 0, // Menentukan jumlah digit desimal
  //   });
  // }

  // // Contoh penggunaan fungsi formatRupiah
  // const formattedAmount = formatRupiah(products.price);
  // console.log(formattedAmount)


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-red-500 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  {/* <div>
                    {products.map((item) => {
                      console.log(item)
                    })}
                  </div> */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex justify-center relative w-9/12 my-1 mx-auto h-fit bg-gray-500 bg-cover bg-center rounded-lg">
                      <Image src={image} alt="product" width={200} height={150} priority />
                    </div>
                    <div className="flex gap-3 px-5">
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image src={"/beat.jpeg"} alt="product" fill priority />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image src={"/beat.jpeg"} alt="product" fill priority />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image src={"/beat.jpeg"} alt="product" fill priority />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 px-5">
                    <h2 className="font-semibold text-xl capitalize text-black">
                      {products.name}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex justify-between w-full text-right text-black">
                        <h4 className="text-gray-400 capitalize">Nama</h4>
                        <p className="text-gray-700 font-semibold">{products.name}</p>
                      </div>
                      <div className="flex justify-between w-full text-right text-black">
                        <h4 className="text-gray-400 capitalize">Harga</h4>
                        <p className="text-gray-700 font-semibold">{products.price}</p>
                      </div>
                      <div className="flex justify-between w-full text-right text-black">
                        <h4 className="text-gray-400 capitalize">Tipe</h4>
                        <p className="text-gray-700 font-semibold">{products.type}</p>
                      </div>
                      <div className="flex justify-between w-full text-right text-black">
                        <h4 className="text-gray-400 capitalize">Pembayaran</h4>
                        <p className="text-gray-700 font-semibold">{products.layanan}</p>
                      </div>
                    </div>
                    <Button secondary href="https://wa.me/6281359534234" targetBlank className="m-4">Hubungi Promotor</Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ProductDetails