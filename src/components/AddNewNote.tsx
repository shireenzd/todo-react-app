import { useState ,useEffect} from "react";

function AddNewNote({
  addNote,
  showAddNote,
  setShowAddNote,
  noteBeingEdited
}: {
  addNote: Function;
  showAddNote: any;
  setShowAddNote: any;
  noteBeingEdited:any
}) {
  const [noteContent, setNoteContent] = useState("");
  const [notePriority, setNotePriority] = useState("");
  const [noteDays, setNoteDays] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  useEffect(() => {

    if (noteBeingEdited) {
    setNoteContent(noteBeingEdited.content || '');
    setNotePriority(noteBeingEdited.priority || '');
    setNoteDays(noteBeingEdited.days || '');
    setNoteTitle(noteBeingEdited.title||'')
    }
  }, [noteBeingEdited]);

  const handleContentChange = (event: any) => {
    setNoteContent(event.target.value);
  };

  const handlePriorityChange = (event: any) => {
    setNotePriority(event.target.value);
  };

  const handleDaysChange = (event: any) => {
    setNoteDays(event.target.value);
  };
  const handleTitleChange = (event: any) => {
    setNoteTitle(event.target.value);
  };

  const handleSubmit = () => {
    const newNote = {
      priority: notePriority,
      title: noteTitle,
      days: noteDays,
      content: noteContent,
    };

    addNote(newNote);
    setShowAddNote(false);
  };

  return (
    <div
      className={`${
        showAddNote ? "flex" : "hidden"
      }  flex-col bg-black text-white p-4 justify-start items-center rounded-xl absolute top-36 right-12 left-12 `}
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title..."
        onChange={handleTitleChange}
        value={noteTitle}
        className="py-2 px-14 border-2 border-black text-black rounded-xl"
      />
      <textarea
        name="textarea"
        id="textarea"
        className="w-1/4 rounded-xl border-2 border-black p-2 text-black"
        placeholder="write your Todo note here..."
        onChange={handleContentChange}
        value={noteContent}
      />

      <label htmlFor="note-priority">Priority</label>
      {[1, 2, 3, 4, 5].map((priority) => {
        return (
          <span key={priority} className="flex gap-4 items-center">
            <input
              type="radio"
              name="priority"
              id={"priority-" + priority}
              value={priority}
              checked={notePriority === "" + priority}
              onChange={handlePriorityChange}
            />
            <label htmlFor={"priority-" + priority}>
              {"priority-" + priority}
            </label>
          </span>
        );
      })}
      <div className="flex flex-col">
        <label htmlFor="days"> due date:</label>
        <input
          type="number"
          name="days"
          id="days"
          placeholder="number of days"
          onChange={handleDaysChange}
          value={noteDays}
          className="text-black rounded-xl p-2 border-2 border-black"
        />
      </div>
      <div>
        <button
          type="button"
          className="p-2 bg-orange-500 text-black rounded-xl m-2"
          onClick={handleSubmit}
        >
          add note
        </button>
      </div>
    </div>
  );
}

export default AddNewNote;
