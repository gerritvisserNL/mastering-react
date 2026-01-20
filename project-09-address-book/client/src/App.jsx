import "./App.css";
import { useState, useEffect, useRef } from "react";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "./services/api";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function App() {
  const formRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    try {
      if (editingContact) {
        // Update mode
        const updatedContact = await updateContact(editingContact.id, {
          firstName,
          lastName,
          email,
          phone,
        });

        setContacts((prev) =>
          prev.map((c) => (c.id === editingContact.id ? updatedContact : c)),
        );
        setEditingContact(null);
      } else {
        // Create mode
        const newContact = await createContact({
          firstName,
          lastName,
          email,
          phone,
        });

        // Add newContact to state
        setContacts((prev) => [...prev, newContact]);
      }

      // Reset form
      resetForm();
    } catch (err) {
      alert("Failed to add contact: " + err.message);
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setEmail(contact.email);
    setPhone(contact.phone);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      await deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Failed to delete contact: " + err.message);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setEditingContact(null);
  };

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <div className="inner-container">
        <header>
          <h1>Address book</h1>
        </header>
        <main>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="field-wrapper">
              <label htmlFor="firstname">First name:</label>
              <input
                id="firstname"
                value={firstName}
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="field-wrapper">
              <label htmlFor="lastname">Last name:</label>
              <input
                id="lastname"
                value={lastName}
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="joe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                placeholder="+31 6 12345678"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="addBtn">
              {editingContact ? "Update Contact" : "Add Contact"}
            </button>
            {editingContact && (
              <button type="button" className="cancelBtn" onClick={resetForm}>
                Cancel
              </button>
            )}
          </form>

          <h2>Contacts</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td>{contact.email}</td>
                  <td>
                    <div className="actionBtn-wrapper">
                      <button
                        type="button"
                        className="editBtn"
                        onClick={() => handleEdit(contact)}
                      >
                        <FiEdit className="edit-icon" />
                      </button>
                      <button
                        type="button"
                        className="deleteBtn"
                        onClick={() => handleDelete(contact.id)}
                      >
                        <FiTrash2 className="delete-icon" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
