import axios from 'axios';

export default async function extractPBB(url, client, file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const result = await axios.post(
      `${url}/read-img-pbb/`,
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
    throw new Error(`PBB extraction failed: ${error.message}`);
  }
}