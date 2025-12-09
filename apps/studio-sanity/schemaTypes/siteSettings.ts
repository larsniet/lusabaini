import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandColor',
      title: 'Primary brand color',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#ff7edb', '#ff39b6', '#fccee8', '#f472b6', '#ec4899'],
      },
      description: 'Used across backgrounds, accents and buttons',
    }),
    defineField({
      name: 'fontFamily',
      title: 'App font family',
      type: 'string',
      description:
        'CSS font stack, e.g. "Inter, system-ui, -apple-system, sans-serif". Make sure the font is available/loaded.',
    }),
  ],
  preview: {
    select: {
      title: 'brandColor',
      subtitle: 'fontFamily',
    },
    prepare({title, subtitle}) {
      return {
        title: (title as any)?.hex || 'Brand color not set',
        subtitle: subtitle || 'Font not set',
      }
    },
  },
})
