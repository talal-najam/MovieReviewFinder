const genres = require('./src/components/genres').genres;

const getMovieGenres = (searchGenreList, allGenreList) => {
    const results = [];
    // console.log(searchGenreList, allGenreList)
    for (let i = 0; i < searchGenreList.length; i++) {
        for (let j = 0; j < allGenreList.length; j++) {
            console.log(searchGenreList[i], allGenreList[j]);
            if (searchGenreList[i] === allGenreList[j].id) {
                results.push(allGenreList[j].name)
                continue;
            }
        }
    }
    return results;
}

console.log(getMovieGenres([53, 18, 878, 27], genres));

