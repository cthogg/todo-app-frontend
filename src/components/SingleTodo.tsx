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
        <div className={`level`}>
          <div className="level-left">
            <span
              className={`level-item button is-success`}
              onClick={() => onDelete(id)}
            >
              <FaCheckCircle> </FaCheckCircle>{" "}
            </span>
            <p className="level-item"> {date} </p>

            <p className={`level-item has-text-weight-bold`}> {title}</p>
            <p className="level-item"> {description}</p>
          </div>
          <div className="level-right">
            {/* TODO: make buttons into an icon */}
            {!open && (
              <button className={"button"} onClick={() => setOpen(true)}>
                {" "}
                Edit{" "}
              </button>
            )}
            {open && (
              <button className={"button"} onClick={() => setOpen(false)}>
                {" "}
                Close{" "}
              </button>
            )}
          </div>
        </div>

        {open && (
          <>
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
