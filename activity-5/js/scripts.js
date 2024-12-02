var data = [
{
    
        name: 'Path Intellisense',
        description: 'Autocompletes file paths as you type, preventing errors and saving time.',
        author: 'Christian Kohler',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        downloads: 14604958,
        stars: 121,
        price: 'Free',
        selector: 'p1'       
    },
    {
        name: 'Trailing Spaces',
        description: 'Highlights trailing spaces and removes. ',
        author: 'Shardul Mahadik',
        url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
        downloads: 2416104,
        stars: 58,
        price: 'Free',
        selector: 'p2' 
    }
]

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function (){
        return this.stars.toLocaleString();
    }
}
var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
}
var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
}

var init = function() {
    
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var intellesense = new Package(data[0]);
    writePackageInfo(intellesense);

    var space = new Package(data[1]);
    writePackageInfo(space);

}

init();



