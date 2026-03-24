const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'files')))

app.get('/movies', function (req, res) {
  res.json([
    {
      Title: "The Greatest Showman",
      Released: "2017-12-20",
      Runtime: 105,
      Genres: ["Biography", "Drama", "Musical"],
      Directors: ["Michael Gracey"],
      Writers: ["Jenny Bicks", "Bill Condon"],
      Actors: ["Hugh Jackman", "Michelle Williams", "Zac Efron"],
      Plot: "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
      Poster: "images/showman.jfif",
      Metascore: 48,
      imdbRating: 7.5
    },
    {
      Title: "Inception",
      Released: "2010-07-16",
      Runtime: 148,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      Plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Poster: "images/inception.jfif",
      Metascore: 74,
      imdbRating: 8.8
    },
    {
      Title: "Interstellar",
      Released: "2014-11-07",
      Runtime: 169,
      Genres: ["Adventure", "Drama", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Jonathan Nolan", "Christopher Nolan"],
      Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Poster: "images/interstellar.jfif",
      Metascore: 74,
      imdbRating: 8.7
    }
  ])
})

app.listen(3000, function () {
  console.log("Server now listening on http://localhost:3000/")
})