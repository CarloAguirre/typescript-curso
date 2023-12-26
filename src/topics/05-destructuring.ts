interface AudioPlayer{
   audiovolume: number;
   soundDuration: number;
   song: string;
   details: Details; 
}

interface Details{
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audiovolume: 90,
    soundDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
}

const song = "New song"

const {song: originalsong, details} = audioPlayer 

const {author, year} = details

console.log({song, originalsong, author, year})



//Arrays

const [p1, p2, trunks = "not found"]: string[] = ["Goku", "Vegeta", "Trunks"]

console.log({"Personaje 3": trunks})

export{}