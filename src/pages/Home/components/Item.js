const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {
    deleteData((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};
export default Item;
