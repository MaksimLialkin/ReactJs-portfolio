import React from 'react';
import classes from './Main.module.css'
import MainDescription from './MainDescription/MainDescription';
import MainSkills from './MainSkills/MainSkills';

const Main = (props) => {

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.main_photo}></div>
            <MainDescription />
            <MainSkills TitleData={props.TitleData} SkillsData={props.SkillsData} />
        </div>
    )
}

export default Main