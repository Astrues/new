import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Recommend from '../components/FindMusic/Recommend'
import TopRecom from '../components/TopRecom'
export default function HomePage() {
    return (
        <div>
            <Navigate to={'/findmusic/recommend'}/>
            <TopRecom />
            <Recommend />
            <Outlet />
        </div>
    )
}
