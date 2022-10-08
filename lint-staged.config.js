module.exports = {
  // eksekusi type-check pada typescript file
  // '**/*.ts?(x)': () => 'yarn type-check',

  // eksekusi eslint dan prettier pada file yang diedit saja
  '**/*.(jsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
}
