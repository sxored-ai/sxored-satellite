import axios from 'axios';

export default async function extractSLIK(url, client, file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const result = await axios.post(
      `${url}/extract-ojk-slik/`,
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
    throw new Error(`SLIK OJK extraction failed: ${error.message}`);
  }
}