import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
interface TodoFormProps {
  name?: string;
}
const TodoForm: React.FunctionComponent<TodoFormProps> = ({
  name
}: TodoFormProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Add a TODO</h1>
      <Formik
        initialValues={{ title: "Title", description: "Description" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
