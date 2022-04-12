import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailedCard() {
  
  const {cityName} = useParams()
  
  return (
    <div>{cityName}</div>
  )
}

