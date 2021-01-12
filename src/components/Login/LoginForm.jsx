import React from "react"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"remember me"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm