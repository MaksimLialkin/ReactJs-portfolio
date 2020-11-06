import classes from './MainDescription.module.css'

const MainDescription = () => {
    return <div className={classes.main_descr}>
        <h2 className={`${classes.title} ${classes.title_fz20} ${classes.subtitle}`}>Обо мне</h2>
        <div className={classes.main_name}>Меня зовут Максим</div>
        <div className={classes.devider}></div>
        <p className={classes.main_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium repellat tenetur libero veritatis dolores architecto reprehenderit unde blanditiis laborum, nostrum, labore earum. Architecto molestias quos fugit nemo quo sapiente temporibus.</p>
    </div>
}

export default MainDescription