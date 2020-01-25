import React, { useState } from "react";
import { FaTrash, FaEdit, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SingleTodoProps {
  name?: string;
}
const SingleTodo: React.FunctionComponent<SingleTodoProps> = ({
  name
}: SingleTodoProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className={"todoCard"}>
      <div className="card">
        <label className="checkbox">
          <input type="checkbox" />
        </label>

        <p> Buy Milk</p>
        <p> 25-01-2020</p>
        {!open && <button onClick={() => setOpen(true)}> Open </button>}
        {open && (
          <>
            <button onClick={() => setOpen(false)}> Close </button>

            <p> Buy Milk from Rewe</p>
            <FaTrash></FaTrash>
            <FaEdit></FaEdit>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleTodo;
