import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Sheet = () => {
  const [num , setNum] = useState();
  const [name , setName] = useState();
  const [moves ,setMove] = useState();

  const getNum = (event) => {
    setNum(event.target.value);
  }

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  })
  return (
    <>
        <h1>You Choose {num} value</h1>
        <h1> Name of Pokemon is {name} </h1>
        <h1>My moves are {moves}</h1>
        <div className='sheetBalance'>
           <select onClick={getNum}>
             <option value="1">1</option>
             <option value="25">25</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
           </select>
        </div>
    </>
  )
}

export default Sheet