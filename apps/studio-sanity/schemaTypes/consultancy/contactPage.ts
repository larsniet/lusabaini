import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  initialValue: {
    seoTitle: 'Contato',
    seoDescription:
      'Entre em contato com Luiza Sabaini Costa para consultoria sobre morar na Holanda.',
    headline: 'Vamos conversar sobre a sua mudança',
    intro:
      'Conte um pouco sobre o seu momento — se ainda está planejando, se já tem visto, ou se já mora na Holanda e precisa de orientação. Respondo em até 2 dias úteis.',
    supportingText:
      'Consultoria para visto e imigração, moradia, burocracia (registro, banco, seguro) e adaptação cultural.',
  },
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'supportingText',
      title: 'Supporting Text',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Page'}
    },
  },
})
