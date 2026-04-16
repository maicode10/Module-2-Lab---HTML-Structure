import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px" }}>
      <h2>Contact Me</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={{ width: "300px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ width: "300px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        rows={4}
        style={{ width: "300px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", resize: "none" }}
      />
      <button
        type="button"
        onClick={handleSubmit}
        style={{ width: "300px", padding: "10px", borderRadius: "5px", backgroundColor: "#6a0dad", color: "white", border: "none", cursor: "pointer" }}
      >
        Send
      </button>
    </div>
  );
}

export default Contact;