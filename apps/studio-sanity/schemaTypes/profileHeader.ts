import {defineField, defineType} from 'sanity'

export const profileHeader = defineType({
  name: 'profileHeader',
  title: 'Profile Header',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Primary display name shown on the hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Brief description of the image for accessibility',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttons',
      title: 'Header Buttons',
      type: 'array',
      of: [
        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'Supports https://, mailto:, etc.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Mail', value: 'mail'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Share', value: 'share'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
