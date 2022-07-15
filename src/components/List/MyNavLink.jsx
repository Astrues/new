import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MyNavLink(props) {
    return (
        <NavLink
            style={({ isActive }) => {
                return isActive ?
                    { 
                        fontSize:"18px",
                        fontWeight: "bold" ,
                        backgroundColor:"#f6f6f7"
                    } :
                    {}
            }}
            {...props}></NavLink>
    )
}
