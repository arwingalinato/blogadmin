import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyd2luLm0uZ2FsaW5hdG9AZ21haWwuY29tIiwiX2lkIjoiNjAzYTk2MWRkNTYzZTk4MDViMGQ2NWQ0IiwiZXhwIjoxNjE5NzAzNDU3LCJpYXQiOjE2MTQ1MTk0NTd9.Dw6USxvIRby0c4YeGzi13RyKtPdFV_ecLeqQ3a6F954';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default axios;
