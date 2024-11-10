import ApproachProcess from '@/app/professional-services/sections/ApproachProcess'
import ContactForm from '@/app/professional-services/sections/contact'
import Hero from '@/app/professional-services/sections/hero'
import ServicesGrid from '@/app/professional-services/sections/services'
import TeamSection from '@/app/professional-services/sections/TeamSection'
import WhyChooseUs from '@/app/professional-services/sections/whyChooseUs'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <ServicesGrid />
            <ApproachProcess />
            <TeamSection />
            <ContactForm />
        </div>
    )
}

export default page