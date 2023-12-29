import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Note({
  note,
  deleteNote,
  moveNoteToDone,
  editNote
}: {
  note: any;
  deleteNote: Function;
  moveNoteToDone: Function;
  editNote:Function
}) {
  const textColorClass = note.days < 2 ? "text-red-700" : "text-white";
  const iconsColorClass = note.days < 2 ? "text-red-700" : "text-white";

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
  }, [note]);

  const handleCheckboxChange = () => {
    moveNoteToDone(note.id);
    setIsChecked(!isChecked);
  };

  return (
    <div className="noteForm bg-black text-white w-full p-4 rounded-xl m-2 border-2 border-white ">
      <div className="header flex justify-between gap-4">
        <div className="flex gap-4">
          <p className="font-bold">({note.priority})</p>
          <p className="font-bold">{note.title}</p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold text-orange-500">{note.days}days</p>
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
          <p className={`${textColorClass}`}>{note.content} </p>
        </div>
        <div className="p-2 flex flex-col justify-end items-end">
          <p className={`${iconsColorClass}`}
          onClick={()=>editNote(note.id)}>
            {" "}
            <FontAwesomeIcon icon={faPencil} />
          </p>
          <p
            className={`${iconsColorClass}`}
            onClick={() => deleteNote(note.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Note;
