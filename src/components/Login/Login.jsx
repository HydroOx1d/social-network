import { Form, Field } from "react-final-form";
import { required } from "../common/validator/validate";


const Login = (props) => {
  return (
    <div className="login">
      <div className="title login__title">
        <h2 className="login__title-text">Логин</h2>
      </div>
      <Form
        onSubmit={(formObj) => {
          let newObj = { ...formObj };
          if (!newObj?.rememberMe) {
            newObj.rememberMe = false;
          }
          // console.log(newObj);
          props.loginThunk(newObj);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form login__form">
            <div className="input login__input">
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <>
                    <input type="text" placeholder="Логин" {...input} />
                    <span>{meta.error && meta.touched && meta.error}</span>
                  </>
                )}
              </Field>
            </div>
            <div className="input login__input">
              <Field name="password" validate={required}>
                {({ input, meta }) => (
                  <>
                    <input type="text" placeholder="Пароль" {...input} />
                    <span>{meta.error && meta.touched && meta.error}</span>
                  </>
                )}
              </Field>
            </div>
            <div className="input login__input">
              <Field name="rememberMe" type="checkbox">
                {({ input }) => <input type="checkbox" {...input} />}
              </Field>
              <span>Запомнить меня</span>
            </div>

            {
              !props.loginSuccess ? (
                <div className="error login__error">
                  <span>{props.errorMessage}</span>
                </div>  
              ) : (
                ''
              )
            }

            <div className="btn-block login__btn-block">
              <button className="btn login__btn">Логин</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Login;
