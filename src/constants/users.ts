export const AUTHORS: Authors = {
  bots: {
    angryBot: "Jake",
    sadBot: "Saddy",
    romanticBot: "Drama",
    interestedBot: "Mark",
    psihologicBot: "Freidy",
  },
  author: "You",
}

export type Authors = {
  bots: { [key in Bots]: string }
  author: "You"
}

export type Bots =
  | "angryBot"
  | "sadBot"
  | "romanticBot"
  | "interestedBot"
  | "psihologicBot"
