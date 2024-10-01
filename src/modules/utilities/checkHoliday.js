import axios from 'axios';

export default async function checkHoliday(url, client, data) {
  try {
    const result = await axios.post(
      `${url}/check-holiday`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": client,
        },
      }
    );

    return result;
  } catch (error) {
    throw new Error(`Find nearest object failed: ${error.message}`);
  }
}