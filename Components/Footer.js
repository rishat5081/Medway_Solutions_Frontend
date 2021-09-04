import styles from '../styles/Home.module.css'
import ComponentStyles from '../styles/Component.module.css'
import 'font-awesome/css/font-awesome.min.css';
import Link from 'next/link'

const Footer = () => {
    return (<footer className={styles.footer}>
        <div>
            <p>Copyrights@Medway Solutions 2021</p>
        </div>
        <div className={ComponentStyles.developed}>
            Developed by Saad Sohail
            <ul>
                <Link href="/"><p className="fa fa-github"></p></Link>
                <Link href="/"><p className="fa fa-twitter"></p></Link>
                <Link href="/"><p className="fa fa-linkedin"></p></Link>
                <Link href="/"><p className="fa fa-facebook"></p></Link>
            </ul>
        </div>
    </footer>);
}

export default Footer;