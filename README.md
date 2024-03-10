<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/static/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Inditex-Marvel Challenge</h3>

  <p align="center">
    Test challenge for inditex based on marvel api.
    <br />
    <br />
    <strong> 
      <a href="https://inditex-challenge-marvel-21lt9i37y-bjmendezsena.vercel.app/">View Demo</a>
    </strong>
  </p>

  [![Screen Shot][screenshot]](https://example.com)
</div>


## Architecture ⚙️

The chosen architecture is
**[bullet proof react.](https://github.com/alan2207/bulletproof-react)**

It gives us the possibility of decoupling the different layers of the
application and encapsulating both the logic and the UI of each module,
facilitating scalability.


### Built With 🔧
<div align="center">
<a href="https://nextjs.org">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next" width="150" height="80"> 
</a>
  <a href="https://www.typescriptlang.org/">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxBazpO7O500MliDRCqCJrs_lomB7Dnta8Q&usqp=CAU" alt="Typescript" width="80" height="80"> 
</a>

<a href="https://sass-lang.com/">
<img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass" width="80" height="80">
</a>

<a href="https://tanstack.com/query/latest">
<img src="https://axios-http.com/assets/logo.svg" alt="Tanstack Query" width="80" height="80">
</a>

<a href="https://axios-http.com/">
<img src="https://img.stackshare.io/service/25599/default_c6db7125f2c663e452ba211df91b2ced3bb7f0ff.png" alt="Tanstack Query" width="80" height="80">
</a>

<a href="https://jestjs.io/es-ES/">
<img src="https://cdn.worldvectorlogo.com/logos/jest-2.svg" alt="Jest" width="80" height="80">
</a>


<a href="https://vitest.dev/">
<img src="https://vitest.dev/logo-shadow.svg" alt="Vitest" width="80" height="80">
</a>

<a href="https://testing-library.com/">
<img src="https://testing-library.com/img/octopus-64x64.png" alt="React Testing Library" width="80" height="80">
</a>

<a href="https://mswjs.io/">
<img src="https://mswjs.io/_astro/msw.0b63bcd8.svg" alt="msw" width="80" height="80">
</a>
</div>
<br />

 __Other technologies__:

- **[clsx](https://www.npmjs.com/package/clsx)**

- **[crypto-js](https://www.npmjs.com/package/crypto-js)**

- **[dayjs](https://day.js.org/)**

- **[lodash](https://lodash.com/docs/)**


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
    +-- module        # Contains everything related to the module, encapsulating both the UI and the logic of the module itself.
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

`import {FeatureComponent} from "@/features/module"`

and not

`import {FeatureComponent} from "@/features/module/components/FeatureComponent`



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
