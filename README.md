## Problem

When there are two pending signature requests, when one is signed, the signed value is returned to both callers
- Expected: the respected signed values are return to each caller

## Getting Started

First, run the development server:

```bash
npm install .
npm run dev
```

## Recreate

1. Enter `1` in the text input
2. Click the button to trigger a signature request
3. Ignore the signature popup request from argent

4. Enter `2` in the text input
5. Click the button to trigger a signature request
6. Click SIGN on the request from Argent

7. See that two new signatures (both for `2`) are added when only one signature is signed

