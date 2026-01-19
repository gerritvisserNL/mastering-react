// server/src/services/contactsService.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch all contacts
export const getAllContacts = async () => {
  return prisma.contact.findMany({
    orderBy: { lastName: "asc" },
  });
};

// Create a new contact
export const createContact = async ({ firstName, lastName, email, phone }) => {
  return prisma.contact.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
    },
  });
};

// Update contact by ID
export const updateContact = async (id, data) => {
  return prisma.contact.update({
    where: { id },
    data, // data can contain { firstName, lastName, email, phone }
  });
};

// Delete a contact by ID
export const deleteContact = async (id) => {
  return prisma.contact.delete({
    where: { id },
  });
};
