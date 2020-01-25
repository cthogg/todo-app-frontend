import React, { useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaChevronDown,
  FaChevronUp,
  FaTicketAlt,
  FaCheckCircle
} from "react-icons/fa";
import { Todo } from "../types";
import moment from "moment";
import TodoForm from "./TodoForm";
interface SingleTodoProps {
  todo: Todo;
  onDelete: Function;
}
const SingleTodo: React.FunctionComponent<SingleTodoProps> = ({
  todo,
  onDelete
}: SingleTodoProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { dueDate, title, description, id } = todo;
  //TODO: put moment into a helper file for dates.
  const date = moment(dueDate).format("dddd, MMMM Do");
  return (
    <section className={"todoCard"}>
      <div className="card">
        <span onClick={() => onDelete(id)}>
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
              addTodo={() => alert("Add a PUT request here")}
              initialValues={{ dueDate: dueDate, title, description }}
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
