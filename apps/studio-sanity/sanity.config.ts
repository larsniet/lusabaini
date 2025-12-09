import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '0hp0ah4w'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
