import React, { useState } from "react";
import { FaTrash, FaEdit, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Todo } from "../types";
import moment from "moment";
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
        <label className="checkbox">
          <input type="checkbox" />
        </label>

        <p> {title}</p>
        <p> {date} </p>
        {!open && <button onClick={() => setOpen(true)}> Open </button>}
        {open && (
          <>
            <button onClick={() => setOpen(false)}> Close </button>

            <p> {description}</p>
            <span onClick={() => onDelete(id)}>
              <FaTrash></FaTrash>{" "}
            </span>
            <FaEdit></FaEdit>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleTodo;
