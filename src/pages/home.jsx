import React from 'react'

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  return (
      <h1>Current date is {date}</h1>
  )
}

export default Home