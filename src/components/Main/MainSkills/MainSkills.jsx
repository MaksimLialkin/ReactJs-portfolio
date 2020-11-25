import classes from '../Main.module.css'
import SkillsPost from './SkillsPost/SkillsPost';

const MainSkills = () => {

    let SkillsData = [
        {
            id: 1, title: 'Web-разработка', text: 'Процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера, а также конфигурирование веб-сервера.'
        },
        {
            id: 2, title: 'UI/UX Design', text: 'UX-дизайн отвечает за функции, адаптивность продукта и то, какие эмоции он вызывает у пользователей. Чем понятнее интерфейс, тем легче пользователю получить результат и совершить целевое действие.'
        },
        {
            id: 3, title: 'Разработка приложений', text: 'Разработка приложений для мобильных устройств — это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны.'
        }
    ]

    let SkillsElements = SkillsData.map(skills => <SkillsPost id={skills.id} title={skills.title} text={skills.text} />)

    return (
        <div>
            <div className={classes.main_skills}>
                {SkillsElements}
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add skills</button>
            </div>
        </div>
    )
}
export default MainSkills;