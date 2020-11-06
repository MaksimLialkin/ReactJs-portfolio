import React from 'react';
import classes from './Main.module.css'
import MainDescription from './MainDescription/MainDescription';
import MainSkills from './MainSkills/MainSkills';

const Main = () => {
    return (
        <div className={classes.main_wrapper}>
            <div className={classes.main_photo}></div>
            <MainDescription />
            <MainSkills />
        </div>
    )
}

export default Main