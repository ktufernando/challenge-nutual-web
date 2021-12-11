# Challenge Nutual - Web app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The API is online on Vercel if you want to test it before cloning the source code.

> [https://challenge-nutual-web-f0urms1h9-ktufernando.vercel.app/](https://challenge-nutual-web-f0urms1h9-ktufernando.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Properties configuration

You have to place an `.env.local` file at the root of the project directory, with the properties for your environment.

In this file you can configure:

- API Basepath

        NEXT_PUBLIC_API_BASEPATH = http://localhost:4000/api/v1

#### Properties considerations

###### NEXT_PUBLIC_API_BASEPATH

It is the base path of the API where you raise the services component
