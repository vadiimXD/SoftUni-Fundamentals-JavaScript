function songs(input) {
    let songs = input.shift()
    let type = input.pop()
    class Song {
        constructor(typeOfSong, name, duration) {
            this.typeList = typeOfSong;
            this.name = name;
            this.time = duration;
        }
    }

    for (element of input) {
        let [typeOfSong, name, duration] = element.split("_")
        let mySong = new Song(typeOfSong, name, duration);
        if (typeOfSong === type) {
            console.log(mySong.name)
        } else if (type === "all") {
            console.log(mySong.name)
        }
    }
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
console.log(`------------------------------`)
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])
console.log(`------------------------`)
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])