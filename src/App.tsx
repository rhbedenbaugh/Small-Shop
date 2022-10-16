import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Product } from './Product';
import { IProduct } from './App.models';
import { PurchaseDisplay } from './PurchaseDisplay';

const initialProducts: IProduct[] =
  [{
    name: 'keyboard',
    image: './images/image001.jpg',
    price: 200
  },
  {
    name: 'headphones',
    image: './images/image002.jpg',
    price: 300
  },
  {
    name: 'mouse',
    image: './images/image003.jpg',
    price: 100
  }
  ]

function App() {
  const [products, setProducts] = useState(initialProducts);

  const [isProductBought, setIsProductBought] = useState(false)

  const [productBought, setProductBought] = useState(
    { name: '', image: '', price: 0 })

  const handlePurchase = (product: IProduct) => {
    setProductBought(product)
    setIsProductBought(true)
  }

  const handleUpdate = (product: IProduct, index: number) => {
    const productToUpdate = {
      name: 'CPU',
      image: './images/image008.jpg',
      price: 350
    } as IProduct

    const newProducts = products.map(
      (nextProduct, productIndex) => {
        if (productIndex === index) {
          return productToUpdate
        }
        return nextProduct
      })
    setProducts(newProducts)
  }

  const handleRemove = (product: IProduct, indexToRemove: number) => {
    const filteredProducts = products.filter(
      (nextProduct, productIndex) =>
        productIndex != indexToRemove)
    setProducts(filteredProducts)
  }

  const productToCreate = {
    name: 'CPU',
    image: './images/image008.jpg',
    price: 350
  } as IProduct

  const handleCreate = (product: IProduct) => {
  

    const newProducts = [...products, productToCreate]
    setProducts(newProducts)
  }

  return (
    <>
      <h1 className='Small-shop'>Small Shop<button className={'Create-product'}
              onClick={() => handleCreate(productToCreate)}>
              Create Product
            </button></h1>
           
      {(isProductBought) ?
        (
          <PurchaseDisplay productPurchased={productBought} />
        ) : (
          <div className={'App-container'}>
            {products.map((product, index) => {
              return <Product
                product={product}
                productIndex={index}
                onBuy={handlePurchase}
                onUpdate={handleUpdate}
                onRemove={handleRemove} />

            })}
          </div>
        )}
    </>
  )
}

export default App;
