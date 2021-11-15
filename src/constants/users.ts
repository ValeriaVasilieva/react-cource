export const AUTHORS = {
  bots: {
    angryBot: "Jake",
    sadBot: "Saddy",
    romanticBot: "Drama",
    interestedBot: "Mark",
    psihologicBot: "Freidy",
  },
  author: "You",
}

export type Bots = keyof typeof AUTHORS.bots
