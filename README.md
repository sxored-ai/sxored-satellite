```
 ######   ##    ##   #######   ########   ########  ########
##    ##   #    #   ##     ##  ##     ##  ##        ##     ##
##          #  #    ##     ##  ##     ##  ##        ##     ##
 ######      ##     ##     ##  ########   ######    ##     ##
      ##    #  #    ##     ##  ##   ##    ##        ##     ##
##    ##   #    #   ##     ##  ##    ##   ##        ##     ##
 ######   ##    ##   #######   ##     ##  ########  ########

==============================================================
 Sxored's Satellite - JavaScript Version
==============================================================
```

<div align="center">

### Framework for building Loan Origination Assistants

<p>

[![npm shield](https://img.shields.io/npm/v/sxored-js)](https://www.npmjs.com/package/sxored-js)
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/sxored-ai/sxored-satellite" /> 
<img alt="" src="https://img.shields.io/github/repo-size/sxored-ai/sxored-satellite" /> <img alt="GitHub Issues" src="https://img.shields.io/github/issues/sxored-ai/sxored-satellite" /> <img alt="Github License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

</div>

# Sxored.js (Satellite)

Satellite is a JavaScript/TypeScript SDK for easy integration with the Sxored AI. 
It provides simple methods to extract information from ID cards (KTP), bank statements and such.

## 1. Installation

You can install the Sxored's Satellite using npm:

```bash
npm install sxored-js
```

or yarn:

```bash
yarn add sxored-js
```

## 2. Usage

### Initialization

First, import and initialize the SDK with your API key:

```javascript
import Satellite from 'sxored-js';

const client = new Satellite({
  // Must be registered as PT. Sxored Veritas Finansial's client.
  apiKey: 'your-api-key-here' 
});
```

<br/>

## 2. 1. Module: Personal Information
### Extracting Information from an ID Card

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractIdCard(file);
  console.log('ID Card data:', result.data);
} catch (error) {
  console.error('ID Card extraction failed:', error);
}
```

### Extracting Information from Payslip

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractPaySlip(file);
  console.log('Payslip data:', result.data);
} catch (error) {
  console.error('Payslip extraction failed:', error);
}
```

### Extracting Information from Deed of Establishment

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractDeed(file);
  console.log('Deed data:', result.data);
} catch (error) {
  console.error('Deed extraction failed:', error);
}
```

<br/>

## 2. 2. Module: Financial Information

### Extracting Information from a Bank Statement

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractBankStatement(file, password);
  console.log('Bank Statement data:', result.data);
} catch (error) {
  console.error('Bank Statement extraction failed:', error);
}
```

### Extracting Information from OJK SLIK

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractSLIK(file);
  console.log('OJK SLIK data:', result.data);
} catch (error) {
  console.error('OJK SLIK extraction failed:', error);
}
```

<br/>

## 2. 3. Module: Collateral Information

### Extracting Information from a Property Tax

```javascript
const file = // ... your File object (e.g., from a file input)

try {
  const result = await client.extractPBB(file);
  console.log('Property tax data:', result.data);
} catch (error) {
  console.error('Property tax extraction failed:', error);
}
```

### Searching Nearest Point of Interest from Tax Object

```javascript
const data = {
  address: "address of tax object",
  radius: "in kilometer"
}

try {
  const result = await client.findNearestPlace(data);
  console.log('Places found:', result.data);
} catch (error) {
  console.error('Places searching failed:', error);
}
```

### Searching Nearest Mass Org Office/Base from Tax Object

```javascript
const data = {
  keyword: "kantor ormas",
  address: "address of tax object",
  radius: "in kilometer"
}

try {
  const result = await client.findOrmas(data);
  console.log('Places found:', result.data);
} catch (error) {
  console.error('Places searching failed:', error);
}
```

### Searching Property Prices Around Tax Object

```javascript
const data = {
  address: "address of tax object"
}

try {
  const result = await client.housePrice(data);
  console.log('Prices found:', result.data);
} catch (error) {
  console.error('Prices searching failed:', error);
}
```

<br/>

## 2. 4. Module: Utility

### Check for Holiday

```javascript
const data = {
  date: "2024-10-10",
  timezone: "Asia/Jakarta"
}

try {
  const result = await client.checkHoliday(data);
  console.log('Data:', result.data);
} catch (error) {
  console.error('Data fetch failed:', error);
}
```

## 3. API Reference

### `new Satellite(config)`

Creates a new instance of the SDK.

- `config.apiKey` (string, required): Your Sxored Satellite API key

<br>

### `client.extractIdCard(file)`
### `client.extractPBB(file)`

Extracts information from an image.

- `file` (File | Buffer): The image file

Returns a Promise that resolves with the extracted data.

<br>

### `client.extractPaySlip(file)`
### `client.extractDeed(file)`
### `client.extractSLIK(file)`

Extracts information from PDF file (no password).

- `file` (File | Buffer): The PDF file

Returns a Promise that resolves with the extracted data.

<br>

### `client.extractBankStatement(file, password)`

Extracts information from PDF file (encrypted).

- `file` (File | Buffer): The bank statement file (typically a PDF)
- `password` (String): The bank statement PDF password (typically user birthdate)

Returns a Promise that resolves with the extracted bank statement data.

<br>

### `client.findNearestPlace(data)`

Get point of interest information from a JSON object 
```js
data = {
  address: str, 
  radius: int
}
```

- `data` (Record<string, any>): The JSON data to extract information from

Returns a Promise that resolves with the places data.

<br>

### `client.findOrmas(data)`

Get specific place information from a JSON object 
```js
data = {
  keyword: str,
  address: str, 
  radius: int
}
```

- `data` (Record<string, any>): The JSON data to extract information from

Returns a Promise that resolves with the places data.

<br>

### `client.housePrice(data)`

Get prices information from a JSON object 
```js
data = {
  address: str
}
```

- `data` (Record<string, any>): The JSON data to extract information from

Returns a Promise that resolves with the prices data.

<br>

## 4. Example (React)

Here's a simple example of how to use the SDK in a React component:

```jsx
import React, { useState } from 'react';
import Satellite from 'sxored-js';

const sdk = new Satellite({ apiKey: 'your-api-key-here' });

const DocumentExtractor = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      let extractionResult;
      if (type === 'idcard') {
        extractionResult = await sdk.extractIdCard(file);
      } else {
        extractionResult = await sdk.extractBankStatement(file, password);
      }
      setResult(extractionResult);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Document Extractor</h1>
      <div>
        <h2>ID Card</h2>
        <input type="file" onChange={(e) => handleFileUpload(e, 'idcard')} />
      </div>
      <div>
        <h2>Bank Statement</h2>
        <input type="file" onChange={(e) => handleFileUpload(e, 'bankStatement')} />
      </div>
      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </div>
  );
};

export default DocumentExtractor;
```

## 5. TypeScript Support

This SDK includes TypeScript declarations. You can use it in your TypeScript projects without any additional setup.

## 6. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.