// server/src/controllers/contactsController.js
import * as contactsService from "../services/contactsService.js";

// GET /contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactsService.getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// POST /contacts
export const createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  try {
    const contact = await contactsService.createContact({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Failed to create contact (name or email may already exist)",
    });
  }
};

// PUT /contacts/:id
export const updateContact = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, phone } = req.body;

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  if (!name && !email && !phone) {
    return res
      .status(400)
      .json({ error: "At least one field is required to update" });
  }

  try {
    const contact = await contactsService.updateContact(id, {
      name,
      email,
      phone,
    });
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Could not update contact" });
  }
};

// DELETE /contacts/:id
export const deleteContact = async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    await contactsService.deleteContact(id);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Contact not found" });
  }
};
