import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import uuidv4 from "uuid/v4";

interface InitialValues {
  title: string;
  description: string;
  dueDate: string;
}

interface TodoFormProps {
  addTodo: Function;
  initialValues?: InitialValues;
  todoId?: string;
}
const DEFAULT_DATE = "";

const generateNewId = () => {
  const id = uuidv4();
  console.log("id: ", id);
  return id;
};
const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  addTodo,
  initialValues,
  todoId
}: TodoFormProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const inValues =
    initialValues !== undefined
      ? initialValues
      : {
          title: "",
          description: "",
          dueDate: DEFAULT_DATE
        };
  console.log("inValues: ", inValues);

  return (
    <section className="section">
      <div className="card">
        <Formik
          initialValues={inValues}
          validate={values => {
            const errors = {};
            if (values.title === "") {
              errors["title"] = "Title Required";
            }
            if (values.dueDate === DEFAULT_DATE) {
              errors["dueDate"] = "Date Required";
            }
            if (values.description === "") {
              errors["description"] = "Description Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            var submittedValues = values;
            submittedValues["id"] =
              todoId === undefined ? generateNewId() : todoId;
            addTodo(submittedValues);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                className="input"
                type="text"
                name="title"
                placeholder="Title"
              />
              <ErrorMessage name="title" component="span" />
              <Field
                className="input"
                type="text"
                name="description"
                placeholder="Description"
              />
              <ErrorMessage name="description" component="span" />
              <Field
                className="input"
                type="date"
                name="dueDate"
                placeholder="Date"
              />
              <ErrorMessage name="dueDate" component="span" />
              <br />
              <button
                className={"button"}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default TodoForm;
