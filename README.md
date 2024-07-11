<div align="center">

# Sxored's Satellite JavaScript Version

### Framework for building Loan Origination Assistants

<p>

[![npm shield](https://img.shields.io/npm/v/sxored-satellite)](https://www.npmjs.com/package/sxored-satellite)
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/sxored-ai/sxored-satellite" /> 
<img alt="" src="https://img.shields.io/github/repo-size/sxored-ai/sxored-satellite" /> <img alt="GitHub Issues" src="https://img.shields.io/github/issues/sxored-ai/sxored-satellite" /> <img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

</div>

-----

Satellite is Sxored's official SDK that enables any client to integrate production ready AI powered loan origination assistant into any application in a matter of minutes.

-----

<br/>

## Installation

Add this dependency to your project's build file:

```bash
npm install sxored-satellite

# or

yarn add sxored-satellite
```

## Example usage in React component
```typescript
import React, { useState } from 'react';
import SxoredSatellite from 'sxored-satellite';

const apiSdk = new SxoredSatellite('X_API_TOKEN');

const FileUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const uploadIdCard = async () => {
    if (file) {
      setLoading(true);
      setError(null);
      try {
        const res = await apiSdk.readIdCard(file);
        setResponse(JSON.stringify(res.data, null, 2));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>File Uploader</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadIdCard} disabled={!file || loading}>Upload ID Card</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default FileUploader;

```

## Functions

### 1. Read ID Card photo (OCR replacement)

#### Request

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readIdCard(selected_file)
```

#### Response 200

```json
{
  "name": "ELON MUSK",
  "nik": "3201072011780010",
  "place": "YOGYAKARTA",
  "dob": "20-11-1978",
  "gender": "LAKI-LAKI",
  "nationality": "WNA",
  "religion": "ISLAM",
  "address": "PERSADA RAYA JALAN AMERIKA",
  "rt_rw": "007/007",
  "village": "GEMBOR",
  "district": "PERIUK",
  "city": "KOTA TANGERANG",
  "province": "PROVINSI BANTEN",
  "marriage_status": "KAWIN",
  "occupation": "MENGURUS RUMAH TANGGA"
}
```

### 2. Read PDF files

#### Request

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readPdf(selected_file)
```

#### Response 200

```json
[
  {
    "date": "29-Aug-2023",
    "transaction": "TARIK TUNAI",
    "description": "Tanpa Kategori",
    "category": "Cash Withdrawal",
    "debit": 100000,
    "credit": 0,
    "balance": 0
  },
  {
    "date": "29-Aug-2023",
    "transaction": "TRF/PAY/TOP-UP\nECHANNEL",
    "description": "Tanpa Kategori",
    "category": "Transfer/Top Up",
    "debit": 0,
    "credit": 100000,
    "balance": 100000
  },
  {
    "date": "27-Aug-2023",
    "transaction": "TARIK TUNAI",
    "description": "Tanpa Kategori",
    "category": "Cash Withdrawal",
    "debit": 200000,
    "credit": 0,
    "balance": 0
  },
  ...
]
```

### 3. Read PDF Metadata

#### Request

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readMetadata(selected_file)
```

#### Response 200

```json
{
  "/Title": "CONSOLIDATE: 0098034777 | WAWAN SETYAWAN",
  "/Creator": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "/Producer": "Skia/PDF m126",
  "/CreationDate": "D:20240701033019+00'00'",
  "/ModDate": "D:20240701033019+00'00'"
}
```

### 4. Check for potential fraud

#### Request

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readPdfFraud(selected_file)
```

#### Response 200

```json
{
  "fraud": true,
  "suspicious_transactions": [
    {
      "page_number": 2,
      "transaction_details": "14/08 BI-FAST CR BIF TRANSFER DR 2,600,000.00 9,258,073.87\n501\nV***nny Ku****an",
      "suspicious_reason": "Large credit transfer, potentially exceeding typical income levels. The name 'V***nny Ku****an' is repeated throughout the statement, indicating a potential pattern of suspicious transactions."
    },
    {
      "page_number": 2,
      "transaction_details": "15/08 TRSF E-BANKING CR 1508/FTSCY/WS95031 5,000,000.00 9,236,073.87\n        5000000.00\nA***R L****N",
      "suspicious_reason": "Large credit transfer, potentially exceeding typical income levels.  The beneficiary name 'A***R L****N' is repeated throughout the statement, indicating a potential pattern of suspicious transactions."
    },
    {
      "page_number": 2,
      "transaction_details": "16/08 TRSF E-BANKING CR 1608/FTSCY/WS95031 500,000.00\n         500000.00\nV***nny Ku****an",
      "suspicious_reason": "Large credit transfer, potentially exceeding typical income levels.  The beneficiary name 'V***nny Ku****an' is repeated throughout the statement, indicating a potential pattern of suspicious transactions."
    },
    {
      "page_number": 4,
      "transaction_details": "28/08 BI-FAST CR BIF TRANSFER DR 2,779,000.00 11,144,593.87\n501\nV***nny Ku****an",
      "suspicious_reason": "Large credit transfer, potentially exceeding typical income levels. The name 'V***nny Ku****an' is repeated throughout the statement, indicating a potential pattern of suspicious transactions."
    },
    ...
  ]
}
```

<br/>

## Acknowledgements

To be able to use this SDK, each client must be registered in the client database in SxoredOS. The IP address to access the endpoint must also be whitelisted first.

Contact our [Customer Success](mailto:use@sxored.com) if your business interested to implement our SxoredOS.

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
