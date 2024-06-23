# Next.js MongoDB Material-UI Auth Starter Kit

This is a starter kit for building authentication features with Next.js, MongoDB, and Material-UI. It provides a boilerplate for user registration and login functionality.

## Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- npm (>= 6.x.x) or yarn (>= 1.x.x)
- MongoDB (MongoDB Atlas or local MongoDB instance)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/ramsegev/nextjs-mongodb-materialui-auth-starterkit.git
    cd nextjs-mongodb-materialui-auth-starterkit
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your MongoDB connection string:

   **`.env.local`**

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string_here
    ```

### Running the Development Server

To run the development server:

```sh
npm run dev
```

### Running Cypress Tests

#### To run Cypress tests:

1) Open Cypress test runner:

```sh
npm run cypress:open
```

2) Alternatively, to run Cypress tests in headless mode:

```sh
npm run cypress:run
```

## Code Coverage
To generate code coverage reports for your Cypress tests:

Install the dependencies for code coverage:

```sh
npm install @cypress/code-coverage babel-plugin-istanbul --save-dev
```
Add the following configuration to your babel.config.js file:

#### babel.config.js
```
module.exports = {
presets: ['next/babel'],
plugins: ['istanbul'],
};
```

Update your cypress/plugins/index.js to include code coverage:

#### cypress/plugins/index.js
```
const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
codeCoverageTask(on, config);
return config;
};
```

Add the following to your cypress/support/index.js to include code coverage support:

#### cypress/support/index.js
```
import '@cypress/code-coverage/support';
```
Run your Cypress tests in headless mode to generate the coverage report:

```sh
npm run cypress:run
```
The coverage report will be generated in the coverage folder.

## Project Structure
```
nextjs-mongodb-materialui-auth-starterkit/
├── .env.local
├── cypress/
│   ├── integration/
│   │   └── auth.spec.ts
│   ├── support/
│   │   ├── commands.ts
│   │   └── index.ts
│   └── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   └── Layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Layout.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login.ts
│   │   │   │   └── register.ts
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.ts
│   ├── utils/
│   │   └── db.ts
│   └── next-env.d.ts
├── .gitignore
├── babel.config.js
├── global.d.ts
├── jest.config.js
├── package.json
├── README.md
└── tsconfig.json
```