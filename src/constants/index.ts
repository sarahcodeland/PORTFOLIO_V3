export const navLinks = [
  {
    id: 'about',
    title: 'About',
    url: '/about',
  },
  {
    id: 'projects',
    title: 'Projects',
    url: '/projects',
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact',
  },
];

export const socialLinks = {
  github: 'https://github.com/sarahcodeland/',
  linkedin: 'https://www.linkedin.com/in/sarah-m-9a829a277/',
  twitter: 'https://x.com/MaheenSarah786',
  email: 'sarahmaheen02@gmail.com',
  location: 'Hyderabad, India',
  phone: '+91 9398480514',
};

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C++'],
  frameworks: [
    'React.js',
    'Next.js',
    'MERN',
    'React Query',
    'React Hook Form',
    'Tailwind CSS',
    'Shadcn UI',
    'Material UI',
    'Express.js',
    'Node.js',
  ],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  databases: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'],
  other: [
    'Responsive Design',
    'RESTful APIs',
    'GraphQL',
    'Nodemailer',
    'AssemblyAI',
    'Stripe',
    'Supabase',
    'Slack',
    'Testing (Jest)',
  ],
};

export const projects = [
  {
    id: 'modern-ecommerce',
    title: 'Noble-Rain (E-commerce)',
    description:
      'A modern, full-stack e-commerce web app with authentication, Stripe payments, and a responsive UI. ',
    longDescription:
      'As the full stack Dev, SHOPPING_CART_APP is a modern and scalable e-commerce web application built with Vite, Tailwind CSS, Express.js, Stripe, Google & GitHub Auth, Firebase, PostgreSQL, and Prisma. It provides a seamless shopping experience  for users with secure authentication, smooth UI, and integrated payment solutions.',
    tech: [
      'Vite',
      'TypeScript',
      'Redux',
      'Tailwind CSS',
      'Shadcn UI',
      'Firebase',
      'Google & GitHub Auth',
      'Stripe API',
      'Vercel',
      'Express.js',
      'Prisma ORM',
      'PostgreSQL',
      'Render',
    ],
    image: '/project.png',
    link: '#',
    github: '#',
    features: [
      'User Authentication (Google & GitHub Login)',
      'Product Listing & Details',
      'Stripe Payment Integration 💳',
      'Shopping cart and wishlist',
      'Responsive & Fast UI',
      'PostgreSQL Database with Prisma ORM',
    ],
  },
  {
    id: 'task-management',
    title: 'Slot booking system',
    description:
      'Built and integrated a Booking System into Leeza.app official website, resolving slot conflicts by ensuring no two clients book the same time and dynamically removing booked slots from the UI',
    longDescription:
      'A real-time slot booking application that allows users to connect easily.Resolving slot conflicts by ensuring no two clients book the same time and dynamically removing booked slots from the UI.',
    tech: [
      'MERNstack',
      'JavaScript',
      'Local state',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    image: '/project.png',
    link: '#',
    github: '#',
    features: [
      'Real-time collaboration',
      'slots assignment and tracking',
      'Available slots Updates',
      'User Profile shows booked slots',
      'Progress analytics',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A minimal and modern portfolio website showcasing my work',
    longDescription:
      'A personal portfolio website built with modern web technologies. Features a clean, minimal design with smooth animations and creative layout',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    image: '/project.png',
    link: '#',
    github: '#',
    features: [
      'Innovative layout',
      'Table structure',
      'Smooth animations',
      'Game Integration',
      'Project showcase',
    ],
  },
];

export const education = [
  {
    id: '1',
    degree: 'Bachelor in Computer Application',
    university: 'Osmania University',
    startTime: '2023',
    endTime: 'persent',
    description:
      'Focused on web development and software engineering principles. Eager to learn and grow through collaborative teams',
  },
];
