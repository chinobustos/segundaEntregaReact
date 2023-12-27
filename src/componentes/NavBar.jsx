import CartWidget from "./CartWidget";

const NavBar = ()=>{
    return(
        <div className="navbar">
            <img className="logo" src="/img/logo.jpg" alt="" />
            <ul>
                <li><a href="">Guitarras</a></li>
                <li> <a href="">Bajos</a></li>
                <li> <a href="">Baterias</a></li>
                <li><a href="">Accesorios</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar