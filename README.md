
## Context

This is a repo to confirm that Next does indeed apply the "development" condition to `@emotion/react` when running in development mode.  

See [this repo for reference](https://github.com/garronej/vike-dual-package-repo-repo).  

The interesting part is in [src/app/page.tsx](src/app/page.tsx).

![image](https://github.com/user-attachments/assets/a9b395b1-06a1-4d2e-abe7-ee5a40cf922c)  

<img width="1513" alt="image" src="https://github.com/user-attachments/assets/67040026-b4de-4a54-8a3b-a9653876c6a4">  

## Step to reproduce

```bash
git clone https://github.com/garronej/next-dual-package-repo-repo
cd next-dual-package-repo-repo
yarn install
yarn dev
```

Navigate to `http://localhost:3000/` and open the console.  

There is no error. Everything is working as expected.  

## Debug help

To track what condition are used to import `@emotion/react` you can run:  

```bash
npx patch-package
yarn dev
```



