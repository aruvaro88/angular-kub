import { Band } from "./models/band.model";
export const BANDS: Band[] = [
  {
    id: 1,
    name: 'The Rolling Stones',
    description:
      'The Rolling Stones are an English rock band formed in London in 1962.',
    foundation: 1962,
    members: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
    hit: 'Paint it black',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/rolling-stones_newyj3.jpg"
  },
  {
    id: 2,
    name: 'Led Zeppelin',
    description:
      'Led Zeppelin were an English rock band formed in London in 1968. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music.',
    foundation: 1968,
    members: ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham'],
    hit: 'Starway to heaven',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970764/angular%20rocks/led-zeppelin_tl8smv.jpg"

  },
  {
    id: 3,
    name: 'Queen',
    description:
      'Queen are a British rock band formed in London in 1970. Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.',
    foundation: 1970,
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    hit: 'Bohemian Rhapsody',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/queen_kkmxgz.jpg"

  },
  {
    id: 4,
    name: 'Pink Floyd',
    description:
      'Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic rock group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. They are one of the most commercially successful and influential bands in popular music history.',
    foundation: 1965,
    members: [
      'Syd Barret',
      'Nick Mason',
      'Bob Klose',
      'Roger Waters',
      'Richard Wright',
      'David Gilmour',
    ],
    hit: 'The Wall',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970764/angular%20rocks/pink-floyd_xholdg.jpg"

  },
  {
    id: 5,
    name: 'AC/DC',
    description:
      'AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Although their music has been variously described as hard rock, blues rock, and heavy metal, the band themselves call it simply Rock and Roll',
    foundation: 1973,
    members: ['Angus Young', 'Malcolm Young', 'Brian Johnson', 'Phil Rudd'],
    hit: 'Highway to hell',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/acdc_mffufq.jpg"

  },
  {
    id: 6,
    name: 'Ramones',
    description:
      'The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens in 1974. They are often cited as the first true punk rock group. Despite achieving only limited commercial success initially, the band was highly influential in the United States, South America, and the United Kingdom.',
    foundation: 1974,
    members: ['Joey Ramone', 'Johnny Ramone', 'Marky Ramone', 'C.J Ramone'],
    hit: 'Blitzkireg Bop',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/ramones_zixkzx.jpg"

  },
  {
    id: 7,
    name: 'Kiss',
    description:
      "Kiss is an American rock band formed in New York City in January 1973. Well known for its members' face paint and stage outfits, the group rose to prominence in the mid-to-late 1970s with their elaborate live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics",
    foundation: 1973,
    members: ['Paul Stanley', 'Gene Simmons', 'Eric Singer', 'Tommy Thayer'],
    hit: 'Detroit Rock City',
    imgURL: "https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/kiss_varzjm.jpg"

  },
  {
    id: 8,
    name: 'Deep Purple',
    description:
      'Deep Purple are an English rock band formed in Hertford, Hertfordshire in 1968. The band is considered to be among the pioneers of heavy metal and modern hard rock, although their musical approach changed over the years.',
    foundation: 1968,
    members: ['Ian Paice', 'Roger Glover', 'Ian Gillan', 'Steve Morse', 'Don Airey'],
    hit: 'Smoke on the water',
    imgURL:"https://res.cloudinary.com/daxdpwqbb/image/upload/v1591970765/angular%20rocks/deep-purple_l8yxee.jpg"
  }
];
