import {defineField, defineType} from 'sanity'

export const footerSection = defineType({
  name: 'footerSection',
  title: 'Footer',
  type: 'document',
  initialValue: {
    brandLabel: 'Luiza Sabaini',
    headlineStart: 'Sua nova vida na',
    headlineEmphasis: 'Holanda',
    headlineEnd: ' começa com orientação clara.',
    description:
      'Consultoria prática para brasileiros que querem se mudar ou se estabelecer na Holanda.',
  },
  fields: [
    defineField({
      name: 'brandLabel',
      title: 'Brand Label',
      type: 'string',
    }),
    defineField({
      name: 'headlineStart',
      title: 'Headline (start)',
      type: 'string',
    }),
    defineField({
      name: 'headlineEmphasis',
      title: 'Headline (emphasis)',
      type: 'string',
    }),
    defineField({
      name: 'headlineEnd',
      title: 'Headline (end)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
})
