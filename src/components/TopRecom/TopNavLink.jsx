import React from 'react'
import { NavLink } from 'react-router-dom'
export default function TopNavLink(props) {
    return (
        <NavLink
            style={({ isActive }) => {
                return isActive ?
                    {
                        fontSize: "20px",
                        fontWeight: "700"
                    } :
                    { fontWeight: "100" }
            }}
            {...props}></NavLink>
    )
}
