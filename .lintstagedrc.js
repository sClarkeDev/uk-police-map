import path from "path"

const buildEslintCommand = (filenames) =>
  `npx eslint --fix ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(" ")}`

const buildPrettierCommand = (filenames) =>
  `npx prettier --write ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(" ")}`

const config = {
  "*.{js,jsx,ts,tsx,mjs}": [buildEslintCommand, buildPrettierCommand],
  "*.{json,css,md}": [buildPrettierCommand],
}

export default config
