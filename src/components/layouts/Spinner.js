import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
  console.log('eccomi')
  return (
    <div>
        <img
            src={spinner}
            style={{ margin: 'auto', display: 'block'}}
            alt= "Loading..."
        />
    </div>
  )
}
