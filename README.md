# Inditex-Marvel Challenge

## Architecture ⚙️

The chosen architecture is **[bullet proof react.](https://github.com/alan2207/bulletproof-react)**

It gives us the possibility of decoupling the different layers of the application and encapsulating both the logic and the UI of each module, facilitating scalability.


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

- ### Features folder

In order to scale the application in the easiest and most maintainable way, most of the code is inside the `features` folder, which contains different feature-based things. Every `feature` folder contains domain specific code for a given feature. This allows to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature have the following structure:

```sh
src/features/[feature]
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- index.ts    # entry point for the feature, it serves as the public API of the given feature and exports everything that should be used outside the feature
```



Everything from a feature is exported from the `index.ts` file which behaves as the public API of the feature.
The elements are imported from other functions only using:

`import {FeatureComponent} from "@/features/feature"`

and not

`import {FeatureComponent} from "@/features/feature/components/FeatureComponent`


## Technologies 🔧

- Next.js(React):
- TypeScript
- Sass
- Tanstack Query
- Jest
- Vitest
- @testing-library/react
- Msw
- axios
- clsx
- crypto-js
- dayjs
- lodash

## Installation 💾

Fill your `.env` variables:

```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_PUBLIC_KEY=
NEXT_PUBLIC_PRIVATE_KEY=
```

Install deps:

```bash
npm install
```

Run in dev environment:

```bash
npm run dev
```

Run with docker:

```bash
docker-compose up -d
```
