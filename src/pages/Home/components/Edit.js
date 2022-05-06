import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  //state
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //set state
  function noteChange(e) {
    setNote(e.target.value);
  }
  function dateChange(e) {
    setDate(e.target.value);
  }
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add((prevData) => [
      {
        id: v4(),
        note,
        date,
        time,
      },
      ...prevData
    ]);
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};
export default Edit;
