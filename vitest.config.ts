/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin'

// https://vitejs.dev/config/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      // __tests__ files that do not use Storybook
      {
        plugins: [react()],
        test: {
          name: 'sans-storybook',
          // allow .ts or .tsx files in __tests__ directory
          include: ['./__tests__/**/*.test.ts(x)?'],
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
      {
        plugins: [storybookNextJsPlugin()],
        test: {
          name: 'portable-stories',
          include: ['./src/components/Profile/Profile.test.tsx'],
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          // avoid hooks warning and error `TypeError: Cannot read properties of null (reading 'useContext')`
          // environment: 'jsdom',
          setupFiles: ['.storybook/vitest.setup.portable.ts'],
        },
      },
    ],
  },
})
