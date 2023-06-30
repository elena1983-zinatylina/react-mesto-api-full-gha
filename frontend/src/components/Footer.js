function Footer({ loggedIn }) {
    return (
        <footer className={loggedIn ? 'footer' : 'footer_invisible'}>
            <p className="footer__copyright"> &#169; {new Date().getFullYear()} Зинатулина Елена</p>
        </footer>
    );
}

export default Footer;
