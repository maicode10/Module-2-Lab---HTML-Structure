import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message || "Unexpected error.");
    })
    .catch(err => {
      alert("Error: " + err.message);
    });
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button type="button" onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Contact;