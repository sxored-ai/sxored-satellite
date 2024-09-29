import axios from 'axios';

export default async function housePriceExtend(url, client, data) {
  try {
    const result = await axios.post(
      `${url}/check-housing-price-extend`,
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
    throw new Error(`Check housing price failed: ${error.message}`);
  }
}