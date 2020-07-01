const fs = require('fs');

fs.readFile('./_site/search.json', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('search.json does not exist');
        return;
      }
  
      throw err;
    }
  
    let searchResult = JSON.parse(data);

    for (let i in searchResult) {

        switch(searchResult[i].section) {
            case 'organizations':
                searchResult[i].title = searchResult[i].title.concat(" - Link 1");
                break;
            case 'modules':
                searchResult[i].title = searchResult[i].title.concat(" - Link 2");
                break;
        }
    }

    fs.writeFileSync('./_site/search.json', JSON.stringify(searchResult, null, 2));

  });