interface AudioPlayer {
    audiovolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audiovolume: 90,
    songDuration: 36,
    song: "Grounds",
    details: {
        author: "IDLES",
        year: 2020
    }
}

const song = 'Random song';

const { song:anotherSong, songDuration:duration, details, details: {author: authorDetails} } = audioPlayer;
// Mejor desestructurar en una nueva línea para mejorar la visibilidad.
const { author } = details;

// console.log('Song: ', anotherSong)
// console.log('Author: ', authorDetails)
// console.log('Author: ', author)
// console.log('Duration: ', duration)


const dbz: string[] = ['Goku','Vegeta', 'Trunks'];

const [ , , t = 'Nadie aquí' ] = dbz;

const trunks = dbz[2] || 'Nadie aquí';

console.warn('Personaje3:', trunks)
console.log('Personaje3:', t)


export {};