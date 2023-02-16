import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc5OTBhZjAyNTQ5MWI1OGY0ODNkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjU2Mjk4MywiZXhwIjoxNjc2ODIyMTgzfQ.nW4eWQJnZG8BKTe7T2ooFF4egaO88hmqkEyWgstcj3M';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  heaader: { token: `Bearer ${TOKEN}` },
});
