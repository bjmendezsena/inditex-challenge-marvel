# Inditex-Marvel Challenge

**[Live demo]([https://inditex-challenge-marvel-fho537k98-bjmendezsena.vercel.app/](https://inditex-challenge-marvel-4y58cm6uo-bjmendezsena.vercel.app/))**

## Architecture ⚙️

The chosen architecture is
**[bullet proof react.](https://github.com/alan2207/bulletproof-react)**

It gives us the possibility of decoupling the different layers of the
application and encapsulating both the logic and the UI of each module,
facilitating scalability.

## Project structure 🗄️

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- app               # contain all pages and manage all the application routes based on file names.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
    |
    +-- api           # exported API request declarations and api hooks related to a specific feature
    |
    +-- components    # components scoped to a specific feature
    |
    +-- types         # typescript types for TS specific feature domain
    |
    +-- index.ts      # entry point for the feature, it serves as the public API of the given feature and exports everything that should be used outside the
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- tests             # tests utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

**- Features folder**

In order to scale the application in the easiest and most maintainable way, most
of the code is inside the `features` folder, which contains different
feature-based things. Every `feature` folder contains domain specific code for a
given feature. This allows to keep functionalities scoped to a feature and not
mix its declarations with shared things. This is much easier to maintain than a
flat folder structure with many files.

Everything from a feature is exported from the `index.ts` file which behaves as
the public API of the feature. The elements are imported from other functions
only using:

`import {FeatureComponent} from "@/features/feature"`

and not

`import {FeatureComponent} from "@/features/feature/components/FeatureComponent`

## Technologies 🔧

- **[Next.js(React):](https://nextjs.org/docs)** is a React-based framework that
  simplifies web development by offering server-side rendering (SSR) and static
  site generation (SSG) to enhance performance and SEO. It includes an easy
  routing system, automatic image optimization, and TypeScript support. Ideal
  for projects needing optimized SEO, fast loading times, and streamlined
  full-stack development, Next.js extends React's capabilities, allowing for the
  creation of more robust and efficient web applications with less effort.

- **[TypeScript](https://www.typescriptlang.org/):** is a superset of JavaScript
  that adds static typing to the language, helping developers catch errors early
  in the development process and enforce type consistency across their
  codebases. It enhances code quality and readability, supports modern
  JavaScript features, and provides powerful tools for large-scale application
  development. Ideal for projects that require scalability, maintainability, and
  developer productivity, TypeScript offers a robust foundation for building
  complex applications, making it easier to manage and evolve code over time.

- **[Sass:](https://sass-lang.com/documentation/)** is a CSS preprocessor that
  extends CSS with features like variables, nested rules, and mixins, making
  stylesheets more maintainable and easier to write. By utilizing Sass, projects
  can achieve more organized, DRY (Don't Repeat Yourself) code, leading to
  faster development and easier changes. Its compatibility with all CSS versions
  ensures seamless integration into any project, enhancing efficiency and design
  flexibility.

- **[Tanstack Query:](https://tanstack.com/query/latest/docs/framework/react/overview)**
  is a powerful data fetching and caching library for JavaScript applications,
  streamlining asynchronous data management with efficient caching, background
  updates, and stale data handling. By incorporating TanStack Query, projects
  benefit from reduced boilerplate, improved user experience through optimistic
  UI updates, and seamless data synchronization. Its intuitive API and automatic
  refetching mechanisms make it an essential tool for building fast, responsive,
  and data-driven applications.

- **[Jest:](https://jestjs.io/es-ES/docs/getting-started)** is a delightful
  JavaScript testing framework with a focus on simplicity and support for large
  web applications. It enables fast, isolated testing thanks to its
  zero-configuration approach, offering features like snapshot testing and mock
  functions. Utilizing Jest in a project ensures reliable code, enhances test
  automation, and simplifies the testing process, making it ideal for both small
  and large-scale applications seeking to maintain high-quality standards.

- **[Vitest:](https://vitest.dev/)** is a blazing-fast unit testing framework
  designed for the modern web, built on top of Vite. It offers instant server
  start, incredibly fast HMR (Hot Module Replacement), and supports ES modules
  out of the box. By leveraging Vitest, projects benefit from streamlined
  testing processes, improved developer experience, and seamless integration
  with the Vite ecosystem.

- **[@testing-library/react:](https://testing-library.com/docs/react-testing-library/intro/)**
  is a set of utilities that allow you to test React components in a more
  user-centric way. By focusing on testing components based on their behavior
  and appearance to users, it encourages better testing practices and more
  accessible applications. Utilizing @testing-library/react enhances code
  confidence and ensures your UI works as expected without relying on internal
  implementation details.

- **[Msw:](https://mswjs.io/docs/getting-started)** is a library for mocking
  network requests in browser and Node.js environments, allowing you to test
  front-end applications without an actual backend. By intercepting requests and
  returning mock responses, it enables reliable, fast, and easy testing of
  various scenarios. MSW benefits include improving development speed, enabling
  offline development, and ensuring consistent testing environments.

- **[axios:](https://axios-http.com/es/docs/intro)** is a promise-based HTTP
  client for the browser and Node.js, offering an easy-to-use API for making
  XMLHttpRequests from the browser or HTTP requests from Node.js. It supports
  interceptors, automatic JSON data transformation, and client-side protection
  against XSRF. Axios enhances development efficiency with its convenient and
  powerful features for making HTTP requests and managing responses.

- **[clsx:](https://www.npmjs.com/package/clsx)** is a tiny utility for
  constructing className strings conditionally, making it simpler to manage and
  combine CSS classes dynamically in JavaScript projects. It enhances
  readability and reduces complexity when handling multiple conditional class
  names, improving developer experience and code maintainability.

- **[crypto-js:](https://www.npmjs.com/package/crypto-js)** is a library
  providing cryptographic algorithms for secure encryption and decryption of
  data in JavaScript applications. Utilizing it enhances data security, supports
  privacy requirements, and enables the safe handling of sensitive information
  across client and server communications.

- **[dayjs:](https://day.js.org/)** is a minimalist JavaScript library for
  parsing, validating, manipulating, and formatting dates. Its lightweight
  nature and easy API offer a simple yet powerful alternative to larger date
  libraries, improving performance and development efficiency in projects
  dealing with dates.

- **[lodash:](https://lodash.com/docs/)** is a JavaScript utility library that
  provides convenient functions for common programming tasks, including
  manipulating arrays, objects, and strings. It enhances code readability and
  efficiency by simplifying complex operations, reducing the need for verbose
  and repetitive code in projects.

## Installation 💾

Fill your `.env` variables:

```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_PUBLIC_KEY=
NEXT_PUBLIC_PRIVATE_KEY=
```

**Install deps:**

- With npm

```bash
npm install
```

- With yarn

```bash
yarn add
```

- With pnpm

```bash
pnpm install
```

**Run in local environment:**

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm run dev
```

**Run with docker:**

```bash
docker-compose up -d
```
