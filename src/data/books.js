import Book1 from '../images/Book1.png'
import Book2 from '../images/Book2.png'
import Book3 from '../images/Book3.png'
import Book4 from '../images/Book4.png'
import Book5 from '../images/Book5.png'
import Book6 from '../images/Book6.png'
import Book7 from '../images/Book7.png'
import Book8 from '../images/Book8.png'
import Book9 from '../images/Book9.png'
import Book10 from '../images/Book10.png'
import Book11 from '../images/Book11.png'
import Book12 from '../images/Book12.png'

const books = [
  {
    price: 15.99,
    cover: Book1,
    title: 'Whispers of the Forgotten Shore',
    author: 'Globe Technologies',
    category: 'Fiction',
    rating: 5,
    description: 'When a reclusive artist discovers an ancient diary on a desolate beach, she unravels a century-old love story that eerily mirrors her own life.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book2,
    title: "The Midnight Traveler's Secret",
    author: 'Globe Technologies',
    category: 'Fiction',
    rating: 4,
    description: 'A chance encounter on a midnight train leads a lonely traveler into a web of dangerous secrets and a race against time to uncover the truth.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  },
  {
    price: 15.99,
    cover: Book3,
    title: 'Echoes of a Broken Kingdom',
    author: 'Globe Technologies',
    category: 'Fiction',
    rating: 5,
    description: 'In a war-torn land, a fallen prince must unite warring factions and reclaim his throne, but a dark force from his past threatens to destroy everything.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book4,
    title: 'Beneath the Silver Moon',
    author: 'Globe Technologies',
    category: 'Fiction',
    rating: 4,
    description: 'A quiet village harbors a deadly secret: every full moon, a mysterious figure emerges from the forest, and only a young woman can break the cycle of terror.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  },
  {
    price: 15.99,
    cover: Book5,
    title: "The Timekeeper's Lament",
    author: 'Globe Technologies',
    category: 'Fiction',
    rating: 5,
    description: 'A man cursed to live outside time must find a way to save the world before it collapses into chaos, while struggling with the memory of the love he lost.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book6,
    title: 'Shadows in the Fog',
    author: 'Globe Technologies',
    category: 'Mystery',
    rating: 4,
    description: 'A retired detective returns to his hometown to confront a series of grisly murders that seem eerily similar to an unsolved case from his past.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  },
  {
    price: 15.99,
    cover: Book7,
    title: 'The Last Cipher',
    author: 'Globe Technologies',
    category: 'Mystery',
    rating: 5,
    description: 'An antiquities dealer stumbles upon an ancient manuscript that contains the key to an international conspiracy—and now powerful enemies are hunting him down.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book8,
    title: 'Whispers of the Vanished',
    author: 'Globe Technologies',
    category: 'Mystery',
    rating: 4,
    description: 'A brilliant but troubled journalist investigates the sudden disappearance of a small town’s entire population, unraveling a shocking cover-up decades in the making.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  },
  {
    price: 15.99,
    cover: Book9,
    title: 'Through the Veil of Stars',
    author: 'Globe Technologies',
    category: 'Fantasy',
    rating: 5,
    description: 'When an astronomer discovers a rift in space, she’s pulled into an interdimensional battle that could alter the fate of not just Earth, but the entire galaxy.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book10,
    title: 'Chronicles of the Lost Horizon',
    author: 'Globe Technologies',
    category: 'Fantasy',
    rating: 4,
    description: 'In a dystopian world ravaged by climate change, a group of unlikely heroes must navigate treacherous seas to find a legendary island rumored to hold the last hope for humanity.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  },
  {
    price: 15.99,
    cover: Book11,
    title: 'Unleash Your Inner Warrior',
    author: 'Globe Technologies',
    category: 'Self-Help',
    rating: 5,
    description: 'A transformative guide that empowers readers to harness their inner strength, overcome challenges, and thrive in every area of life with resilience and purpose.',
    pdfLink: 'path/to/book1.pdf',
    audioLink: 'path/to/book-audio1.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link1'
  },
  {
    price: 12.99,
    cover: Book12,
    title: 'The Mind Architect',
    author: 'Globe Technologies',
    category: 'Self-Help',
    rating: 4,
    description: 'Combining neuroscience and practical psychology, this book helps readers rewire their minds to create lasting personal change, success, and happiness.',
    pdfLink: 'path/to/book2.pdf',
    audioLink: 'path/to/book-audio2.mp3',
    youtubeLink: 'https://www.youtube.com/channel-link2'
  }
];

export default books;