import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Crousel from '../components/Crousel'

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Crousel /></div>

      <div className='m-3'>
        <Card />
        <Card />
        <Card />
      </div>

      <div><Footer /></div>

    </div>
  )
}
