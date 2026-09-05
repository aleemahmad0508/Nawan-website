/**
 * ============================================================
 *  NAWAN CITY — CONTENT DATA
 * ============================================================
 * This is the ONE file you'll edit most often.
 * Every list on the website (events, players, heroes, etc.)
 * is just an array of plain objects here. Add, remove, or
 * edit an object and the matching page updates automatically.
 *
 * Images are imported from src/assets/images/ so that Vite
 * correctly handles them in both development and production.
 * ============================================================
 */

// ============================================================
// IMAGE IMPORTS
// ============================================================

// Projects
import projectWater from '../assets/images/project-2.png'
import projectTrees from '../assets/images/project11-plant_cropped.png'
import projectAluwali from '../assets/images/project2aluwali rod_cropped.png'
import projectDhokZaman from '../assets/images/docke-zaman rode_cropped.png'

// Events
import volleyballGroundEvent from '../assets/images/Volly ball  ground.png'
import nslEvent from '../assets/images/NSl.png'
import mehfilMilad from '../assets/images/mehfil milad.png'

// Volleyball Players
import volleyball1 from '../assets/images/vollyball1.png'
import volleyball2 from '../assets/images/vollybal2player.jpeg'
import volleyball3 from '../assets/images/illyas-baloach.jpeg'

// Cricket Players
import aleemKhan from '../assets/images/Aleemkhan.png'
import khurrum from '../assets/images/khurrum.jpeg'

// Grounds
import volleyballGround1 from '../assets/images/vollyball-ground.png'
import volleyballGround2 from '../assets/images/malik-saleem-ground.jpeg'
import cricketTournament from '../assets/images/criket tournament.png'

// Markas
import marka1 from '../assets/images/marka1.png'
import marks2 from '../assets/images/marks2.png'
import marka11 from '../assets/images/marka11.png'

// Heroes
import hero2 from '../assets/images/hero2.png'
import hero1 from '../assets/images/hero1.png'
import hero4 from '../assets/images/hero4.png'
import malikFaisal from '../assets/images/malik faisal .png'
import malikAkmal from '../assets/images/malik-akmal.png'
import hero6 from '../assets/images/hero6.png'
import pastedImage2 from '../assets/images/Pasted image (2).png'
import malikAmjad from '../assets/images/Malik-Amjad.png'
import babaSadiq from '../assets/images/imran-khan-firend.png'
import patwari from '../assets/images/patwari.jpeg'
import Harroon from '../assets/images/Haroon.jpg'
import zeeshan from '../assets/images/Zeeshan.png'

// Tourist Places
import jabaFarmHouse from '../assets/images/jabaform-house.png'
import jabaForm from '../assets/images/jaba-form.png'
import majoch from '../assets/images/majoch.png'

import masjids from '../assets/images/masjids.png'
import barber from '../assets/images/barber.jpeg'
import b_school from '../assets/images/boys-school.jpeg'
import g_school from '../assets/images/girl-school.jpeg'
import darzi from '../assets/images/darzi.jpeg'
import sheda_hotel from '../assets/images/sheda-hotel.jpeg'
import pipal from '../assets/images/pipal.jpeg'
import lake from '../assets/images/lake.jpeg'
import mahol from '../assets/images/mahol.jpeg'

import waterPerson1 from '../assets/images/water-person-1.jpeg'
import waterPerson2 from '../assets/images/water-person-2.jpeg'
import treePerson1 from '../assets/images/tree-person-1.png'
// ============================================================
// EXPLORE LINKS
// ============================================================
export const exploreNawan = [
  {
    id: 'point-1',
    name: 'Masjids',
    title: 'Beautiful Masjids of Nawan',
    bio: 'Nawan is home to beautiful and historic masjids that serve as centers of worship, community, and spiritual connection for the people of the village.',
    image: masjids,
  },

  {
    id: 'point-2',
    name: 'Boys School',
    title: 'Boys School of Nawan',
    bio: 'The boys school of Nawan provides local children with education and opportunities to build a brighter future for themselves and their community.',
    image: b_school,
  },

  {
    id: 'point-3',
    name: 'Girls School',
    title: 'Girls School of Nawan',
    bio: 'The girls school of Nawan plays an important role in educating young girls and empowering the next generation through knowledge and learning.',
    image: g_school,
  },

  {
    id: 'point-4',
    name: 'Barber (Faisal)',
    title: 'Faisal Barber',
    bio: 'Faisal Barber is a familiar local business in Nawan, providing grooming and traditional barbering services to the people of the village.',
    image: barber,
  },

  {
    id: 'point-5',
    name: 'Mani Tailor',
    title: 'Mani Tailor',
    bio: 'Mani Tailor is a trusted local tailoring shop where skilled craftsmanship and traditional clothing come together for the people of Nawan.',
    image: darzi,
  },

  {
    id: 'point-6',
    name: 'Sheda Hotel',
    title: 'The Old Sheda Hotel',
    bio: 'Sheda Hotel is one of the familiar old gathering places of Nawan, remembered for bringing local people together over tea, food, and conversation.',
    image: sheda_hotel,
  },

  {
    id: 'point-7',
    name: 'Lake of Nawan',
    title: 'The Old Lake of Nawan',
    bio: 'The old lake of Nawan is a memorable part of the village landscape, reflecting the natural beauty and history of the local community.',
    image: lake,
  },

  {
    id: 'point-8',
    name: 'Pipal',
    title: 'The Historic Pipal Tree',
    bio: 'The old Pipal tree of Nawan is a cherished landmark believed to date back to the British era and stands as a living reminder of the village’s history.',
    image: pipal,
  },

  {
    id: 'point-9',
    name: 'Village Environment',
    title: 'Nawan After Rain',
    bio: 'After rainfall, Nawan takes on a refreshing and peaceful atmosphere, with greener surroundings, fresh air, and a beautiful natural charm.',
    image: mahol,
  },
];

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
    title: 'Sports',
    description: 'Cricket and volleyball talent from Nawan.',
    to: '/players',
  },
 
  {
    title: 'Markets',
    description: 'The bazaars that keep the city moving.',
    to: '/markets',
  },
  {
    title: 'Heroes',
    description: 'People who shaped Nawan’s story.',
    to: '/heroes',
  },
  {
    title: 'Tourist Places',
    description: 'Sights worth the trip to Nawan.',
    to: '/tourist-places',
  },
  {
    title: 'About',
    description:'Discover About us',
    to:'/about'
  },
  {
    title: 'Explore-Nawan',
    description: 'Explore Schools,Mosques and Landmarks ',
    to:'/explore-nawan'

  }
]


// ============================================================
// SOCIAL LINKS
// ============================================================

export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/NawanMianwali',
    handle: '@NawanMianwali',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/GreenNawan',
    handle: '@GreenNawan',
  },

]


// ============================================================
// HISTORY
// ============================================================

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


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: 'project-1',
    name: 'Nawan Water Supply Project',
    description:
      'A community-led project that brought clean water to homes across Nawan. The people of the village contributed funds and supported one another to make the water supply possible. Dr. Irfan, Dr. Aamir, Dr. Akmal Awan, and other community members played important roles in communicating with different communities, collecting funds, and helping complete the project. Today, the people of Nawan benefit from a better and more reliable supply of drinking water.',
    status: 'Completed',
    date: '2026',
    image: projectWater,
    people: [
    {
      id: 'water-person-1',
      name: 'Adil Awan',
      image: waterPerson1,
      description:
        'A key member of Water Supply he is leading the Water supply in our village.He didicated his efforts for Nawan people even in fighting with kidnees Operation',
    },
    {
      id: 'water-person-2',
      name: 'Muhammad Ashraf',
      image: waterPerson2,
      description:
        'A dedicated contributor (leader) who played an important role in supporting the water supply initiative.',
    },
  ],
  },

  {
    id: 'project-2',
    name: 'Nawan Tree Plantation Project',
    description:
      'A community initiative to plant trees throughout Nawan and make the town greener, healthier, and more beautiful. The project was led by a doctor from the community, with many other people also contributing their time and support. Together, the people of Nawan worked to create a greener environment for the present and future generations.',
    status: 'Completed',
    date: '2026',
    image: projectTrees,

    people: [
    {
      id: 'tree-person-1',
      name: 'Muhammad Naeem ',
      image: treePerson1,
      description:
        'A key person who planted many trees in our Area  and supported the tree plantation project in Nawan.',
    },
  ],
  },

  {
    id: 'project-3',
    name: 'Aluwali Road Project',
    description:
      'The Aluwali Road Project is a community-supported development project that is currently in progress. Local people are contributing funds to help construct the road, which connects Aluwali with Masan and makes travel and connectivity easier for the surrounding communities. The improved road will also provide better access toward major routes and cities, including Islamabad.',
    status: 'In progress',
    date: '2026',
    image: projectAluwali,
  },

  {
    id: 'project-4',
    name: 'Dhok Zaman Road Project',
    description:
      'The Dhok Zaman Road Project is a government-supported development project that is improving the connection between Nawan and Chikrala. The new road provides an easier and more convenient route for the people of Nawan and surrounding areas, helping improve transportation and connectivity.',
    status: 'In progress',
    date: '2026-2027',
    image: projectDhokZaman,
  },
  {
    id: 'project-5',
    name: 'Nawan Model village Project',
    description:
      'Nawan Model village project is a development project that will improve Our Nawan Health and  Education and important needs of people.Dr.Irfan and MAlik Amjad are leading this project and in furture it will be completed',
    status: 'Up comming',
    date: '2026-2027',
    image: mahol,
  },
]


// ============================================================
// EVENTS
// ============================================================

export const events = [
  {
    id: 'event-1',
    title: 'Nawan Annual Volleyball Tournament',
    description:
      'The Nawan Annual Volleyball Tournament is one of the major sporting events of the village. The tournament is played at the Baloch Volleyball Ground and Malik Saleem Factory Ground, bringing together talented volleyball players and attracting sports lovers from Nawan and surrounding areas.',
    date: 'Annual',
    image: volleyballGroundEvent,
  },

  {
    id: 'event-2',
    title: 'Nawan Super League (NSL)',
    description:
      'The Nawan Super League (NSL) is one of the biggest cricket events of the year in Nawan. It brings together cricket teams and talented players from Nawan and surrounding areas, creating an exciting sporting atmosphere for the whole community.',
    date: 'Eid-ul-Fitr',
    image: nslEvent,
  },

  {
    id: 'event-3',
    title: 'Annual Mehfil-e-Milad',
    description:
      'The Annual Mehfil-e-Milad is an important religious and community gathering in Nawan. It is held every year during Rabi-ul-Awwal, bringing people together to participate in the gathering and celebrate with the community.',
    date: 'Rabi-ul-Awwal',
    image: mehfilMilad,
  },
]


// ============================================================
// VOLLEYBALL PLAYERS
// ============================================================

export const volleyballPlayers = [
  {
    id: 'volleyball-player-1',
    name: 'Haji Muhammad Khan Awan',
    role: 'Defender',
    description:
      'Haji Muhammad Khan Awan is proudly known as the King of Volleyball. He is an experienced and talented volleyball player who has represented Pakistan at the international level.',
    image: volleyball1,
  },

  {
    id: 'volleyball-player-2',
    name: 'Muhammad Akram Awan',
    role: 'Volleyball Player',
    description:
      'Muhammad Akram Awan is a talented volleyball player from Nawan. He plays alongside Haji Muhammad Khan Awan and represents Nawan in volleyball competitions.',
    image: volleyball2,
  },
  {
    id: 'volleyball-player-3',
    name: 'Muhammad Ilyas Baloch',
    role: 'Volleyball Player',
    description:
      'Muhammad Ilyas Baloch  is a talented volleyball player from Nawan. He played alongside Haji Muhammad Khan Awan and Akram Awan and represents Nawan in volleyball competitions.',
    image: volleyball3,
  }

]


// ============================================================
// CRICKET PLAYERS
// ============================================================

export const cricketPlayers = [
  {
    id: 'cricket-player-1',
    name: 'Aleem Khan',
    role: 'All-rounder',
    description:
      'Aleem Khan is a young and talented cricketer from Nawan. He is currently studying at Namal University, Mianwali, while also continuing his cricket career. He represents Namal in cricket and plays as an all-rounder.',
    image: aleemKhan,
  },

  {
    id: 'cricket-player-2',
    name: 'Khurram Ansari',
    role: 'All-rounder',
    description:
      'Khurram Ansari is a talented cricketer and all-rounder who represents Namal in cricket. He plays alongside Aleem Khan and is an important part of the team.',
    image: khurrum,
  },
]


// ============================================================
// GROUNDS
// ============================================================

export const grounds = [
  {
    id: 'volleyball-ground-1',
    name: 'Baloch Volleyball Ground',
    description:
      'Baloch Volleyball Ground is a traditional and historic volleyball ground of Nawan. The ground was developed with the efforts of Ilyas Baloch Sahib, Haji Muhammad Khan Awan Sahib, known as the King of Volleyball, and other Awan and Baloch community members. It has been an important place for volleyball in the area for many years. The ground is now planned to be developed into a proper volleyball stadium in the coming months, providing a better facility for players and spectators.',
    location: 'Nawan',
    image: volleyballGround1,
  },
  {
    id: 'volleyball-ground-2',
    name: 'Malik Saleem vollyball Ground',
    description:
      'Malik Saleem Volleyball ground is a newly made Volleyball ground and it was made by Malik Saleem ',
    location: 'Nawan',
    image: volleyballGround2,
  },

  {
    id: 'cricket-ground',
    name: 'Naruwala Cricket Ground',
    description:
      'Naruwala Cricket Ground is owned by Malik Akmal Awan of Naruwala and is an important cricket ground for Nawan and the surrounding areas. The ground hosts cricket matches and tournaments and has also been a venue for NSL-related cricket activities, making it a notable sporting ground for the local community.',
    location: 'Naruwala',
    image: cricketTournament,
  },
]


// ============================================================
// MARKAS
// ============================================================

export const markas = [
  {
    id: 'Point-1',
    name: 'Jaba Farmhouse — Night Gathering',
    description:
      'A peaceful night gathering place at Jaba Farmhouse where friends and community members sit together, talk, share stories, and enjoy their time together.',
    location: 'Jaba Farmhouse',
    image: marka1,
  },

  {
    id: 'Point-2',
    name: 'Jaba Farmhouse — Community Talks',
    description:
      'People gather here at night to discuss village matters, community issues, current events, and different topics while enjoying each other’s company.',
    location: 'Jaba Farmhouse',
    image: marks2,
  },

  {
    id: 'Point-3',
    name: 'Jaba Farmhouse — Food & Friendship',
    description:
      'The night gatherings become even more enjoyable when friends prepare different foods, eat together, laugh, and spend quality time with one another.',
    location: 'Jaba Farmhouse',
    image: marka11,
  },
]


// ============================================================
// HEROES
// ============================================================

export const heroes = [
  {
    id: 'hero-1',
    name: 'Malik Rafiq ',
    title: 'Community Elder & Community Leader',
    bio: 'Malik Rafiq Sahib is one of the most respected and senior members of Nawan. At more than 80 years of age, he continues to play an important role in the development and progress of the village. He works with different communities and helps bring people together for important community projects.',
    contribution:
      'He plays a major role in supporting community projects, communicating with different communities, helping arrange funds, and bringing people together for the development of Nawan.',
    achievements: [
      'A respected elder of Nawan with more than 80 years of life experience',
      'Supports different development projects in the village',
      'Works with different communities to help arrange funds and support',
    ],
    image: hero2,
  },

  {
    id: 'hero-2',
    name: 'Dr. Irfan ',
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
    image: hero1,
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
    image: hero4,
  },

  {
    id: 'hero-4',
    name: 'Malik Faisal Awan ',
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
    image: malikFaisal,
  },

  {
    id: 'hero-5',
    name: 'Dr. Akmal Awan ',
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
    image: malikAkmal,
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
    image: volleyball1,
  },

  {
  id: 'hero-7',

  name: 'Muhammad Faheem Khan',

  title: 'Gold Medalist & DevOps and Cloud Engineer',

  bio: 'Muhammad Faheem Khan is a proud son of Nawan and a graduate of Namal University. He completed his BS Electrical Engineering in 2021 and has achieved several academic honors throughout his educational journey. He is a Gold Medalist and has built his professional career in DevOps and Cloud Engineering.',

  contribution:
    'Faheem Khan represents the academic, technical, and professional excellence of Nawan. His outstanding achievements and dedication to education and technology make him an inspiration for the young generation of the village.',

  achievements: [
    'Namal Education Foundation Gold Medalist Award',

    'Best FYP Award',

    "Dean's Honor List Award",

    'Student of the Year Award 2021',

    'Student of the Year Award 2020',

    'Student of the Year Award 2019',

    'Student of the Year Award 2018',

    'Graduation with Honors',
  ],

  image: hero6,
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
    image: pastedImage2,
  },
  {
id: 'hero-12',

name: 'Haroon Rasheed',

title: 'Senior Software Engineer',

bio: 'Haroon Rasheed is a Senior Software Engineer known for his professional excellence, leadership, and technology expertise. Coming from a humble background, he built his career through education, perseverance, and continuous development while remaining committed to his village community.',

contribution:
'He actively supports community development and is a notable supporter and generous donor of the village water supply initiative, along with other welfare and development projects.',

achievements: [
'Senior Software Engineer in the IT industry',
'Recognized for professional excellence and leadership',
'Supporter and donor of the village water supply initiative',
'Contributed to community welfare and development projects',
'Committed to the progress and well-being of his village',
],


  image: Harroon,
},
{
id: 'hero-12',

name: 'Muhammad Zeeshan',

title: 'Senior Software Engineer',

bio: 'Muhammad Zeeshan completed Software Engineering from Virtual University (2015–2019) and began his career in web development. He has worked with companies across Canada, Australia, and the USA, managing remote projects from Pakistan. After moving to Germany, he continued his career and now works in Hamburg for a leading Human Resources company.',

contribution:
'He has built expertise in web-based solutions, international collaboration, and remote project management, gaining professional experience in Lahore, Pakistan, and Germany.',

achievements: [
'Software Engineering graduate, Virtual University (2015–2019)',
'Expertise in web development and web-based solutions',
'Worked with companies across Canada, Australia, and the USA',
'Managed international remote projects from Pakistan',
'Currently working in Hamburg, Germany, in the HR sector',
],

  image: zeeshan
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
    image: malikAmjad,
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
    image: babaSadiq,
  },
  {
  id: 'hero-11',

  name: 'Sher Muhammad Khan',

  title: 'Respected Patwari of Nawan',

  bio: 'Sher Muhammad Khan is a respected personality associated with Nawan who served as the Patwari of the village. He is remembered for his connection with the local administration and land records of Nawan, and for his service to the people of the village.',

  contribution:
    'As Patwari of Nawan, Sher Muhammad Khan played an important role in maintaining and managing land-related records and assisting local residents with matters connected to land and revenue administration.',

  achievements: [
    'Served as the Patwari of Nawan',

    'Contributed to local land and revenue administration',

    'Helped residents with land-related records and matters',

    'A respected personality remembered in the local history of Nawan',
  ],

  image: patwari,

},

]


// ============================================================
// TOURIST PLACES
// ============================================================

export const touristPlaces = [
  {
    id: 'Point-1',
    name: 'Animals & Birds',
    description:
      'Jaba Farmhouse is home to beautiful animals and birds, including deer, horses, parrots, and many other different birds. Visitors can enjoy seeing these animals and birds in a peaceful natural environment.',
    whyVisit:
      'A beautiful place to see deer, horses, parrots, and different birds while enjoying the peaceful environment of Jaba Farmhouse.',
    location: 'Jaba Farmhouse',
    image: jabaFarmHouse,
  },

  {
    id: 'Point-2',
    name: 'Gathering Area',
    description:
      'The gathering area at Jaba Farmhouse is a special place where people sit together, eat different foods, talk, and spend quality time with friends and family. It is also used for mehfils, events, and gatherings, especially during Eid and other special occasions.',
    whyVisit:
      'A welcoming place where people come together to enjoy food, conversations, celebrations, and community gatherings.',
    location: 'Jaba Farmhouse',
    image: jabaForm,
  },

  {
    id: 'Point-3',
    name: 'Late Night Markaz',
    description:
      'The late-night sitting area at Jaba Farmhouse is a popular place where people gather at night to talk about village matters, politics, current events, and upcoming activities. Friends and community members spend time together, share ideas, and enjoy long conversations.',
    whyVisit:
      'A unique night gathering place where friends and community members come together for conversations, discussions, and memorable evenings.',
    location: 'Jaba Farmhouse',
    image: marka11,
  },

  {
    id: 'Point-4',
    name: 'Mjoch — A Natural Gift',
    description:
      'Mjoch is a beautiful natural place near Nawan where water flows and falls from the mountains, creating a peaceful and scenic view. It is a natural gift surrounded by the beauty of the landscape and attracts visitors from Nawan and nearby areas.',
    whyVisit:
      'A beautiful natural destination where visitors can enjoy flowing water, mountain scenery, fresh air, and the peaceful beauty of nature.',
    location: 'Near Nawan',
    image: majoch,
  },
]

export const nawanVillageProfile = {
  basicInformation: {
    province: 'Punjab',
    division: 'Mianwali',
    district: 'Mianwali',
    tehsil: 'Mianwali',
    unionCouncil: 'Thamewali',
    villageName: 'Nawan',
    gpsCoordinates: 'Not provided',
    dateOfSurvey: 'Not provided',
    surveyTeam: 'Not provided',
    villageFocalPerson: 'Not provided',
    contactNumber: 'Not provided',
  },

  population: {
    totalPopulation: 3000,
    households: 400,
    malePercentage: 52,
    femalePercentage: 48,
    children0to5: 600,
    children6to18: 800,
    elderly60Plus: 400,
    personsWithDisabilities: 20,
    mainEthnicGroup: 'Awan',
    mainLanguage: 'Pothwari',
  },

  livelihoods: {
    primaryOccupation: 'Agriculture',
    secondaryOccupation: 'Employment',
    mainCrops: 'Wheat',
    livestock: 5000,
    averageHouseholdIncome: 'PKR 10,000',
    mainIncomeSource: 'Agriculture',
    seasonalMigration: 'Not applicable',
  },

  education: {
    totalSchools: 2,
    boysSchools: 1,
    girlsSchools: 1,
    literacyRate: '60%',
    schoolEnrollment: 600,
    majorChallenges: 'Absence of teachers and water',
  },

  health: {
    healthFacility: 'Not available',
    distanceToHealthCentre: '6 KM',
    ladyHealthWorkers: 2,
    commonDiseases: 'Knee problems among people above 50; flu among children under 10',
    maternalHealthServices: 'Not available',
    immunisationCoverage: 'Not provided',
    drinkingWaterConcern: 'Water availability is uncertain; groundwater is not available and the fountain is the main known source',
  },

  wash: {
    mainWaterSource: 'Natural fountain',
    waterQuality: '411 TDS',
    householdToilets: '90%',
    solidWasteDisposal: 'Not available',
    drainage: 'Not available',
    handwashingFacilities: 'Available mainly at homes',
  },

  infrastructure: {
    roadAccess: 'Yes',
    electricity: 'Yes',
    gas: 'Not available',
    mobileNetwork: 'No',
    internet: 'Yes',
    publicTransport: 'Yes, private transport',
    marketDistance: '45 KM',
  },

  agriculture: {
    irrigation: 'Not available',
    landOwnership: 'Yes',
    majorCrops: 'Wheat',
    fruitOrchards: 'Not available',
    fertiliserUse: 'Yes — DAP',
    challenges: 'Irrigation and diseases',
  },

  environment: {
    floodRisk: 'Not provided',
    droughtRisk: 'Not provided',
    landslideRisk: 'Not provided',
    deforestation: 'Yes',
    climateChangeImpacts: 'Yes',
  },

  vulnerableGroups: {
    femaleHeadedHouseholds: 40,
    orphans: 120,
    widows: 30,
    elderlyLivingAlone: 5,
    personsWithDisabilities: 25,
    idpsRefugees: 'Not applicable',
  },

  communityOrganizations: {
    villageCommittee: 'Yes',
    womensGroup: 'Yes',
    youthGroup: 'Yes',
    farmersAssociation: 'Yes',
    religiousInstitutions: 'Yes',
    ngos: 'No / Unconfirmed',
  },

  priorityNeeds: [
    'Drinking Water',
    'Health',
    'Internet',
    'Gas',
    'Drainage System',
  ],

  communityAssets: {
    schools: 'Government',
    mosques: 4,
    communityHall: 0,
    healthCentre: 0,
    markets: 0,
    waterSchemes: 1,
    irrigationSchemes: 0,
    playgrounds: 0,
  },

  disasterPreparedness: {
    committee: 'Yes / To be confirmed',
    earlyWarningSystem: 0,
    evacuationPlan: 'Not provided',
    emergencyShelter: 'Not provided',
    previousDisasters: 'Not provided',
  },

  waterSupplyAssessment: {
    safeWaterHouseholds: '100%',
    unsafeWaterHouseholds: 'Not provided',
    functionalWaterPoints: 'Not provided',
    nonFunctionalWaterPoints: 'Not provided',
    averageDistance: 'Not provided',
    averageCollectionTime: 'Not provided',
    waterCollectors: 'Not provided',
    waterQualityResults: '411 TDS',
    waterRelatedDiseases: 'Not provided',
    seasonalShortages: 'Not provided',

    existingBoreholes: 5,
    existingPumpsTanksPipelines: 10,

    hydrogeologicalSurvey: 'Not provided',
    recommendedDrillingDepth: 'Not provided',
    estimatedYield: 'Not provided',
    proposedBoreholeGPS: 'Not provided',

    proposedSolution: 'To be assessed — potential rehabilitation, solar pumping, storage tank or piped water solution',

    totalHouseholds: 400,
    householdsServed: 'Not provided',
    householdsUnserved: 'Not provided',
    targetPopulation: 3000,
    dailyWaterDemand: 'Not provided',
    proposedWaterPoints: 'Not provided',
    coverageAfterProject: 'Target: 100%',

    waterCommittee: 'Not provided',
    femaleRepresentation: 'Not provided',
    maintenanceFund: 'Not provided',
    caretaker: 'Not provided',
    environmentalSafeguards: 'Not provided',
    landOwnership: 'Not provided',
    communityApproval: 'Not provided',
    accessibility: 'Not provided',
    estimatedBudget: 'Not provided',
    expectedOutcomes: 'Improved access to safe and reliable drinking water',
  },

  communityRecommendations: {
    keyIssues: [
      'Drinking water shortage and uncertainty',
      'Limited health facilities',
      'Lack of mobile network',
      'No gas connection',
      'Poor drainage system',
      'Teacher shortages in schools',
      'Irrigation challenges',
    ],

    proposedSolutions: [
      'Develop a reliable drinking-water supply',
      'Improve access to healthcare',
      'Improve internet and communication infrastructure',
      'Provide gas infrastructure',
      'Develop a proper drainage system',
      'Address teacher shortages',
      'Improve agricultural irrigation',
    ],

    supportRequested: 'Community and institutional support for water, health, education and infrastructure development',
  },

  existingProjects: {
    status: 'No existing project reported / to be confirmed',
  },

  surveyValidation: {
    villageElder: 'Not provided',
    ucRepresentative: 'Not provided',
    surveyTeamLeader: 'Not provided',
    date: 'Not provided',
  },

  waterSupplyFundraising: {
    title: 'Nawan Water Supply Fundraising',
    day: 86,

    donations: {
      waterSupply: 2922450,
      food: 92000,
    },

    expenses: {
      waterSupply: 1109285,
      food: 84500,
    },

    balance: {
      waterSupply: 1813165,
      food: 7500,
    },

    totalWaterSupplyDonations: 2922450,
    totalWaterSupplyExpenses: 1109285,
    remainingWaterSupplyBalance: 1813165,

    totalFoodDonations: 92000,
    totalFoodExpenses: 84500,
    remainingFoodBalance: 7500,

    note:
      'Fundraising figures are reported from the provided Day 86 water-supply fundraising data.',
  },
}