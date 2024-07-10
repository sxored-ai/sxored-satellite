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

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readIdCard(selected_file)
```

### 2. Read PDF files

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readPdf(selected_file)
```

### 3. Read PDF Metadata

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readMetadata(selected_file)
```

### 4. Check for potential fraud

```typescript
const client = new SxoredSatellite('X_API_TOKEN');
client.readPdfFraud(selected_file)
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
