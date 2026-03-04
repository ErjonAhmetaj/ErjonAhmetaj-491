import Room from "./Room";

export default function House({ name }) {
  return (
    <div>
      <h2>House: {name}</h2>

      <Room name="bedroom" houseName={name} />
    </div>
  );
}
