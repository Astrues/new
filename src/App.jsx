import React from 'react'
import Header from './components/Header'
import List from './components/List'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
export default function App() {
    const element = useRoutes(routes)
    return (
        <>
            <Header />
            <>
                <List />
                {element}
            </>
        </>
    )
}
