import "./Event.css";

export default function Event({ count, setCount, name, setName }) {
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="exo">
      <button onClick={handleClick}>click me! {count}</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}.</p>
    </div>
  );
}
