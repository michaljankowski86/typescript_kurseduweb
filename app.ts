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
