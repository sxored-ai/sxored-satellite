import axios from 'axios';

export default async function reExtractBankStatement(url, client, file, password) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('password', password);

  try {
    const result = await axios.post(
      `${url}/re-extract-bank-statement/`,
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
    throw new Error(`Bank Statement extraction failed: ${error.message}`);
  }
}