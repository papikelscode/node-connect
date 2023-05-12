import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Formpages = () => {
  return (
    <div>
        <div>
            <Link to="#">Phrase</Link>
            <Link to="#">keystore Json</Link>
            <Link to="#">Private key</Link>
        </div>

        <>
        <h1>jksjdskdjdjdjdjdj</h1>
            <Outlet />
        </>
    </div>
  )
}

export default Formpages