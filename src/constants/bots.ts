import { AUTHORS, Bots } from "./users"

type BotsData = {
  [key in Bots]: {
    author: string
    texts: string[]
  }
}

export const botsData: BotsData = {
  angryBot: {
    author: AUTHORS.bots.angryBot,
    texts: [
      "Хватит мне писать! Умоляю!",
      "Мне надоело это слушать!",
      "Уходи!!!",
    ],
  },
  sadBot: {
    author: AUTHORS.bots.sadBot,
    texts: [
      "Вокруг одна пустота..",
      "Не думаю, что это поможет...",
      "Даже, если верить исследованиям, все равно, нет.",
    ],
  },
  romanticBot: {
    author: AUTHORS.bots.romanticBot,
    texts: [
      "Ничего не говори, ты прекрасен",
      "Только подумал о солнышке, и вот они - лучики (да, я про тебя)",
      "Обожаю тебя",
      "<3",
    ],
  },
  interestedBot: {
    author: AUTHORS.bots.interestedBot,
    texts: [
      "Захватывающе, продолжай.",
      "Oчень интересно",
      "Ваааау",
      "И что потом?",
    ],
  },
  psihologicBot: {
    author: AUTHORS.bots.psihologicBot,
    texts: [
      "Доверьтесь вашим чувствам",
      "И что вы ощущали в этот момент?",
      "Приходили ли вам такие мысли ранее?",
      "Хочу найти причину, расскажите подробнее о вашем детстве.",
    ],
  },
}

type ChatsNames = {
  [key in Bots]: string
}

export const chatsNames: ChatsNames = {
  angryBot: "Angry Bot",
  sadBot: "Sad Bot",
  romanticBot: "Romantic Bot",
  interestedBot: "Interested Bot",
  psihologicBot: "Psihologic Bot",
}
