import "../Footer.css";

function getFullYear() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="Footer">
            Altay Ozyavas copyright {getFullYear()}
        </footer>
    )
}

export default Footer;
