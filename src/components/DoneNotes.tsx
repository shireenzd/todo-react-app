import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function DoneNotes({
  doneNotes,
  deleteDoneNote,
  moveDoneToNote,
}: {
  doneNotes: any;
  deleteDoneNote: Function;
  moveDoneToNote: Function;
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(true);
  }, [doneNotes]);

  const handleCheckboxChange = () => {
    moveDoneToNote(doneNotes.id);
    setIsChecked(!isChecked);
  };

  return (
    <div className="noteForm bg-gray-900 text-black w-full p-4 rounded-xl m-2 border-2 border-white ">
      <div className="header flex justify-between gap-4">
        <div className="flex gap-4" style={{ textDecoration: "line-through" }}>
          <p className="font-bold">({doneNotes.priority})</p>
          <p className="font-bold">{doneNotes.title}</p>
        </div>
        <div className="flex gap-4">
          <p className="text-gray-500 font-bold">{doneNotes.days}days</p>
          <input
            type="checkbox"
            name="chechbox"
            id="chechbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="p-2">
          <p style={{ textDecoration: "line-through" }}>{doneNotes.content} </p>
        </div>
        <div className="p-2 flex flex-col justify-end items-end">
          <p className="text-white">
            <FontAwesomeIcon icon={faPencil} />
          </p>
          <p
            className="text-white"
            onClick={() => deleteDoneNote(doneNotes.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoneNotes;
