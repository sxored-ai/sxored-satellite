import axios from 'axios';

export default async function extractDeed(url, client, file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const result = await axios.post(
      `${url}/extract-akta-pendirian/`,
      formData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
          "x-api-key": client,
        },
      },
    );

    return result;
  } catch (error) {
    throw new Error(`Deed of establishment extraction failed: ${error.message}`);
  }
}