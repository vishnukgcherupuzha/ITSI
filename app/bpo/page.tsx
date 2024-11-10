import React from 'react'
import Hero from './sections/hero'
import WhyChooseUs from './sections/whyChooseUs'
import ServicesGrid from './sections/services'
import TeamSection from './sections/TeamSection'
import ContactForm from './sections/contact'

const page = () => {
  return (
    <div>
        <Hero />
        <WhyChooseUs />
        <ServicesGrid />
        <TeamSection />
        <ContactForm />
    </div>
  )
}

export default page