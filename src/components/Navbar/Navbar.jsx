import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><a href="/main">Обо мне</a></div>
            <div><a href="/dialogs">Мой опыт</a></div>
            <div><a href="#">Мои навыки</a></div>
            <div><a href="#">Мои работы</a></div>
            <div><a href="#">Прайс-лист</a></div>
        </nav>
    )
}

export default Navbar