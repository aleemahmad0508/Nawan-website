/**
 * ============================================================
 *  NAWAN CITY — CONTENT DATA
 * ============================================================
 * This is the ONE file you'll edit most often.
 * Every list on the website (events, players, heroes, etc.)
 * is just an array of plain objects here. Add, remove, or
 * edit an object and the matching page updates automatically.
 *
 * To change an IMAGE: replace the file inside
 * src/assets/images/ that has the same name, or change the
 * "image" path below to point at a new file.
 * ============================================================
 */

export const exploreLinks = [
  {
    title: 'History',
    description: 'Learn about the roots and growth of Nawan.',
    to: '/history',
  },
  {
    title: 'Projects',
    description: 'Development projects shaping the village.',
    to: '/projects',
  },
  {
    title: 'Important Events',
    description: 'Festivals, gatherings and milestones.',
    to: '/events',
  },
  {
    title: 'Players',
    description: 'Cricket and volleyball talent from Nawan.',
    to: '/players',
  },
  {
    title: 'Grounds',
    description: 'Where Nawan plays and competes.',
    to: '/grounds',
  },
  {
    title: 'Markets',
    description: 'The bazaars that keep the city moving.',
    to: '/markets',
  },
  {
    title: 'Heroes',
    description: 'People who shaped Nawan\u2019s story.',
    to: '/heroes',
  },
  {
    title: 'Tourist Places',
    description: 'Sights worth the trip to Nawan.',
    to: '/tourist-places',
  },
]

export const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/', handle: '@Apna Nawan' },

]

export const historySections = [
  {
    heading: 'Nawan in the British Era',
    body: `Nawan is a very old and historic town with roots going back to the British era. During British rule in the region, English people also lived in and around Nawan. Their presence is remembered as an important part of the early history of our town. Nawan has continued to preserve its identity and community traditions through the generations.`,
  },

  {
    heading: 'Nawan After the Creation of Pakistan',
    body: `After the creation of Pakistan in 1947, the British left the region and Muslim families became an important part of the growing community of Nawan. Over the years, the village continued to develop and its people worked together to build a stronger and more connected community. The history of Nawan is closely connected with the sacrifices, hard work, and achievements of its people.`,
  },

  {
    heading: 'Our Heroes and Sacrifices',
    body: `Nawan remembers people who played an important role in the history and identity of the community. Baba Sadiq Baloch is remembered locally as a friend of Imran Khan, the former Prime Minister of Pakistan and former international cricketer. Baba Khadim Hussain Baloch is remembered for his sacrifice for Pakistan. When Bangladesh became a separate country, Baba Khadim Hussain remained in a jail in Bangladesh for approximately three months. His sacrifice is remembered with respect by the people of Nawan.`,
  },

  {
    heading: 'Nawan Today',
    body: `Today, Nawan continues to grow while preserving the history and traditions of its people. The town is known for its cricket and volleyball culture, talented players, sports grounds, community events, and local markas. Nawan is also proud of its sporting talent, including Haji Muhammad Khan Awan, an international-level volleyball player who represented Pakistan. Nawan continues to build a story of courage, unity, sports, and progress.`,
  },
]
export const projects = [
  {
    id: 'project-1',
    name: 'Nawan Water Supply Project',
    description:
      'A community-led project that brought clean water to homes across Nawan. The people of the village contributed funds and supported one another to make the water supply possible. Dr. Irfan, Dr. Aamir, Dr. Akmal Awan, and other community members played important roles in communicating with different communities, collecting funds, and helping complete the project. Today, the people of Nawan benefit from a better and more reliable supply of drinking water.',
    status: 'Completed',
    date: '2026',
    image: 'src/assets/images/project2 (1).png',
  },

  {
    id: 'project-2',
    name: 'Nawan Tree Plantation Project',
    description:
      'A community initiative to plant trees throughout Nawan and make the town greener, healthier, and more beautiful. The project was led by a doctor from the community, with many other people also contributing their time and support. Together, the people of Nawan worked to create a greener environment for the present and future generations.',
    status: 'Completed',
    date: '2026',
    image: '/src/assets/images/project11-plant_cropped.png',
  },

  {
    id: 'project-3',
    name: 'Aluwali Road Project',
    description:
      'The Aluwali Road Project is a community-supported development project that is currently in progress. Local people are contributing funds to help construct the road, which connects Aluwali with Masan and makes travel and connectivity easier for the surrounding communities. The improved road will also provide better access toward major routes and cities, including Islamabad.',
    status: 'In progress',
    date: '2026',
    image: '/src/assets/images/project2aluwali rod_cropped.png',
  },

  {
    id: 'project-4',
    name: 'Dhok Zaman Road Project',
    description:
      'The Dhok Zaman Road Project is a government-supported development project that is improving the connection between Nawan and Chikrala. The new road provides an easier and more convenient route for the people of Nawan and surrounding areas, helping improve transportation and connectivity.',
    status: 'In progress',
    date: '2026',
    image: 'src/assets/images/docke-zaman rode_cropped.png',
  },
]

export const events = [
  {
    id: 'event-1',
    title: 'Nawan Annual Volleyball Tournament',
    description:
      'The Nawan Annual Volleyball Tournament is one of the major sporting events of the village. The tournament is played at the Baloch Volleyball Ground and Malik Saleem Factory Ground, bringing together talented volleyball players and attracting sports lovers from Nawan and surrounding areas.',
    date: 'Annual',
    image: 'src/assets/images/Volly ball  ground.png',
  },

  {
    id: 'event-2',
    title: 'Nawan Super League (NSL)',
    description:
      'The Nawan Super League (NSL) is one of the biggest cricket events of the year in Nawan. It brings together cricket teams and talented players from Nawan and surrounding areas, creating an exciting sporting atmosphere for the whole community.',
    date: 'Eid-ul-Fitr',
    image: 'src/assets/images/NSl.png',
  },

  {
    id: 'event-3',
    title: 'Annual Mehfil-e-Milad',
    description:
      'The Annual Mehfil-e-Milad is an important religious and community gathering in Nawan. It is held every year during Rabi-ul-Awwal, bringing people together to participate in the gathering and celebrate with the community.',
    date: 'Rabi-ul-Awwal',
    image: 'src/assets/images/mehfil milad.png',
  },
]
export const volleyballPlayers = [
  {
    id: 'volleyball-player-1',
    name: 'Haji Muhammad Khan Awan',
    role: 'Defender',
    description:
      'Haji Muhammad Khan Awan is proudly known as the King of Volleyball. He is an experienced and talented volleyball player who has represented Pakistan at the international level.',
    image: '/src/assets/images/vollyball1.png',
  },

  {
    id: 'volleyball-player-2',
    name: 'Muhammad Akram Awan',
    role: 'Volleyball Player',
    description:
      'Muhammad Akram Awan is a talented volleyball player from Nawan. He plays alongside Haji Muhammad Khan Awan and represents Nawan in volleyball competitions.',
    image: '/src/assets/images/vollybal2player.jpeg',
  },
]


export const cricketPlayers = [
  {
    id: 'cricket-player-1',
    name: 'Aleem Khan',
    role: 'All-rounder',
    description:
      'Aleem Khan is a young and talented cricketer from Nawan. He is currently studying at Namal University, Mianwali, while also continuing his cricket career. He represents Namal in cricket and plays as an all-rounder.',
    image: '/src/assets/images/Aleemkhan.png',
  },

  {
    id: 'cricket-player-2',
    name: 'Khurram Ansari',
    role: 'All-rounder',
    description:
      'Khurram Ansari is a talented cricketer and all-rounder who represents Namal in cricket. He plays alongside Aleem Khan and is an important part of the team.',
    image: 'src/assets/images/khurrum.jpeg',
  },
]
export const grounds = [
  {
    id: 'volleyball-ground',
    name: 'Baloch Volleyball Ground',
    description:
      'Baloch Volleyball Ground is a traditional and historic volleyball ground of Nawan. The ground was developed with the efforts of Ilyas Baloch Sahib, Haji Muhammad Khan Awan Sahib, known as the King of Volleyball, and other Awan and Baloch community members. It has been an important place for volleyball in the area for many years. The ground is now planned to be developed into a proper volleyball stadium in the coming months, providing a better facility for players and spectators.',
    location: 'Nawan',
    image: '/src/assets/images/vollyball-ground.png',
  },

  {
    id: 'cricket-ground',
    name: 'Naruwala Cricket Ground',
    description:
      'Naruwala Cricket Ground is owned by Malik Akmal Awan of Naruwala and is an important cricket ground for Nawan and the surrounding areas. The ground hosts cricket matches and tournaments and has also been a venue for NSL-related cricket activities, making it a notable sporting ground for the local community.',
    location: 'Naruwala',
    image: 'src/assets/images/criket tournament.png',
  },
]

export const markas = [
  {
    id: 'Point-1',
    name: 'Jaba Farmhouse — Night Gathering',
    description:
      'A peaceful night gathering place at Jaba Farmhouse where friends and community members sit together, talk, share stories, and enjoy their time together.',
    location: 'Jaba Farmhouse',
    image: 'src/assets/images/marka1.png',
  },

  {
    id: 'Point-2',
    name: 'Jaba Farmhouse — Community Talks',
    description:
      'People gather here at night to discuss village matters, community issues, current events, and different topics while enjoying each other’s company.',
    location: 'Jaba Farmhouse',
    image: 'src/assets/images/marks2.png',
  },

  {
    id: 'Point-3',
    name: 'Jaba Farmhouse — Food & Friendship',
    description:
      'The night gatherings become even more enjoyable when friends prepare different foods, eat together, laugh, and spend quality time with one another.',
    location: 'Jaba Farmhouse',
    image: 'src/assets/images/marka11.png',
  },
]
export const heroes = [
  {
    id: 'hero-1',
    name: 'Malik Rafiq Sahib',
    title: 'Community Elder & Community Leader',
    bio: 'Malik Rafiq Sahib is one of the most respected and senior members of Nawan. At more than 80 years of age, he continues to play an important role in the development and progress of the village. He works with different communities and helps bring people together for important community projects.',
    contribution:
      'He plays a major role in supporting community projects, communicating with different communities, helping arrange funds, and bringing people together for the development of Nawan.',
    achievements: [
      'A respected elder of Nawan with more than 80 years of life experience',
      'Supports different development projects in the village',
      'Works with different communities to help arrange funds and support',
    ],
    image: '/src/assets/images/hero2.png',
  },

  {
    id: 'hero-2',
    name: 'Dr. Irfan Sahib',
    title: 'Eye Specialist & Community Leader',
    bio: 'Dr. Irfan Sahib is an eye specialist and one of the hardworking and respected members of Nawan. He is known for his kind nature and his commitment to the development of the community. He has played a leading role in important projects, including the Water Supply Project and Tree Plantation Project.',
    contribution:
      'He has provided leadership and support for community development projects and has worked with other members of Nawan to improve the village and its environment.',
    achievements: [
      'Eye specialist and respected member of the community',
      'Played a leading role in the Water Supply Project',
      'Led the Tree Plantation Project',
      'Known for his kindness and dedication to Nawan',
    ],
    image: '/src/assets/images/hero1.png',
  },

  {
    id: 'hero-3',
    name: 'Dr. Amir Awan',
    title: 'Eye Specialist & Community Figure',
    bio: 'Dr. Amir Awan is an eye specialist and the elder brother of Dr. Irfan Sahib. He is a respected member of Nawan and is also connected with Jaba Farmhouse, one of the special places associated with the community and its social life.',
    contribution:
      'Through his professional work and connection with the community, he contributes to the identity and development of Nawan. He and his family are also associated with Jaba Farmhouse, a popular gathering and tourist place for the people of Nawan.',
    achievements: [
      'Eye specialist',
      'Elder brother of Dr. Irfan Sahib',
      'Associated with Jaba Farmhouse',
      'A respected member of the Nawan community',
    ],
    image: '/src/assets/images/hero4.png',
  },

  {
    id: 'hero-4',
    name: 'Malik Faisal Awan Sahib',
    title: 'Community Supporter & Cricket Legend',
    bio: 'Malik Faisal Awan Sahib is a strong and highly respected supporter of Nawan. He has always stood with the people of the village and has played an important role in supporting community projects. Whether a project needs financial support, resources, or encouragement, Malik Faisal Awan Sahib is known for helping the community whenever he can. He is also respected as a cricket legend and an important figure in the sporting culture of Nawan.',
    contribution:
      'His continuous support for community projects, sports, and the people of Nawan has made him an important and respected figure in the village. His generosity and commitment have encouraged many community activities and development efforts.',
    achievements: [
      'Strong supporter of Nawan community projects',
      'Provides financial and other support for development activities',
      'Supports sports and local players',
      'Respected as a cricket legend of Nawan',
    ],
    image: '/src/assets/images/malik faisal .png',
  },

  {
    id: 'hero-5',
    name: 'Dr. Akmal Awan Sahib',
    title: 'Eye Specialist & Community Figure',
    bio: 'Dr. Akmal Awan Sahib is an eye specialist who belongs to Nawan and currently lives in Jawabad. He is a hardworking professional who continues to serve people through his field and remains connected with his community and country.',
    contribution:
      'Through his professional career and service to people, Dr. Akmal Awan Sahib represents the hardworking and professional spirit of Nawan.',
    achievements: [
      'Eye specialist',
      'Belongs to Nawan',
      'Currently lives and works in Jawabad',
      'Known for his professional service and dedication',
    ],
    image: '/src/assets/images/malik-akmal.png',
  },

  {
    id: 'hero-6',
    name: 'Haji Muhammad Khan Awan',
    title: 'King of Volleyball & International Player',
    bio: 'Haji Muhammad Khan Awan Sahib is proudly known as the King of Volleyball of Nawan. He is an international-level volleyball player who has represented Pakistan. His achievements and dedication to volleyball have brought great pride to Nawan and inspired younger players in the community.',
    contribution:
      'He has helped build Nawan’s reputation in volleyball and continues to represent the sporting talent and passion of the village.',
    achievements: [
      'Known as the King of Volleyball',
      'International-level volleyball player',
      'Represented Pakistan',
      'A source of pride and inspiration for young players of Nawan',
    ],
    image: '/src/assets/images/vollyball1.png',
  },

  {
    id: 'hero-7',
    name: 'Muhammad Faheem Khan',
    title: 'Gold Medalist, DevOps & Cloud Engineer',
    bio: 'Muhammad Faheem Khan is a proud son of Nawan and a graduate of Namal University. He completed his BS Electrical Engineering in 2021 with a CGPA of 3.9 out of 4.0 in his final year. He is a Gold Medalist of Namal University and has built his professional career in DevOps and Cloud Engineering. He is currently working in Islamabad and is ambitious about pursuing professional opportunities in countries such as the UK and Australia.',
    contribution:
      'Faheem Khan represents the educational, technical, and professional achievements of Nawan. His academic performance, Gold Medal, and career in DevOps and Cloud Engineering make him an inspiration for young people of the village.',
    achievements: [
      'Gold Medalist of Namal University',
      'BS Electrical Engineering graduate, 2021',
      'Achieved a 3.9/4.0 CGPA in his final year',
      'DevOps and Cloud Engineer working in Islamabad',
      'Aspires to pursue international professional opportunities',
    ],
    image: '/src/assets/images/hero6.png',
  },

  {
    id: 'hero-8',
    name: 'Muhammad Ibrar Hussain',
    title: 'PhD in Chemistry',
    bio: 'Muhammad Ibrar Hussain is a hardworking and ambitious professional from Nawan who is associated with Italy and has completed a PhD in Chemistry. His academic journey and dedication represent the educational achievements and potential of the people of Nawan.',
    contribution:
      'His academic achievements at the PhD level have brought pride to Nawan and serve as an inspiration for young people who want to pursue higher education and professional careers.',
    achievements: [
      'PhD in Chemistry',
      'Associated with Italy',
      'Hardworking and academically ambitious',
      'Represents the educational achievements of Nawan',
    ],
    image: '/src/assets/images/Pasted image (2).png',
  },

  {
    id: 'hero-9',
    name: 'Malik Amjad Awan',
    title: 'Rector & University Leader',
    bio: 'Malik Amjad Awan is an academic and university leader who belongs to Nawan. He serves as the Rector of Al-Qadir University in Jhelum, an institution associated with Imran Khan. His leadership in higher education represents the growing contribution of people from Nawan to education and professional life.',
    contribution:
      'Through his leadership in higher education, Malik Amjad Awan represents Nawan in the academic community and contributes to the development of education and young people.',
    achievements: [
      'Rector of Al-Qadir University in Jhelum',
      'Belongs to Nawan',
      'Leader in the field of higher education',
      'Represents Nawan in the academic community',
    ],
    image: '/src/assets/images/Malik-Amjad.png',
  },
    {
    id: 'hero-10',
    name: 'Baba Sadiq Baloch',
    title: 'Respected Elder & Close Friend of Imran Khan',
    bio: 'Baba Sadiq Baloch is a respected and important figure associated with Nawan. He is remembered as a close friend of Imran Khan, the former Prime Minister of Pakistan and former international cricketer. His connection with Imran Khan is an important part of the stories and memories remembered by the people of Nawan.',
    contribution:
      'Baba Sadiq Baloch is remembered with great respect by the people of Nawan for his role, relationships, and place in the history and community of the village.',
    achievements: [
      'A respected figure associated with Nawan',
      'Remembered as a close friend of Imran Khan',
      'An important personality in the local history of Nawan',
    ],
    image: '/src/assets/images/image.png',
  },
]
export const touristPlaces = [
  {
    id: 'Point-1',
    name: 'Animals & Birds',
    description:
      'Jaba Farmhouse is home to beautiful animals and birds, including deer, horses, parrots, and many other different birds. Visitors can enjoy seeing these animals and birds in a peaceful natural environment.',
    whyVisit:
      'A beautiful place to see deer, horses, parrots, and different birds while enjoying the peaceful environment of Jaba Farmhouse.',
    location: 'Jaba Farmhouse',
    image: '/src/assets/images/jabaform-house.png',
  },

  {
    id: 'Point-2',
    name: 'Gathering Area',
    description:
      'The gathering area at Jaba Farmhouse is a special place where people sit together, eat different foods, talk, and spend quality time with friends and family. It is also used for mehfils, events, and gatherings, especially during Eid and other special occasions.',
    whyVisit:
      'A welcoming place where people come together to enjoy food, conversations, celebrations, and community gatherings.',
    location: 'Jaba Farmhouse',
    image: '/src/assets/images/jaba-form.png',
  },

  {
    id: 'Point-3',
    name: 'Late Night Markaz',
    description:
      'The late-night sitting area at Jaba Farmhouse is a popular place where people gather at night to talk about village matters, politics, current events, and upcoming activities. Friends and community members spend time together, share ideas, and enjoy long conversations.',
    whyVisit:
      'A unique night gathering place where friends and community members come together for conversations, discussions, and memorable evenings.',
    location: 'Jaba Farmhouse',
    image: '/src/assets/images/marka11.png',
  },

  {
    id: 'Point-4',
    name: 'Mjoch — A Natural Gift',
    description:
      'Mjoch is a beautiful natural place near Nawan where water flows and falls from the mountains, creating a peaceful and scenic view. It is a natural gift surrounded by the beauty of the landscape and attracts visitors from Nawan and nearby areas.',
    whyVisit:
      'A beautiful natural destination where visitors can enjoy flowing water, mountain scenery, fresh air, and the peaceful beauty of nature.',
    location: 'Near Nawan',
    image: '/src/assets/images/majoch.png',
  },
]