import React, { useState, useMemo, lazy, Suspense } from 'react'

// Lazy Loaded Components
const MyCard = lazy(() => import('../components/MyCard'))
const MyNavbar = lazy(() => import('../components/MyNavbar'))

import { foods } from '../assets/foodData'

const Home = () => {

  const [search, setSearch] = useState("")

  // useMemo()
  const filterFoods = useMemo(() => {
    return foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <>

      <Suspense fallback={<h1>Loading Navbar...</h1>}>
        <MyNavbar search={search} setSearch={setSearch} />
      </Suspense>

      <div className='d-flex flex-wrap gap-4 py-3 px-5'>

        <Suspense fallback={<h1>Loading Cards...</h1>}>
          {
            filterFoods.map((food) => (
              <MyCard key={food.id} data={food} />
            ))
          }
        </Suspense>

      </div>

    </>
  )
}

export default Home