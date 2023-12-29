function Header({
  searchNoteTitle,
  toggleAddNoteForm,
}: {
  searchNoteTitle: Function;
  toggleAddNoteForm: Function;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex font-bold w-full justify-center bg-black rounded-xl p-2">
        <h1 className="text-orange-500">tasX </h1>
        <p className="text-white">-get things done</p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => toggleAddNoteForm()}
          className="py-2 px-8 min-w-60 border-2 border-black bg-orange-500 font-bold rounded-xl" >
          +
        </button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search..."
          onChange={(e) => searchNoteTitle(e.target.value)}
          className="p-2 rounded-xl w-full border-2 border-black"
        />
      </div>
      <hr className="h-1 mx-2 my-2 bg-black border-0 rounded-xl" />
    </div>
  );
}

export default Header;
