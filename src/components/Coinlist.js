import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Coinlist.css'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'


const Coinlist = () => {
  let indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  const [data,setData] = useState(null)
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

  console.log(data)
if(!data) return null

  return (
    <div className = 'coinlist'>
     
      {indices.map(index =><div className = 'coin-container'>
        <div className = 'coin-row'>
        <div className = 'coin'>
          <img src = {data[index].image} alt = 'crypto' />
          <h1>{data[index].name}</h1>
          <p className = 'coin-symbol'>{data[index].symbol}</p>
        </div>
        <div className = 'coin-data'>
          <p className = 'coin-price'>${data[index].current_price}</p>
          <p className = 'coin-volume'>${data[index].total_volume.toLocaleString()}</p>
          {data[index].price_change_percentage_24h < 0 ? (
            <span className = 'red'>
            <FiArrowDown />
          {data[index].price_change_percentage_24h}%
          </span>):(<span className = 'green'>
            <FiArrowUpRight />
          {data[index].price_change_percentage_24h}%
          </span>)}
        </div>
        </div>
      </div>)}
      </div>
  )
}

export default Coinlist