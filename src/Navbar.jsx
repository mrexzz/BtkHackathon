import { NavLink} from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" id="navbar"href="/">
            <img src="https://www.onlygfx.com/wp-content/uploads/2017/10/grunge-x-1.png" width="40" height="40" className="d-inline-block align-top" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                        <NavLink className="nav-link mx-2 " to="/Home">Home</NavLink>
                        <NavLink className="nav-link mx-2 " to="/project">Projemiz</NavLink>  
                        <NavLink className="nav-link mx-2" to="/about">Hakkımızda</NavLink>                      
                        <NavLink className="mx-2 btn btn-dark justify-content-end" to="/contact">İletişim</NavLink>   
                </ul>
            </div>
            {/* <a className="navbar-brand" id="navbar"href="/profile"> */}
            <img src="https://static.thenounproject.com/png/2265555-200.png" width="40" height="40" className="d-inline-block align-top margintry" alt="logo" />
        </nav>
    );
}
export default Navbar;