import Card from "./card";

function Hobbies({ hobbies }) {
  return (
    <Card title="Hobbies & Interests">
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <strong>{hobby.name}</strong> - {hobby.description}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Hobbies;