import { useEffect, useState } from 'react'
import { fetchPricesData } from '../api/fetchPricesData'

interface PricesProps {
  onNext: () => void
}

export const Prices = ({ onNext }: PricesProps) => {
  const [prices, setPrices] = useState<any[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPricesData()
        setPrices(data)
      } catch (error) {
        console.error('Failed to fetch list data:', error)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    if (prices.length !== 0) console.log(prices)
  }, [prices])

  return (
    <>
      {prices.map((price, index) => (
        <div key={index}>
          {price.id} / {price.price} / {price.volumn}
          <button onClick={onNext}>요금제 보기</button>
        </div>
      ))}
    </>
  )
}
