# Next.js 14 Server-Side Rendering Example

## Introduction

This project demonstrates server-side rendering in Next.js 14 using the new `'use server'` directive. It features a page that fetches and displays a list of people from an API. This example showcases the use of server components in Next.js for improved performance and streamlined data fetching directly on the server.

## Prerequisites

- Node.js (LTS version recommended)
- npm
- An AWS account for deployment via AWS Amplify

## Setup Instructions

1. **Clone the GitHub repository:**

```bash
git clone https://github.com/gocallum/person-next-ssr
cd person-next-ssr
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Configuration:**

Create a `.env` file in the root directory (Note: `.env.local` is not used for server components as they run only on the server side). Include the following environment variables:

```plaintext
NEXT_PUBLIC_API_HOSTNAME=https://yourapihostname.com
API_BEARER_TOKEN=YourSecretBearerToken
```

Make sure to replace `https://yourapihostname.com` with your API's URL and `YourSecretBearerToken` with your actual bearer token.

## Running the Project Locally

To start the development server, run:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the application in action.

## Building for Production

To build the project for production, use:

```bash
npm run build
```

## Deploying to AWS Amplify

1. **Navigate to AWS Amplify within the AWS Management Console.**
2. **Create a new application by selecting *Host web app*.**
3. **Connect to the GitHub repository by selecting it and configuring the build settings as prompted. AWS Amplify provides sensible defaults for Next.js applications.**
4. **Complete the setup and deploy your application. AWS Amplify will automatically build and deploy your site, providing a public URL upon completion.**

## Project Structure

The key component using server-side rendering is located at `pages/person-s/page.tsx`, showcasing the use of async data fetching with the `'use server'` directive in Next.js 14. This method enables direct server-side operations, streamlining the process of rendering data-rich components.

## Support and Contributions

For support, suggestions, or contributions, please open an issue in the [GitHub repository](https://github.com/gocallum/person-next-ssr). Contributions are always welcome!

---

### Notes
