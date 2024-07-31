import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkApi) => {
    try {
      const response = await axios.post("/contacts", {
        name: name,
        number: number,
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleleContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
