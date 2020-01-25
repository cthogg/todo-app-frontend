import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import uuidv4 from "uuid/v4";

interface TodoFormProps {
  addTodo: Function;
}

const generateNewId = () => {
  const id = uuidv4();
  console.log("id: ", id);
  return id;
};
const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  addTodo
}: TodoFormProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const DEFAULT_DATE = "";
  return (
    <section className="section">
      <div className="card">
        <h1>Add a TODO</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            date: DEFAULT_DATE
          }}
          validate={values => {
            const errors = {};
            if (values.title === "") {
              errors["title"] = "← Title Required";
            }
            if (values.date === DEFAULT_DATE) {
              errors["date"] = "← Date Required";
            }
            if (values.description === "") {
              errors["description"] = "← Description Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            var submittedValues = values;
            submittedValues["id"] = generateNewId();
            console.log("submittedValues: ", submittedValues);
            addTodo(submittedValues);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" placeholder="Title" />
              <ErrorMessage name="title" component="span" />
              <Field type="text" name="description" placeholder="Description" />
              <ErrorMessage name="description" component="span" />
              <Field type="date" name="date" placeholder="Date" />
              <ErrorMessage name="date" component="span" />
              <button type="submit" disabled={isSubmitting}>
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
