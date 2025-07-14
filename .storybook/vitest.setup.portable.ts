import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview'
import { setProjectAnnotations } from '@storybook/nextjs-vite'
import * as projectAnnotations from './preview'
import { beforeAll } from 'vitest'
import { createNavigation } from '@storybook/nextjs-vite/navigation.mock'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const annotations = setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
])

beforeAll(annotations.beforeAll)

createNavigation({})
