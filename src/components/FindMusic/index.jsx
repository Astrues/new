import React from 'react'
import { Outlet } from 'react-router-dom'
import TopRecom from '../TopRecom'

export default function FindMusic() {

    return (
        <>
            <TopRecom />
            <Outlet />
        </>
    )
}
