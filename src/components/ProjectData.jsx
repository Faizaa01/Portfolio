import g from '../assets/1.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const projects = [
  {
    id: 1,
    title: "Grocera – Online Grocery Store",
    description: "Multi-role e-commerce system with cart, wishlist, checkout, and payment flow.",
    fullDes:["A multi-role e-commerce platform for groceries, designed to simplify online shopping for users and provide an easy-to-manage dashboard for admins.",

        "Key Features:",
        "- Multi-role system: Admin, Seller, and Customer accounts with role-specific dashboards",
        "- Shopping cart, wishlist, and checkout flow with live updates",
        "- Payment integration using SSLCommerz",
        "- JWT-based authentication for secure login and session management",
        "- Product search, filter, and categorization",
        "- Order history and status tracking for customers",
        "- Admin panel to manage products, users, and orders",
        "- Responsive UI with React and Tailwind",
        "- Backend built with DRF and Supabase for real-time data handling",
        ],
    tech: ["React", "DRF", "Tailwind", "Supabase", "JWT", "SSLCommerz"],
    images: [g, g1, g2, g3, g4],
    backend_github: "https://github.com/Faizaa01/Grocera",
    frontend_github: "https://github.com/Faizaa01/Grocera-client",
    live: "https://grocera-client-35zx.vercel.app"
  },
  {
    id: 2,
    title: "Book-Heaven – Library System",
    description: "Borrow-return system with authentication, book management, and history tracking.",
    fullDes: ["A library management system that handles borrowing, returning, and tracking books efficiently while ensuring user authentication and history tracking.",
    "Key Features:",
    "- Authentication and role-based access: Admin and Member",
    "- Borrow and return system with real-time book availability updates",
    "- Track user borrowing history and overdue books",
    "- Book management for admins: add, remove, update book details",
    "- Search and filter books by category, author, or title",
    "- Notifications for due dates and fines (optional)",
    "- Frontend with React and Tailwind for responsive UI",
    "- Backend with DRF and Supabase, JWT authentication for security"
],
    tech: ["React", "DRF", "Tailwind", "Supabase", "JWT"],
    images: [img2],
    backend_github: "https://github.com/Faizaa01/BookHeaven",
    frontend_github: "https://github.com/Faizaa01/BookHeaven-Client",
    live: "https://book-heaven-client-xi.vercel.app"
  },
  {
    id: 3,
    title: "Event-Master – Event Management",
    description: "Event reservation platform with role-based access and structured workflows.",
    fullDes: ["An event reservation and management platform designed to streamline event organization and attendee management.",
        "Key Features:",
        "- Role-based access for Admins, Organizers, and Attendees",
        "- Event creation, editing, and deletion with schedule management",
        "- Reservation system with seat availability tracking",
        "- Structured workflows for event approval and management",
        "- User registration and login with secure authentication",
        "- Notifications and reminders for upcoming events",
        "- Frontend designed with Tailwind and React for responsiveness",
        "- Backend with Django and PostgreSQL for data integrity and performance"
    ],
    tech: ["Django", "Tailwind", "PostgreSQL"],
    images: [img3],
    github: "https://github.com/Faizaa01/Event_management",
    live: "https://event-management-pi-teal.vercel.app"
  }
];

export default projects;
