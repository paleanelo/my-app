import './style.css';

function Header ({links}) {

    return (
        <header>
            <ul>
                {
                    links.map((link ) => {
                        return <li key={link.href}><a href={link.href}>{link.title}</a></li>
                    })
                }
            </ul>
        </header>
    );
}

export default Header;