import classes from './Main.module.css'

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main_photo}></div>
            <div className="main_title">Обо мне</div>
            <div className="main_name">Максим</div>
            <div className="main_description">Lorem</div>
            <div className="main_post">Posts</div>
        </div>
    )
}

export default Main