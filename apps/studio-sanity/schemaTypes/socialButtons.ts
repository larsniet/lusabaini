import {defineField, defineType} from 'sanity'

export const socialButtons = defineType({
  name: 'socialButtons',
  title: 'Social Buttons',
  description: 'Links to your social media profiles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional label for this link set',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Supports internal paths (/projects) or external links',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Briefcase', value: 'briefcase'},
                  {title: 'Mail', value: 'mail'},
                  {title: 'Phone', value: 'phone'},
                  {title: 'Link', value: 'link'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'color',
              title: 'Text/Icon color',
              type: 'color',
              options: {disableAlpha: true},
              description: 'Optional override. Defaults to brand soft color.',
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Tile background color',
              type: 'color',
              options: {disableAlpha: true},
              description: 'Optional override. Defaults to dark slate.',
            }),
          ],
        }),
      ],
    }),
  ],
})
