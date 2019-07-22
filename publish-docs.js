const ghpages = require('gh-pages');

ghpages.publish('docs', function(err) {
    if (err) {
        console.error('Publish to "gh-pages" catch error:');
        console.error(err);
    }
    process.exit(1);
});
