import exp from "node:constants";

export const TAILWIND_CONFIG_NEXT_TS = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
};
export default config;
`;

export const TAILWIND_CONFIG_NEXT_JS = `/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

export const POSTCSS_CONFIG_NEXT_MJS = `/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
`;

export const POSTCSS_CONFIG_NEXT_JS = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
`;

export const TAILWIND_GLOBAL_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

export const NEXT_PAGE_TAILWIND_CONTENT = `import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 gap-16 font-sans dark:bg-gray-900 dark:text-white">
      <main className="flex flex-col gap-8 row-start-2">
        <Image
          className="mb-4 dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-decimal list-inside font-mono p-0 m-0 text-sm leading-6 tracking-tight">
          <li className="mb-2 last:mb-0">
            Get started by editing <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded font-semibold">app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4">
          <a
            className="bg-black text-white py-2 px-5 rounded-full flex items-center justify-center text-base font-medium transition-colors duration-200 hover:bg-gray-700 dark:hover:bg-gray-300 dark:hover:text-black"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mr-2"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-600 min-w-[180px] py-2 px-5 rounded-full flex items-center justify-center text-base font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex gap-6 row-start-3">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

`;

export const TAILWIND_CONFIG_REACT = `/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

export const REACT_APP_PAGE = `import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center space-x-4 my-8">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center my-8">Vite + React</h1>
      <div className="card p-8 bg-gray-100 rounded-lg shadow-md text-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
`;

export const TAILWIND_CONFIG_VUE_TS = `import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
`;

export const TAILWIND_CONFIG_VUE_JS = `/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

export const VUE_APP_PAGE = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-center space-x-4 my-8">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
`;

export const VUE_HELLOWORLD_PAGE = `<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
    <h1 class="text-4xl font-bold mb-4">{{ msg }}</h1>

    <div class="card p-8 bg-gray-800 rounded-lg shadow-md text-center">
      <button
        type="button"
        class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p class="mt-4">
        Edit
        <code class="bg-gray-700 p-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p class="mt-4">
      Check out
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        class="text-blue-400 hover:text-blue-300"
      >
        create-vue
      </a>
      , the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        class="text-blue-400 hover:text-blue-300"
      >
        Vue Docs Scaling up Guide
      </a>
      .
    </p>
    <p class="read-the-docs mt-4 text-gray-400">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  @apply text-gray-400;
}
</style>
`;

export const NATIVEWIND_TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

export const NATIVEWIND_BABEL_CONFIG_jS = `module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
`;

export const NATIVEWIND_METRO_CONFIG_JS = `const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })
`;

export const NATIVEWIND_ENV_D_TS = `/// <reference types="nativewind/types" />`;
