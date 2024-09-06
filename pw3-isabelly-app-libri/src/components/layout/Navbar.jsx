import style from './Navbar.module.css'
import { Link, Outlet } from 'react-router-dom';

const NavBar = () =>{

    return(

        <>

        <nav className={style.NavBar}>


        <ul className={style.list}>
        <Link to='/'>
            <li className={style.item}><img className={style.logo} src="./book.png"/></li>
        </Link>

        <Link to='/'>
            <li className={style.item}>HOME</li>
        </Link>

        <Link to='/createBooks'>
            <li className={style.item}>CADASTRAR LIVROS</li>
        </Link>

        <Link to='/listBooks'>
            <li className={style.item}>LISTAR LIVROS</li>
        </Link>

        </ul>
        </nav>
        <Outlet/>
        </>

        


    )


}

export default NavBar;