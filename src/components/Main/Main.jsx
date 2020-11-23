import classes from './Main.module.css'
import MainSkills from './MainSkills/MainSkills'

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main_wrapper}>
                <div className={classes.main_photo}></div>
                <div className={classes.main_descr}>
                    <h2 className={`${classes.title} ${classes.title_fz20} ${classes.subtitle}`}>Обо мне</h2>
                    <div className={classes.main_name}>Меня зовут Максим</div>
                    <div className={classes.devider}></div>
                    <p className={classes.main_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium repellat tenetur libero veritatis dolores architecto reprehenderit unde blanditiis laborum, nostrum, labore earum. Architecto molestias quos fugit nemo quo sapiente temporibus.</p>
                </div>
                <MainSkills />
            </div>
        </div>
    )
}
export default Main;