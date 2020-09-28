const data: number[] = [1, 2, 3]

// Tuple - rodzaj tablicy: liczbe elementów i typy są dokładnie określone
let settings: [string, boolean]

// Object
const user: { name: string; getName(): string } = {
  name: "Adam",
  getName() {
    return this.name
  },
}

// Enum - nazwane określone wartości liczbowe / tekstowe
enum extensions {
  doc,
  docx,
  pdf,
}

let coffeeSize: "medium" | "large"

// Union type: wykorzystanie jednego lub drugiego typu
let stringOrNumber: string | number

// utworzenie nowego typu
type doubleAnything = string | number

function double(value: doubleAnything): number {
  if (typeof value === "string") {
    return parseInt(value, 10) * 2
  }

  return value * 2
}

// inferencja - Ts sam potrafi domyślić się typu
