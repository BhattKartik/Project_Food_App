import React, {
  useState,
  useMemo,
  lazy,
  Suspense
} from 'react'

// Lazy Loaded Components
const MyCard = lazy(() => import('../components/MyCard'))
const MyNavbar = lazy(() => import('../components/MyNavbar'))

import { foods } from '../assets/foodData'

const Home = () => {

  const [search, setSearch] = useState("")

  // Cart State
  const [cart, setCart] = useState([])

  // Add To Cart Function
  function addToCart(item) {

    const existingItem = cart.find(
      (product) => product.id === item.id
    )

    // If item already exists
    if (existingItem) {

      const updatedCart = cart.map((product) =>
        product.id === item.id
          ? {
              ...product,
              quantity: product.quantity + 1
            }
          : product
      )

      setCart(updatedCart)

    } else {

      // New item
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1
        }
      ])

    }
  }

  // Filter Foods
  const filterFoods = useMemo(() => {
    return foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <>

      {/* Navbar */}
      <Suspense fallback={<h1>Loading Navbar...</h1>}>

        <MyNavbar
          search={search}
          setSearch={setSearch}
          cartCount={cart.length}
        />

      </Suspense>

      {/* Cards */}
      <div className='d-flex flex-wrap gap-4 py-3 px-5'>

        <Suspense fallback={<h1>Loading Cards...</h1>}>

          {
            filterFoods.map((food) => (
              <MyCard
                key={food.id}
                data={food}
                addToCart={addToCart}
              />
            ))
          }

        </Suspense>

      </div>

    </>
  )
}

export default Home