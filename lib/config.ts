export type Stat = { value: string; suffix: string; label: string }
export type Service = { category: string; title: string; description: string; ctaLabel: string; image: string }
export type Project = { name: string; location: string; systemSize: string; type: 'Residential' | 'Commercial'; image: string }

export const companyConfig = {
  companyName: '[COMPANY NAME]',
  tagline: 'Smarter solar energy for Canadian homes and businesses.',
  phone: '[PHONE NUMBER]',
  email: '[EMAIL ADDRESS]',
  address: '[COMPANY ADDRESS]',
  serviceAreas: '[SERVICE AREAS]',
  socialLinks: { facebook: '#', instagram: '#', linkedin: '#', youtube: '#' },
  stats: [
    { value: '250', suffix: '+', label: 'Solar Projects' },
    { value: '12', suffix: '+', label: 'Years Industry Experience' },
    { value: '98', suffix: '%', label: 'Customer Satisfaction' },
    { value: '18', suffix: '', label: 'Communities Served' },
    { value: '4.8', suffix: 'MW', label: 'Solar Installed' },
  ] satisfies Stat[],
  services: [
    { category: 'For your home', title: 'Residential Solar', description: 'Generate clean power where you live, designed around your roof, lifestyle, and long-term plans.', ctaLabel: 'Explore residential', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85' },
    { category: 'For your business', title: 'Commercial Solar', description: 'Turn unused roof and land into a strategic energy asset for your organization.', ctaLabel: 'Explore commercial', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85' },
    { category: 'Energy resilience', title: 'Battery Storage', description: 'Keep more of the energy you make and build confidence through changing conditions.', ctaLabel: 'Explore storage', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85' },
    { category: 'Ongoing care', title: 'Solar Service & Maintenance', description: 'Thoughtful support that helps your system perform as intended year after year.', ctaLabel: 'Explore service', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=85' },
  ] satisfies Service[],
  projects: [
    { name: 'Maple Ridge Residence', location: '[CITY, PROVINCE]', systemSize: '8.4 kW', type: 'Residential', image: 'https://images.unsplash.com/photo-1558449033-6cf3f7f5d7bd?auto=format&fit=crop&w=1200&q=85' },
    { name: 'Northline Workshop', location: '[CITY, PROVINCE]', systemSize: '42 kW', type: 'Commercial', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85' },
    { name: 'Cedar Valley Home', location: '[CITY, PROVINCE]', systemSize: '11.2 kW', type: 'Residential', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85' },
    { name: 'Prairie Commons', location: '[CITY, PROVINCE]', systemSize: '96 kW', type: 'Commercial', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85' },
  ] satisfies Project[],
  testimonials: [
    { quote: 'The whole experience felt considered, clear, and genuinely local. We always knew what was happening next.', name: '[CUSTOMER NAME]', location: '[CITY, PROVINCE]' },
    { quote: 'They helped us understand the numbers without making promises. The installation was calm and professional.', name: '[CUSTOMER NAME]', location: '[CITY, PROVINCE]' },
    { quote: 'Our system feels like a smart investment in the future of our home, not just another renovation.', name: '[CUSTOMER NAME]', location: '[CITY, PROVINCE]' },
    { quote: 'From the first assessment to final handover, every detail was handled with care.', name: '[CUSTOMER NAME]', location: '[CITY, PROVINCE]' },
  ],
  faqs: [
    ['How much does solar cost in Canada?', 'The cost depends on your property, system size, equipment, and installation needs. A free assessment is the best way to understand your options.'],
    ['How many panels will I need?', 'Panel count depends on your energy use, roof orientation, available space, and the output of the selected equipment.'],
    ['Is solar worth it in Canada?', 'Many Canadian property owners choose solar for long-term energy planning, potential bill reduction, and cleaner generation. The right fit is specific to your property.'],
    ['How does solar work in winter?', 'Solar panels continue to generate when there is daylight. Shorter days, snow coverage, and weather can affect production, which is considered during system design.'],
    ['How long does installation take?', 'The timeline varies by project scope, approvals, equipment, and site conditions. Your project team will outline the stages during assessment.'],
    ['Does solar work on cloudy days?', 'Yes. Panels can still produce energy from diffuse daylight, though output is typically lower than on a clear day.'],
    ['Can I add battery storage?', 'Battery storage may be available depending on your goals, property, and system design. We can discuss it during your assessment.'],
    ['Do you offer maintenance?', 'Yes. Our service offering can help you monitor, maintain, and understand your system over time.'],
    ['What areas do you serve?', 'We serve [SERVICE AREAS]. Contact our team to confirm whether your property is within our current service area.'],
    ['Is the assessment really free?', 'Yes. Request a free initial assessment to start a conversation about your property and energy goals.'],
  ].map(([question, answer]) => ({ question, answer })),
}

export type CompanyConfig = typeof companyConfig
export default companyConfig
