// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes:['light','dark','synthwave','wireframe','lofi','business'],
    styled: true,
    utils: true,
  }
}