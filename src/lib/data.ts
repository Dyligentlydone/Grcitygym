export const site = {
  name: "Grand Rapids City Gym",
  short: "GRCG",
  tagline: "Your City, Your Gym.",
  address: "1625 Leonard Street NE, Grand Rapids, MI 49505",
  phone: "(616) 913-9123",
  email: "info@grandrapidscitygym.com",
  hours: "Open 24/7 for members",
  staffedHours: "Mon–Fri 10a–7p · Sat–Sun 10a–5p",
  signupUrl: "https://grcg.gymmasteronline.com/portal/signup",
  loginUrl: "https://grcg.gymmasteronline.com/portal/login",
  owner: "Jeff Phillips",
  socials: {
    instagram: "https://www.instagram.com/grandrapidscitygym/",
    facebook: "https://facebook.com",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const classes = [
  {
    slug: "strength",
    name: "Strength",
    tagline: "Build the foundation.",
    description:
      "Progressive barbell programming — squat, bench, deadlift — coached with precision for every level.",
    duration: "60 min",
    intensity: "High",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "conditioning",
    name: "Conditioning",
    tagline: "Engine work.",
    description:
      "Mixed-modal intervals built to raise your ceiling. Expect sleds, rowers, bikes, and the occasional grin.",
    duration: "45 min",
    intensity: "High",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "boxing",
    name: "Boxing",
    tagline: "Sweet science.",
    description:
      "Fundamentals, combinations, and live-pace rounds. Bring hand wraps — we'll handle the rest.",
    duration: "50 min",
    intensity: "Medium-High",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "mobility",
    name: "Mobility",
    tagline: "Move better.",
    description:
      "Breath, tissue work, and loaded ranges that unlock the rest of your training.",
    duration: "45 min",
    intensity: "Low",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hiit",
    name: "HIIT",
    tagline: "Short. Sharp. Done.",
    description:
      "Thirty minutes of controlled chaos. Functional patterns at full tilt.",
    duration: "30 min",
    intensity: "High",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "fundamentals",
    name: "Fundamentals",
    tagline: "Start here.",
    description:
      "New to the gym? This is your on-ramp. Learn to lift, move, and breathe with confidence.",
    duration: "45 min",
    intensity: "Low-Medium",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80",
  },
];

export const trainers = [
  { slug: "trainer-1", name: "First and Last Name", bio: "Bio" },
  { slug: "trainer-2", name: "First and Last Name", bio: "Bio" },
  { slug: "trainer-3", name: "First and Last Name", bio: "Bio" },
  { slug: "trainer-4", name: "First and Last Name", bio: "Bio" },
];

// Real memberships pulled from grcg.gymmasteronline.com
export type Plan = {
  name: string;
  price: string;
  signupFee?: string;
  description?: string;
  length?: string;
  cadence: string;
  signupUrl: string;
  featured?: boolean;
};

export type PlanGroup = {
  group: string;
  blurb: string;
  plans: Plan[];
};

const GM = "https://grcg.gymmasteronline.com";

export const planGroups: PlanGroup[] = [
  {
    group: "Monthly Memberships",
    blurb:
      "Our most flexible option. 24/7 access, no long-term commitment, cancel any time.",
    plans: [
      {
        name: "Standard (Month-to-Month)",
        price: "$48.00",
        signupFee: "$30.00",
        cadence: "Monthly by Billing",
        description:
          "Our flagship membership. Full 24/7 access, charged monthly. One-time $30 signup fee.",
        signupUrl: `${GM}/portal/signup/details/ff801247621685b897c1eb6f8145780d`,
        featured: true,
      },
    ],
  },
  {
    group: "Paid-In-Full Memberships",
    blurb:
      "Pay once, train freely. Longer terms unlock better value — no recurring charges.",
    plans: [
      {
        name: "1 Week Pass",
        price: "$25.00",
        length: "1 week",
        cadence: "Paid in full",
        description: "1-week membership, paid in full.",
        signupUrl: `${GM}/portal/signup/details/369042e20b3e43630faf18f721c6ec59`,
      },
      {
        name: "2 Week Pass",
        price: "$35.00",
        length: "2 weeks",
        cadence: "Paid in full",
        description: "2-week membership, paid in full.",
        signupUrl: `${GM}/portal/signup/details/d9c6691ea45196b6b643c4f21730f3bc`,
      },
      {
        name: "1 Month",
        price: "$65.00",
        length: "1 month",
        cadence: "Paid in full",
        description: "1 month paid-in-full. No start-up fee.",
        signupUrl: `${GM}/portal/signup/details/a2efeee9f36e0f3e74b64cfa1d28b28d`,
      },
      {
        name: "3 Month",
        price: "$125.00",
        length: "3 months",
        cadence: "Paid in full",
        description: "Three months paid-in-full. No start-up fee.",
        signupUrl: `${GM}/portal/signup/details/79c936f5db0f302536665cea5e7875b2`,
      },
      {
        name: "6 Month",
        price: "$230.00",
        length: "6 months",
        cadence: "Paid in full",
        description: "Six months paid-in-full. No start-up fee.",
        signupUrl: `${GM}/portal/signup/details/68b1c1bca5ec2c2c217b48a9546fca4c`,
        featured: true,
      },
      {
        name: "1 Year",
        price: "$430.00",
        length: "1 year",
        cadence: "Paid in full",
        description: "One year paid-in-full. Best per-month value. No start-up fee.",
        signupUrl: `${GM}/portal/signup/details/76462769892c3a0550a558fdff863267`,
      },
    ],
  },
  {
    group: "Visit Packs",
    blurb:
      "No commitment. Drop in when it works for you — each pack is yours until it's used up.",
    plans: [
      {
        name: "10-Visit Pack",
        price: "$35.00",
        cadence: "Paid in full",
        description: "10 gym visits. Use on your own schedule.",
        signupUrl: `${GM}/portal/signup/details/1e83ed1f33b233e0c21b52616e536818`,
      },
      {
        name: "20-Visit Pack",
        price: "$65.00",
        cadence: "Paid in full",
        description: "20 gym visits. Use on your own schedule.",
        signupUrl: `${GM}/portal/signup/details/0c193579b77a81cffe90930f4833b97a`,
      },
      {
        name: "30-Visit Pack",
        price: "$90.00",
        cadence: "Paid in full",
        description: "30 gym visits. Best visit-pack value.",
        signupUrl: `${GM}/portal/signup/details/cbddfa5b1db6e64f5d8354e8cfcd5e54`,
      },
    ],
  },
  {
    group: "Try the Gym",
    blurb: "New to GRCG? Come check it out — on us.",
    plans: [
      {
        name: "3-Day Trial",
        price: "Free",
        length: "Valid for two weeks",
        cadence: "No cost",
        description:
          "3 gym visits, valid for two weeks after signup. No cost, no commitment.",
        signupUrl: `${GM}/portal/signup/details/58a2b763b3c492f77f65896ac2e0585d`,
        featured: true,
      },
    ],
  },
];

export const schedule = [
  { day: "Mon", items: [
    { time: "6:00 AM", name: "Strength", coach: "Alex" },
    { time: "12:00 PM", name: "HIIT", coach: "Jordan" },
    { time: "5:30 PM", name: "Boxing", coach: "Devon" },
    { time: "7:00 PM", name: "Mobility", coach: "Sam" },
  ]},
  { day: "Tue", items: [
    { time: "6:00 AM", name: "Conditioning", coach: "Jordan" },
    { time: "12:00 PM", name: "Fundamentals", coach: "Alex" },
    { time: "5:30 PM", name: "Strength", coach: "Alex" },
  ]},
  { day: "Wed", items: [
    { time: "6:00 AM", name: "Boxing", coach: "Devon" },
    { time: "12:00 PM", name: "HIIT", coach: "Jordan" },
    { time: "5:30 PM", name: "Conditioning", coach: "Jordan" },
    { time: "7:00 PM", name: "Mobility", coach: "Sam" },
  ]},
  { day: "Thu", items: [
    { time: "6:00 AM", name: "Strength", coach: "Alex" },
    { time: "5:30 PM", name: "Boxing", coach: "Devon" },
  ]},
  { day: "Fri", items: [
    { time: "6:00 AM", name: "Conditioning", coach: "Jordan" },
    { time: "12:00 PM", name: "HIIT", coach: "Jordan" },
    { time: "5:30 PM", name: "Strength", coach: "Alex" },
  ]},
  { day: "Sat", items: [
    { time: "8:00 AM", name: "Conditioning", coach: "Jordan" },
    { time: "9:30 AM", name: "Boxing", coach: "Devon" },
  ]},
  { day: "Sun", items: [
    { time: "9:00 AM", name: "Mobility", coach: "Sam" },
    { time: "10:30 AM", name: "Fundamentals", coach: "Alex" },
  ]},
];
