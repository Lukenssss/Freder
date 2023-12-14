import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'soft': '#EFEFEF',
      },
      backgroundColor: {
        'cardinal': '#ff4b4b',
        'macaw': '#1cb0f6',
        'feather': '#89e219',
        'soft': '#EFEFEF',
      },
      colors: {
        'facebooki': '#3b5a99',
        'googli': '#4284f3',
        'feather': '#58cc02',
        'cardinal': '#ff4b4b',
        'macaw': '#1cb0f6',
        'discord': '#6c87d3',
        'card': '#1cb0f6',
        'mostage': '#ffc800',
      },
      fontSize: {
        'xxs': '11px',
      }
    },
  },
  plugins: [],
}
export default config
