import axios from 'axios';

export default async function findNearestPlace(url, client, data) {
  try {
    const result = await axios.post(
      `${url}/check-point-of-interest`,
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