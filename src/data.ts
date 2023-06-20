export interface IData {
  title: string
  description: string
}

const works: IData[] = [
  {
    title: 'Netflix Clone',
    description: 'Netflix clone with vanilla JS'
  },
  {
    title: 'Tolv Clone',
    description: 'Tolv clone with React and tailwindcss'
  },
  {
    title: 'Checkout Cart',
    description: '( Add / Delete ) Cart'
  },
  {
    title: 'Markdown Editor',
    description: 'Create Markdown Editor with Codemirror'
  },
  {
    title: 'Calendar',
    description: 'Calendar with tailwindcss'
  },
  {
    title: 'Php Contacts',
    description: 'PHP Crud Opeations and Searching'
  },
  {
    title: 'Crypto Tracker',
    description: 'track cryptocurrency with coinpaprika api'
  }
]

const posts: IData[] = [
  {
    title: '7231504053346340097',
    description: 'Learning Three.js 💥'
  },
  {
    title: '7231019832395762946',
    description: 'Bouncing ball animation with Canvas 🎨'
  },
  {
    title: '7233317332775456002',
    description: 'Intersection Observer 🗺️'
  },
  {
    title: '7232499074832846081',
    description: 'Typing effect ⌨️'
  }
]

export { works, posts }
