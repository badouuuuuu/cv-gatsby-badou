const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/badouuuuuu/cv-gatsby-badou.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)