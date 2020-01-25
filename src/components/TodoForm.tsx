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

  return (
    <div>
      <h1>Add a TODO</h1>
      <Formik
        initialValues={{
          title: "Title",
          description: "Description",
          date: "2020-01-01"
        }}
        onSubmit={(values, { setSubmitting }) => {
          var submittedValues = values;
          submittedValues["id"] = generateNewId();
          console.log("submittedValues: ", submittedValues);
          addTodo(submittedValues);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <Field type="text" name="description" />
            <Field type="date" name="date" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
