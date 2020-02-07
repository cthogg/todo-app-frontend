import React from "react";
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
  title: string;
}
const DEFAULT_DATE = "";

const generateNewId = () => {
  const id = uuidv4();
  return id;
};
const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  addTodo,
  initialValues,
  todoId,
  title
}: TodoFormProps): JSX.Element => {
  const inValues =
    initialValues !== undefined
      ? initialValues
      : {
          title: "",
          description: "",
          dueDate: DEFAULT_DATE
        };
  return (
    <>
      <p> {title}</p>
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
            <button className={"button"} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TodoForm;
