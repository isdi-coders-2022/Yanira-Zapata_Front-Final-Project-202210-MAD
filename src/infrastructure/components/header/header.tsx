import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to="AboutUs">
                    <p>About us</p>
                </Link>
            </div>
            <div>
                <Link to="cart">
                    <img src={'./assets/cart.png'} alt="cart" />
                </Link>
            </div>
            <div className="logo">
                <Link to="resources">
                    <img src={'./assets/logo.jpg'} width="92px" alt="logo" />
                </Link>
            </div>
        </header>
    );
}
