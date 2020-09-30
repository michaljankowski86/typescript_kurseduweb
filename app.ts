// const data: number[] = [1, 2, 3]

// // Tuple - rodzaj tablicy: liczbe elementów i typy są dokładnie określone
// let settings: [string, boolean]

// // Object
// const user: { name: string; getName(): string } = {
//   name: "Adam",
//   getName() {
//     return this.name
//   },
// }

// // Enum - nazwane określone wartości liczbowe / tekstowe
// enum extensions {
//   doc,
//   docx,
//   pdf,
// }

// let coffeeSize: "medium" | "large"

// // Union type: wykorzystanie jednego lub drugiego typu
// let stringOrNumber: string | number

// // utworzenie nowego typu
// type doubleAnything = string | number

// function double(value: doubleAnything): number {
//   if (typeof value === "string") {
//     return parseInt(value, 10) * 2
//   }

//   return value * 2
// }

// // inferencja - Ts sam potrafi domyślić się typu

// // asercja typów - informowanie ts o typie danych, kiedy wiemy więcej niż on :p
// type Game = { title: string; genre: string; released: boolean }

// const game: Game = {
//   title: "Grand Theft Auto V",
//   genre: "Action",
//   released: true,
// }
// const serializedGame = JSON.stringify(game)
// const gameObj1 = JSON.parse(serializedGame) as Game
// const gameObj2 = <Game>JSON.parse(serializedGame)

// const input = document.querySelector("input") as HTMLInputElement

// // Aliasy - alternatywna nazwa typów
// type NumberAlias = number
// type CoffeeSize = "medium" | "large"
// let coffeeSize2: CoffeeSize

// // Funkcje
// type Song = { title: string; duration: number; genre: string }
// const song = { title: "Eye of the tiger", duration: 213, genre: "rock" }

// function play(songDetails: Song): string {
//   return `Playing now: ${songDetails.title}`
// }

// play(song)

// // Optional parameters
// function addToPlaylist(songdata: Song, playlist = "Deafult"): string {
//   return `Song name ${songdata.title} from ${playlist}`
// }

// // definiowanie typów funkcji - funkcje mogą posiadać swój typ

type Song = { id: number; title: string; duration: number; genre: string }
const songs: Song[] = [
  { id: 1, title: "Eye of the tiger", duration: 246, genre: "rock" },
  { id: 2, title: "Carry On Wayward Son", duration: 283, genre: "rock" },
]

type updateSong = (id: number, data: Song) => Song | boolean

const update: updateSong = (songId, data) => {
  const index = songs.findIndex(({ id }) => id === songId)
  if (index > -1) {
    return (songs[index] = data)
  }

  return false
}

update(2, { id: 2, title: "Eyes", duration: 10, genre: "rock" })

// KLASY
// Opcje dostępu
// public - anyone can access
// private - available only inside a class
// protected - available inside a class and subclasses
// readonly - property can't be modified
// static - is available directly from class (without instantiation)

// class Movie {
//   constructor(private title: string) {}

//   getTitle(): string {
//     return this.title
//   }
// }

// const movie1 = new Movie("Dragon Ball Extremum")
// movie1.getTitle()

// Akcesory: gettery (dostać się spoza klasy i nie zmieniając jej trybu dostępu) i settery -> specjalne rodzaje metod
// class MovieNew {
//   constructor(private _title: string) {}

//   set title(title: string) {
//     this._title = title
//   }

//   get title(): string {
//     return this._title
//   }
// }

class Media {
  private progress = 0

  constructor(
    readonly name: string,
    private readonly type: string,
    private readonly genre: string,
    private readonly duration: number,
  ) {}

  play(): void {
    this.progress += 1
  }
}

// class Movie extends Media {
//   constructor(name: string, genre: string, duration: number) {
//     super(name, "movie", genre, duration)
//   }
// }

// class Song extends Media {
//   constructor(name: string, genre: string, duration: number) {
//     super(name, "song", genre, duration)
//   }
// }

// const bestMovieEver = new Movie("Peaceful Warior", "Drama", 7200)
// const bestSongEver = new Song("Heart of Courage", "Cinematic", 117)

// nadawanie kształtu klasom (alternatywa do określania kształtu klas too interfejsy), które po niej dziedziczą, klasy bazowe po których można dziedziczyć, ale na ich podstawie nie można tworzyć nowych obiektów

// INTEREFEJSY - w jaki sposób mają wyglądać typ, funkcja lub klasa (opisują wygląd, ale nie mieszają się do implementacji)

interface User {
  name: string
  email: string
}

interface Admin extends User {
  is_admin: boolean
  specialpower?: boolean
}

function test(admin: Admin): string {
  return admin.name
}

test({ name: "Adam", email: "adam@gmail.com", is_admin: true })

// INTERFEJSY FUNKCJI
interface Playable {
  // interfejs parametru
  name: string
  play?(): string
}

interface Play {
  // interfejs funkcji
  (media: Playable): string
}

const playMedia: Play = function play(media: Playable): string {
  if (media.play) {
    return media.play()
  }

  return `Can't play ${media.name}`
}

const movie: Playable = {
  name: "Alalala",
  play() {
    return `Playing ${this.name}`
  },
}

playMedia(movie)
