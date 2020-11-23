import classes from './Main.module.css'

const Main = () => {
    return (
        <div className={classes.about}>
            <div className={classes.aboutWrapper}>
                <div className={classes.aboutImg}></div>
                <div className={classes.aboutDescr}>
                    <div className={classes.Descr_title}>Про меня</div>
                    <div className={classes.Descr_subtitle}>Меня зовут Максим</div>
                    <div className={classes.divider}></div>
                    <p className={classes.Descr_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nostrum placeat cupiditate vitae similique rerum recusandae dolor sunt natus provident ratione impedit rem, odio unde tempora doloremque tempore non ducimus!</p>
                </div>
                <div className={classes.aboutSkills}>
                    <div className={classes.Skills_item}>
                    </div>
                    <div className={classes.Skills_item}>
                    </div>
                    <div className={classes.Skills_item}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;