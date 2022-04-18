import { Field, Form } from "react-final-form"; 


const AddMessage = (props) => {
  return (
    <>
      <Form
        onSubmit={(formObj) => {
          props.addMessages(formObj.message)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="messages__dialogs--form">
            <Field name="message">
              {({ input }) => (
                <textarea
                  className={"messages__dialogs--addmessage"}
                  {...input}
                />
              )}
            </Field>
            <button type="submit" className="messages__dialogs--btn">
              Отправить
            </button>
          </form>
        )}
      </Form>
    </>
  );
}

export default AddMessage