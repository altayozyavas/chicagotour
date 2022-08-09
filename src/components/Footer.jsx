import "../styles/Footer.css";
import { Link } from "react-router-dom"

function getFullYear() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="Footer">
            <Link to="author">Altay Ozyavas Copyright {getFullYear()}</Link>
        </footer>
    )
}

export default Footer;
