import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Todo } from "../types";
import moment from "moment";
import TodoForm from "./TodoForm";
interface SingleTodoProps {
  todo: Todo;
  onDelete: Function;
  onChange: Function;
}
const SingleTodo: React.FunctionComponent<SingleTodoProps> = ({
  todo,
  onDelete,
  onChange
}: SingleTodoProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { dueDate, title, description, id } = todo;
  //TODO: put moment into a helper file for dates.
  const date = moment(dueDate).format("dddd, MMMM Do");
  return (
    <section className={"todoCard"}>
      <div className="card">
        <span onClick={() => onDelete(id)}>
          {/* TODO: add hover effect
        TODO: make the list horizontal
        TODO: add gap between filter by title and the rest
        TODO: make buttons like with bulma */}
          <FaCheckCircle> </FaCheckCircle>{" "}
        </span>
        <p> {title}</p>
        <p> {date} </p>
        <p> {description}</p>

        {!open && <button onClick={() => setOpen(true)}> Edit </button>}
        {open && (
          <>
            <button onClick={() => setOpen(false)}> Close </button>

            <TodoForm
              addTodo={td => {
                onChange(td);
                setOpen(false);
              }}
              initialValues={{ dueDate: dueDate, title, description }}
              todoId={id}
            >
              {" "}
            </TodoForm>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleTodo;
