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
}
const DEFAULT_DATE = "";

const generateNewId = () => {
  const id = uuidv4();
  console.log("id: ", id);
  return id;
};
const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  addTodo,
  initialValues
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
        <h1>Add a TODO</h1>
        <Formik
          initialValues={inValues}
          validate={values => {
            const errors = {};
            if (values.title === "") {
              errors["title"] = "← Title Required";
            }
            if (values.dueDate === DEFAULT_DATE) {
              errors["dueDate"] = "← Date Required";
            }
            if (values.description === "") {
              errors["description"] = "← Description Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            var submittedValues = values;
            submittedValues["id"] = generateNewId();
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
              <Field type="date" name="dueDate" placeholder="Date" />
              <ErrorMessage name="dueDate" component="span" />
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
