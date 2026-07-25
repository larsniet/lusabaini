import {defineField, defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'document',
  initialValue: {
    seoTitle: 'Consultoria para morar na Holanda',
    seoDescription:
      'Orientação prática de Luiza Sabaini Costa para brasileiros que querem se mudar ou viver na Holanda.',
    badgeLabel: 'Consultoria Holanda',
    headlineStart: 'Morar na Holanda com',
    headlineEmphasis: 'clareza',
    headlineEnd: ' e confiança',
    description:
      'Eu ajudo brasileiros a planejar a mudança, entender a burocracia e se adaptar à vida na Holanda — com orientação prática, humana e sob medida.',
    primaryCta: {label: 'Agendar conversa', href: '/contato'},
    secondaryCta: {label: 'Ver serviços', href: '/servicos'},
  },
  fields: [
    defineField({
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
    }),
    defineField({
      name: 'headlineStart',
      title: 'Headline (start)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineEmphasis',
      title: 'Headline (emphasis)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineEnd',
      title: 'Headline (end)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      description:
        'Shown on the right side of the homepage hero. Falls back to an illustration when empty.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'href', title: 'Href', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Hero'}
    },
  },
})
