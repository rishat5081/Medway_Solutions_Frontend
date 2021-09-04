import style from '../styles/Component.module.css';
import Link from 'next/link'



const Navbar = ({ header, titleImage }) => {
    //setting the linear gradient because in css file it is not working
    console.log();
    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={titleImage} alt="Pic" width="auto" height="78px" />
                    <h1>Medway</h1>
                </div>
                <ul className={`${style.headerUL}  nav navbar-nav navbar-right`}>
                    {header.map(head =>
                        <li key={head.id}>
                            <Link href={head.url}>
                                <a>{head.name}</a>
                            </Link>
                        </li>)}
                </ul>
            </header>
        </>);
}

export default Navbar;