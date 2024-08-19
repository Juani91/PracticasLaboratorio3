
const ChristopherNolanFilms = ({ films }) => {
        
    const returnMovieTitle = (movies) => {
        const movieTitle = movies.map((movie) => movie.Title);
        return movieTitle;
    }

    const filteredWatchList = films.filter((film) => (film.Director == 'Christopher Nolan' && parseFloat(film.imdbRating) >= 8));
    const titlesArray = returnMovieTitle(filteredWatchList);
    console.log(titlesArray);

    return (
        <div>
            <h3>Práctica Obligatoria 1</h3>
            <p>Películas dirigidas por Christopher Nolan que contienen una puntuación Imdb mayor a 8.0:</p>
            <ul>
                {titlesArray.map((title) =>
                    <li>
                        {title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ChristopherNolanFilms;


// OTRA FORMA QUE HABÍA HECHO:

// const ChristopherNolanFilms = ( {watchList} ) => {

//     return(
//         <div>
//             <h3>Práctica Obligatoria 1</h3>
//             <p>Películas dirigidas por Christopher Nolan y con puntuación en Imdb mayor a 8:</p>
//             <ul>
//                 {watchList
//                 .filter((film) => (film.Director == 'Christopher Nolan' && parseFloat(film.imdbRating) >= 8))
//                 .map((film) => (
//                     <li key={film.imdbID}>
//                         <p><b>Nombre:</b> {film.Title}</p>
//                         <p><b>Rating Imdb:</b> {film.imdbRating}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default ChristopherNolanFilms;