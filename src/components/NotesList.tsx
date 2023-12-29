import Note from "./Note";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import DoneNotes from "./DoneNotes";

function NotesList({
  note,
  deleteNote,
  editNote,
  sortNotesAsc,
  sortNotesDesc,
  sortNotesAscTime,
  deleteDoneNote,
  doneNotes,
  sortDoneNotesAscTime,
  sortDoneNotesAsc,
  sortDoneNotesDesc,
  moveNoteToDone,
  moveDoneToNote,
  searchTerm,
}: {
  note: Array<any>;
  deleteNote: Function;
  editNote:Function;
  sortNotesAsc: Function;
  sortNotesDesc: Function;
  sortNotesAscTime: Function;
  deleteDoneNote: Function;
  doneNotes: any;
  sortDoneNotesAscTime: Function;
  sortDoneNotesAsc: Function;
  sortDoneNotesDesc: Function;
  moveNoteToDone: Function;
  moveDoneToNote: Function;
  searchTerm: string;
}) {
  const filteredNotes = note.filter((n: any) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-around ">
      <div className="m-2 p-2 w-1/2">
        <div className="flex gap-4">
          <h1 className="font-bold ml-8">todo items:</h1>
          <div className="flex gap-2 ">
            <p onClick={() => sortNotesAsc()}>
              <FontAwesomeIcon icon={faSortUp} />
            </p>
            <p onClick={() => sortNotesDesc()}>
              <FontAwesomeIcon icon={faSortDown} />
            </p>
            <p onClick={() => sortNotesAscTime()}>
              <FontAwesomeIcon icon={faClock} />
            </p>
          </div>
        </div>
        {filteredNotes.map((note: any) => {
          return (
            <Note
                  note={note}
                  deleteNote={deleteNote}
                  moveNoteToDone={moveNoteToDone} editNote={editNote}            />
          );
        })}
      </div>
      <div className="m-2 p-2 w-1/2">
        <div className="flex gap-4">
          <h1 className="font-bold ml-8">done items:</h1>
          <div className="flex gap-2">
            <p onClick={() => sortDoneNotesAsc()}>
              <FontAwesomeIcon icon={faSortUp} />
            </p>
            <p onClick={() => sortDoneNotesDesc()}>
              <FontAwesomeIcon icon={faSortDown} />
            </p>
            <p onClick={() => sortDoneNotesAscTime()}>
              <FontAwesomeIcon icon={faClock} />
            </p>
          </div>
        </div>
        {doneNotes.map((doneNotes: any) => {
          return (
            <DoneNotes
              doneNotes={doneNotes}
              deleteDoneNote={deleteDoneNote}
              moveDoneToNote={moveDoneToNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesList;
