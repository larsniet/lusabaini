import {defineField, defineType} from 'sanity'

export const processSection = defineType({
  name: 'processSection',
  title: 'Process',
  type: 'document',
  initialValue: {
    headline: 'Como funciona',
    intro: 'Um caminho simples, do primeiro contato até o acompanhamento.',
  },
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineField({
          name: 'step',
          title: 'Step',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'title'}},
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Process'}
    },
  },
})
