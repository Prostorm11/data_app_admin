import React from 'react'
import "./top_navigator.css"
import CustomButton from './customButton'

export default function TopNavigator() {
  return (
    <div className='main_board' style={{backgroundColor:"var(--card-background)",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}}>
      <CustomButton text={"Dashboard"}> </CustomButton>
      <CustomButton text={"Clients"}> </CustomButton>
      <CustomButton text={"Packages"}> </CustomButton>
      <CustomButton text={"Orders"}> </CustomButton>
    </div>
  )
}
