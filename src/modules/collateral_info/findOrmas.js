import axios from 'axios';

export default async function findOrmas(url, client, data) {
  try {
    const result = await axios.post(
      `${url}/search-ormas`,
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
    throw new Error(`Find nearest kantor ormas failed: ${error.message}`);
  }
}