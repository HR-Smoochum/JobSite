const jobData = [
  {
    id: 1,
    title: 'Horticulturist',
    company: 'Greenhouse Guild',
    logo: 'https://img.icons8.com/ios/100/null/potted-plant.png',
    description: 'Unpot and claw at various plant species in a greenhouse setting.',
    industry: 'Horticulture & Botany',
    location: 'Seattle, WA',
    experience: 'Entry Level',
    environment: 'Onsite',
    salary: '$50,000 - $60,000',
    employment: 'Full Time',
    date: '2023-02-17T08:30:00Z',
  },
  {
    id: 2,
    title: 'Human Leader',
    company: 'Purrfect Leadership Inc.',
    logo: 'https://img.icons8.com/ios/100/null/lion-circus.png',
    description: 'Lead a team of humans in a fast-paced work environment so they follow your slow-paced cat environment.',
    industry: 'Leadership',
    location: 'New York, NY',
    experience: 'Executive Level',
    environment: 'Onsite',
    salary: '$300,000 - $400,000',
    employment: 'Full Time',
    date: '2023-02-21T14:45:00Z'
  },
  {
    id: 3,
    title: 'Food Critic',
    company: 'Whiskerlicious',
    logo: 'https://img.icons8.com/external-others-pike-picture/100/null/external-Cat-Eating-Food-pet-shelter-others-pike-picture-2.png',
    description: 'Sample and review various types of cat food and treats.',
    industry: 'Gastronomy',
    location: 'San Francisco, CA',
    experience: 'Mid Level',
    environment: 'Mixed',
    salary: '$70,000 - $90,000',
    employment: 'Full Time',
    date: '2023-02-22T18:20:00Z',
  },
  {
    id: 4,
    title: 'Electrician/Wiring Expert',
    company: 'Feline Fixers Electric Co.',
    logo: 'https://img.icons8.com/external-outline-juicy-fish/60/null/external-electrician-vehicle-mechanics-outline-outline-juicy-fish-2.png',
    description: 'Chew and swat at electrical systems and wiring.',
    industry: 'Home Maintenance',
    location: 'Houston, TX',
    experience: 'Senior Level',
    environment: 'Onsite',
    salary: '$100,000 - $120,000',
    employment: 'Full Time',
    date: '2023-02-24T12:00:00Z',
  },
  {
    id: 5,
    title: 'Pest Exterminator',
    company: 'Purrfect Pest Control',
    logo: 'https://img.icons8.com/external-creatype-outline-colourcreatype/64/null/external-animal-pet-shop-creatype-outline-colourcreatype-23.png',
    description: 'Identify and eliminate pests in residential and commercial spaces.',
    industry: 'Security & Safety',
    location: 'Miami, FL',
    experience: 'Entry Level',
    environment: 'Onsite',
    salary: '$50,000 - $60,000',
    employment: 'Full Time',
    date: '2023-02-26T10:15:00Z',
  },
  {
    id: 6,
    title: 'Secret Agent',
    company: 'Claw & Dagger',
    logo: 'https://img.icons8.com/ios-filled/50/null/cat-footprint.png',
    description: 'Complete covert missions and gather intelligence.',
    industry: 'Security & Safety',
    location: 'Washington, D.C.',
    experience: 'Executive Level',
    environment: 'Mixed',
    salary: '$500,000+',
    employment: 'Full Time',
    date: '2023-02-28T21:00:00Z',
  },
  {
    id: 7,
    title: 'Furniture Deconstructor',
    company: 'Paws & Wreck',
    logo: 'https://img.icons8.com/dotty/80/null/f--k-this-thing.png',
    description: 'Destroy furniture to ensure it is cat-proof.',
    industry: 'Home Maintenance',
    location: 'Los Angeles, CA',
    experience: 'Entry Level',
    environment: 'Onsite',
    salary: '$50,000 - $60,000',
    employment: 'Full Time',
    date: '2023-03-01T16:30:00Z',
  },
  {
    id: 8,
    title: 'Ornithologist',
    company: 'Feline Flyways Inc.',
    logo: 'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/null/external-binocular-home-activity-photo3ideastudio-lineal-photo3ideastudio.png',
    description: 'Study bird behavior and ecology.',
    industry: 'Nature & Environment',
    location: 'Portland, OR',
    experience: 'Mid Level',
    environment: 'Onsite',
    salary: '$80,000 - $100,000',
    employment: 'Full Time',
    date: '2023-03-05T19:20:00Z',
  },
  {
    id: 9,
    title: 'Private Investigator',
    company: 'Claw & Order Investigations',
    logo: 'https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/null/external-magnifying-glass-art-and-design-xnimrodx-lineal-xnimrodx.png',
    description: 'Investigate and gather evidence for legal cases.',
    industry: 'Security & Safety',
    location: 'Boston, MA',
    experience: 'Mid Level',
    environment: 'Mixed',
    salary: '$90,000 - $110,000',
    employment: 'Part Time',
    date: '2023-03-03T07:45:00Z',
  },
  {
    id: 10,
    title: 'Pest Exterminator',
    company: 'Whisker Warriors Pest Control',
    logo: 'https://img.icons8.com/dotty/80/null/rat-silhuette.png',
    description: 'Seeking an experienced Pest Exterminator to join our team. You will be responsible for identifying, eliminating and preventing pest infestations. Successful candidates will have a proven track record of pest control and knowledge of safe handling and application of pesticides. Must be able to work in a fast-paced environment and have excellent communication and problem-solving skills.',
    industry: 'Home Maintenance',
    location: 'Chicago, IL',
    experience: 'Mid level',
    environment: 'Onsite',
    salary: '$70,000-$90,000',
    employment: 'Full time',
    date: '2023-03-06T14:00:00Z',
  },
  {
    id: 11,
    title: 'Horticulturist',
    company: 'Feline Gardeners Inc',
    logo: 'https://img.icons8.com/wired/64/null/natural-food.png',
    description: 'We are seeking a skilled and knowledgeable Horticulturist to join our team. You will be responsible for planning and implementing various horticulture projects, managing a team of gardeners, and maintaining the health and appearance of plants and trees. Successful candidates will have a degree in horticulture or related field, several years of experience in the field, and a passion for environmental sustainability.',
    industry: 'Horticulture & Botany',
    location: 'San Francisco, CA',
    experience: 'Senior level',
    environment: 'Onsite',
    salary: '$120,000-$150,000',
    employment: 'Full time',
    date: '2023-03-07T03:45:00Z',
  },
  {
    id: 12,
    title: 'Private Investigator',
    company: 'Cat\'s Eye Investigations',
    logo: 'https://img.icons8.com/pastel-glyph/64/null/cat-pot.png',
    description: 'Our private investigation firm is seeking a highly experienced and professional Private Investigator to join our team. You will be responsible for conducting surveillance, gathering evidence, and preparing reports for clients. Successful candidates will have a background in law enforcement or military intelligence, excellent communication and problem-solving skills, and the ability to work independently and maintain confidentiality.',
    industry: 'Security & Safety',
    location: 'New York, NY',
    experience: 'Executive level',
    environment: 'Mixed',
    salary: '$250,000-$350,000',
    employment: 'Full time',
    date: '2023-03-05T14:15:00Z',
  },
  {
    id: 13,
    title: 'Furniture Deconstructor',
    company: 'The Furniture Feline',
    logo: 'https://img.icons8.com/ios/100/null/scratching-post.png',
    description: 'We are seeking a Furniture Deconstructor to join our team. You will be responsible for breaking down furniture into its component parts for recycling and disposal. Successful candidates will have experience with hand and power tools, knowledge of different types of materials and how to safely dismantle them, and the ability to work independently and efficiently.',
    industry: 'Home Maintenance',
    location: 'Seattle, WA',
    experience: 'Entry level',
    environment: 'Onsite',
    salary: '$50,000-$60,000',
    employment: 'Full time',
    date: '2023-03-04T09:50:00Z',
  },
  {
    id: 14,
    title: 'Ornithologist',
    company: 'Feathered Friends Ornithology',
    logo: 'https://img.icons8.com/ios/100/null/christmas-penguin.png',
    description: 'We are seeking a passionate and knowledgeable Ornithologist to join our team. You will be responsible for studying birds in their natural habitats, conducting research and collecting data, and educating the public about bird conservation. Successful candidates will have a degree in ornithology or related field, several years of experience in the field, and a love of birds and their habitats.',
    industry: 'Nature & Environment',
    location: 'Denver, CO',
    experience: 'Mid level',
    environment: 'Onsite',
    salary: '$80,000-$100,000',
    employment: 'Full time',
    date: '2023-02-27T11:10:00Z',
  },
  {
    id: 15,
    title: 'Pawthor',
    company: 'Whisker Writes',
    logo: 'https://img.icons8.com/pastel-glyph/64/null/pen--v1.png',
    description: 'Write inspiring books about feline heroes and their adventures',
    industry: 'Arts & Literature',
    location: 'New York, NY',
    experience: 'Senior Level',
    environment: 'Onsite',
    salary: '$200,000 - $250,000',
    employment: 'Full Time',
    date: '2023-03-02T22:30:00Z',
  },
  {
    id: 16,
    title: 'Horticulturist',
    company: 'Purrfect Gardens',
    logo: 'https://img.icons8.com/ios/100/null/garden.png',
    description: 'Design and maintain beautiful gardens for cat clients',
    industry: 'Horticulture & Botany',
    location: 'Portland, OR',
    experience: 'Mid Level',
    environment: 'Mixed',
    salary: '$80,000 - $100,000',
    employment: 'Full Time',
    date: '2023-02-25T16:20:00Z',
  },
  {
    id: 17,
    title: 'Lap Warmer',
    company: 'Lap Cat Co.',
    logo: 'https://img.icons8.com/external-linear-outline-icons-papa-vector/78/null/external-Cat-hygge-linear-outline-icons-papa-vector.png',
    description: 'Provide warmth and comfort to cat owners by sitting on their laps',
    industry: 'Home Maintenance',
    location: 'San Francisco, CA',
    experience: 'Entry Level',
    environment: 'Onsite',
    salary: '$50,000 - $60,000',
    employment: 'Part Time',
    date: '2023-02-23T06:00:00Z',
  },
  {
    id: 18,
    title: 'Pest Exterminator',
    company: 'Claw Control Pest Solutions',
    logo: 'https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/null/external-mouse-pet-shop-photo3ideastudio-solid-photo3ideastudio.png',
    description: 'Eliminate pests from homes and businesses to create a safe and clean environment',
    industry: 'Home Maintenance',
    location: 'Miami, FL',
    experience: 'Mid Level',
    environment: 'Onsite',
    salary: '$90,000 - $120,000',
    employment: 'Full Time',
    date: '2023-02-20T17:45:00Z',
  },
  {
    id: 19,
    title: 'Ornithologist',
    company: 'Bird\'s Eye Conservation',
    logo: 'https://img.icons8.com/ios/100/null/parrot-speaking.png',
    description: 'Study birds and their habitats to better understand and protect them',
    industry: 'Nature & Environment',
    location: 'Seattle, WA',
    experience: 'Senior Level',
    environment: 'Mixed',
    salary: '$250,000 - $300,000',
    employment: 'Full Time',
    date: '2023-02-18T13:30:00Z',
  },
  {
    id: 20,
    title: 'Private Investigator',
    company: 'Feline Investigations Inc.',
    logo: 'https://img.icons8.com/ios/100/null/evidence.png',
    description: 'Uncover secrets and solve mysteries for feline clients',
    industry: 'Security & Safety',
    location: 'Los Angeles, CA',
    experience: 'Executive Level',
    environment: 'Mixed',
    salary: '$400,000 - $500,000',
    employment: 'Full Time',
    date: '2023-02-16T23:15:00Z',
  },
];

module.exports = {
  jobData,
};