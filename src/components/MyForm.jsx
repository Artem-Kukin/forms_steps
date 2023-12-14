import { useState } from "react";
import MyWorkout from "./MyWorkout";

const MyForm = () => {
  const [posts, setPosts] = useState([]);
  const [date, setDate] = useState();
  const [run, setRun] = useState();

  function addNewResult(e) {
    e.preventDefault();

    const newContent = {
      id: Date.now(),
      date,
      run,
    };

    setPosts((posts) => {
      posts.map((post) => {
        if (post.date === newContent.date) {
          let i = posts.indexOf(post);
          newContent.run = Number(post.run) + Number(newContent.run);
          return [posts.splice(i, 1)];
        } else {
          return newContent;
        }
      });
      return [...posts, newContent].sort(compare);
    });

    setDate("");
    setRun("");
  }

  function compare(a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    return dateB - dateA;
  }

  return (
    <>
      <form className="form">
        <fieldset className="form__header">
          <legend>Учёт тренировок</legend>
          <input
            value={date}
            className="form__input"
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
          <input
            value={run}
            className="form__input"
            type="number"
            placeholder="Пройдено км"
            onChange={(event) => setRun(event.target.value)}
          />
          {date && run ? (
            <button className="form__button" onClick={addNewResult}>
              OK
            </button>
          ) : (
            <button
              className="form__button"
              onClick={(e) => e.preventDefault()}
            >
              OK
            </button>
          )}
        </fieldset>
      </form>
      <section className="workout">
        <div className="workout__name">
          <div>Дата (ГГ-ММ-ДД)</div>
          <div>Пройдено км</div>
          <div>Действия</div>
        </div>
        {posts.map((post) => (
          <MyWorkout post={post} />
        ))}
      </section>
    </>
  );
};

export default MyForm;
