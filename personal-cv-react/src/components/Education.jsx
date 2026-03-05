import Card from "./Card";

function Education({ education }) {
  return (
    <Card title="Education">
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.level}</td>
              <td>{item.institution}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Education;