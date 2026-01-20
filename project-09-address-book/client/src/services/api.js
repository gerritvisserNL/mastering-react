// src/services/api.js
const BASE_URL = "http://localhost:4000/contacts";

export const getContacts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
};

export const createContact = async (contact) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  if (!res.ok) throw new Error("Failed to create contact");
  return res.json();
};

export const updateContact = async (id, contact) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });

  if (!res.ok) throw new Error("Failed to update contact");
  return res.json();
};

export const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete contact");
};
