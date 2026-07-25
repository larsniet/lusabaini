import {defineField, defineType} from 'sanity'

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ',
  type: 'document',
  initialValue: {
    headline: 'Perguntas frequentes',
  },
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'FAQ items',
      type: 'array',
      of: [
        defineField({
          name: 'faqItem',
          title: 'FAQ item',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'question'}},
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'FAQ'}
    },
  },
})
