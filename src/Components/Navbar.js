import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    function handleOpenMenu() {
       setOpenMenu(!openMenu);
    }
    return(
    
    <>
    <header className="App-header">
       <Logo/>
        <nav className="menu">
            <ul className={openMenu ? 'primary-nav' : 'primary-nav closed'}>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Our Story</a></li>
                <li><a href="/#">Venue</a></li>
                <li><a href="/#">RSVP</a></li>
                <li><a href="/#">Gallery</a></li>
                <button className="btn-nav btn-close" onClick={handleOpenMenu}><i className="fa-solid fa-xmark"></i></button>
            </ul>
            <button className="btn-nav" onClick={handleOpenMenu}><i className="fa-solid fa-bars"></i></button>
        </nav>
        
    </header>
    <h1 className="main-title">Our Happily Ever After</h1>
    <p className="lead-text">Our lovestory began on a sunny day in the park. Where we first laid eyes on each other.</p>
    </>
    )
}

export default Navbar;