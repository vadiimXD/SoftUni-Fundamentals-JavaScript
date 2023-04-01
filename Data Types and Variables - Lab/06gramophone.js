function gramophone(band, album, song) {

    let timesPlayed = (band.length * album.length) * song.length / 2
    let rotations = Math.ceil(timesPlayed / 2.5)

    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');