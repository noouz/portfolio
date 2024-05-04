/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'NotoSans': ['Noto Sans TC', 'sans-serif'],
        'NotoSerif': ['Noto Serif TC', 'sans-serif'],
        'DotGothic': ['DotGothic16', 'sans-serif'],
        'RampartOne': ['Rampart One', 'sans-serif'],
        'STIX': ['STIX Two Text', 'sans-serif'],
        'Poller': ['Poller One', 'sans-serif'],
        'Notable': ['Notable', 'sans-serif'],
      },
      colors: {
        'bg-white': '#F1F1F1',
        'text-color': '#3D4F60',
        'nav-color': '#738290',
        'normal-text': '#272A2D',
        'main-gray': '#D9D9D9',
        'main-pink': '#DAC5C5',
      },
      backgroundImage: {
        'bg-img': 'url("@/images/back.png")',
        'wu-img': 'url("@/images/wu-view.jpg")',
        'weather-img': 'url("@/images/weather-view.jpg")',
        'reaction-img': 'url("@/images/reaction-view.jpg")',
        'blog-img': 'url("@/images/blog-view.png")',
        'colors-img': 'url("@/images/colors-view.jpg")',
        'todo-img': 'url("@/images/todo-view.jpg")',
        'finger-img': 'url("@/images/finger-view.jpg")',
      },
      screens: {
        'lg': '940px',
        'md': '820px',
        'about': '420px',
      },
    },
  },
  plugins: [],
}

