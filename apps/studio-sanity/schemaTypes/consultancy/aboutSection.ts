import {defineField, defineType} from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'headlineStart',
      title: 'Headline (start)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'headlineEmphasis',
      title: 'Headline (emphasis)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'headlineEnd',
      title: 'Headline (end)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      group: 'content',
      description: 'Opening paragraph next to the headline.',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      group: 'content',
      description: 'Photo shown on the about page. Falls back to an illustration when empty.',
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
      name: 'stats',
      title: 'Stats',
      type: 'array',
      group: 'content',
      description: 'Short proof points (e.g. "6+ anos na Holanda").',
      of: [
        defineField({
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        }),
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'storySections',
      title: 'Story sections',
      type: 'array',
      group: 'content',
      description: 'Personal story blocks with a heading and one or more paragraphs.',
      of: [
        defineField({
          name: 'storyBlock',
          title: 'Story block',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 6,
              description: 'Separate paragraphs with a blank line.',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'title'}},
        }),
      ],
    }),
    defineField({
      name: 'journey',
      title: 'Journey timeline',
      type: 'array',
      group: 'content',
      description: 'Career / life milestones shown as a timeline.',
      of: [
        defineField({
          name: 'milestone',
          title: 'Milestone',
          type: 'object',
          fields: [
            defineField({
              name: 'period',
              title: 'Period',
              type: 'string',
              description: 'e.g. "2019" or "2021 — 2023"',
              validation: (Rule) => Rule.required(),
            }),
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
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'period'}},
        }),
      ],
    }),
    defineField({
      name: 'teaser',
      title: 'Home teaser',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short blurb shown on the homepage about section.',
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
      return {title: 'About'}
    },
  },
})
