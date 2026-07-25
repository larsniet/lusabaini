import {brandingSection} from './brandingSection'
import {navigationSection} from './navigationSection'
import {footerSection} from './footerSection'
import {heroSection} from './heroSection'
import {servicesSection} from './servicesSection'
import {aboutSection} from './aboutSection'
import {processSection} from './processSection'
import {faqSection} from './faqSection'
import {contactPage} from './contactPage'
import {testimonial} from './testimonial'

export const consultancySchemaTypes = [
  brandingSection,
  navigationSection,
  footerSection,
  heroSection,
  servicesSection,
  aboutSection,
  processSection,
  faqSection,
  contactPage,
  testimonial,
]

export const consultancySingletonTypes = new Set([
  'brandingSection',
  'navigationSection',
  'footerSection',
  'heroSection',
  'servicesSection',
  'aboutSection',
  'processSection',
  'faqSection',
  'contactPage',
])
