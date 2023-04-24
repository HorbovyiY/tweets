import { NavLink, Outlet } from "react-router-dom"
import { Header } from "./SharedLayout.styled"

const SharedLayout = () => { 
    return (
        <>
        <Header>
            <nav>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/tweets">Tweets</NavLink>
            </nav>
        </Header>
        <Outlet/>
        </>
    )
}

export default SharedLayout