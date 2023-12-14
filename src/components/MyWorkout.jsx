import { useRef } from "react";

const MyWorkout = ({ post }) => {
  let workoutRef = useRef(null);

  function workoutDel() {
    workoutRef.current.remove();
  }

  return (
    <div
      ref={workoutRef}
      сlassName="workout-content"
      style={{
        padding: "2.5vh",
        marginBottom: "5vh",

        display: "flex",
        justifyContent: "space-evenly",
        background: "#aaadb9",
        border: "1px solid black",
        borderRadius: "50px",
      }}
    >
      <div className="workout-content__disable">{post.date}</div>
      <div className="workout-content__disable">{post.run + " км"}</div>
      <div className="workout-content__disable">
        <button className="btn-change"></button>
        <button className="btn-delete" onClick={workoutDel}></button>
      </div>
    </div>
  );
};
export default MyWorkout;
