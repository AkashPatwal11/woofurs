const data = [
  {
    id: "biEUg0_mCA",
    name: "air dried beef",
    rate: 5,
    price: "30.00",
    categorie: "beef",
    image: "/pet_food/food1.png",
    offer: {
      available: true,
      price: "28.00",
    },
  },
  {
    id: "LZIcamdHed",
    name: "air dried lamb",
    rate: 3,
    price: "34.00",
    categorie: "food",
    image: "pet_food/food2.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "xUf1h2hB1k",
    name: "air dried salmon",
    rate: 5,
    price: "9.99",
    categorie: "fish",
    image: "pet_food/food3.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "fkHAu7r9Vg",
    name: "beef dog rewards",
    rate: 4,
    price: "20.00",
    categorie: "rewards",
    image: "pet_food/food4.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "EnH46iXwNQ",
    name: "dry beef food",
    rate: 5,
    price: "16.00",
    categorie: "beef",
    image: "pet_food/food5.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "bkw0LqZI-c",
    name: "dry chicken food",
    rate: 5,
    price: "30.00",
    categorie: "food",
    image: "pet_food/food6.png",
    offer: {
      available: true,
      price: "28.00",
    },
  },
  {
    id: "svmJ-PZdrG",
    name: "dry lamb food",
    rate: 5,
    price: "34.00",
    categorie: "food",
    image: "pet_food/food7.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "3KohRTq-lV",
    name: "dry salmon food",
    rate: 5,
    price: "20.00",
    categorie: "fish",
    image: "pet_food/food8.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "n5BnmMBDRA",
    name: "fish dog rewards",
    rate: 3,
    price: "12.00",
    categorie: "rewards",
    image: "pet_food/food9.png",
    offer: {
      available: true,
      price: "10.00",
    },
  },
  {
    id: "bB2FZo2ycO",
    name: "free range chicken",
    rate: 4,
    price: "16.00",
    categorie: "food",
    image: "pet_food/food10.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "XuTUsvnfWG",
    name: "lamb dog rewards",
    rate: 5,
    price: "36.00",
    categorie: "rewards",
    image: "pet_food/food11.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "retYS6rasF",
    name: "rewards beef food",
    rate: 5,
    price: "20.00",
    categorie: "beef",
    image: "pet_food/food12.png",
    offer: {
      available: true,
      price: "18.00",
    },
  },
  {
    id: "kRS_SHIp59",
    name: "salmon full meal",
    rate: 3,
    price: "20.00",
    categorie: "fish",
    image: "pet_food/food13.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "ph47D4nf9h",
    name: "tuna full meal",
    rate: 5,
    price: "19.00",
    categorie: "fish",
    image: "pet_food/food14.png",
    offer: {
      available: false,
      price: null,
    },
  },
  {
    id: "RuZeDwkBzm",
    name: "venison dog rewards",
    rate: 4,
    price: "20.00",
    categorie: "food",
    image: "pet_food/food15.png",
    offer: {
      available: false,
      price: null,
    },
  },
];
const skills = [
  {
    name: "Puked on the Rug",//0
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/pukrugBadge.png",
  },
  {
    name: "Stood on the Table",//1
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/tableBadge.png",
  },
  {
    name: "Chased a Squirrel",//2
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/squirrelbadge.png",
  },
  {
    name: "Walked on a Loose Leash",//3
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/looseLeashBadge.png",
  },
  {
    name: "Took a Bath",//4
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/bathBadge.png",
  },
  {
    name: "Buried a Bone",//5
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/boneBadge.png",
  },
  {
    name: "Maintains Personal Boundaries",//6
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/boundariesBadge.png",
  },
  {
    name: "Protected House from Delivery Person",//7
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/deliveryBadge.png",
  },
  {
    name: "Made a Friend",//8
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/friendBadge.png",
  },
  {
    name: "Furniture Redecorated",//9
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/furnitureBadge.png",
  },
  {
    name: "Rescued Me",//10
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/rescuedBadge.png",
  },
  {
    name: "Rolled in Something Gross",//11
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/rolledGrassBadge.png",
  },
  {
    name: "Civil Rights Watchdog",//12
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/watchdogBadge.png",
  },
  {
    name: "Gave Zero F*cks",//13
    image:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/badges/zeroBadge.png",
  },
];

export const petData = [
  {
    id: "ferro0000001",
    name: "Ferro",
    species: "Dog",
    breed: "Labrador Retriever",
    location: "Bangalore",
    dateOfBirth: "2015-02-02",
    healthStatus: ["Vaccinated", "Healthy"],
    imageUrl: "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/ferro.jpeg",
    owner: "Srishti & Piyush",
    badge: "Vaccination Complete",
    skills: [skills[0], skills[3], skills[4], skills[7], skills[13]],
    gender: "Male",
    bio: `In the vibrant city of Bangalore, I was born - a playful Labrador named Ferro. With seven bachelors as my companions, life was filled with endless adventures, chasing tails, and devouring treats (especially chicken!).

        Time passed, and one by one, my bachelor buddies found their soulmates. But Ferro remained - the constant companion to the last of the bunch, who finally decided to take me home and start a family with his soulmate.
        
        Now, I live a life filled with love, walks in the park, and the occasional snore during office meetings (sorry, boss!). And though my days are not as wild as they once were, every wag of my tail reminds me that I am loved, cherished, and forever grateful for my journey to this loving home.`,
  },
  {
    id: "muffin0000001",
    name: "Muffin",
    species: "Dog",
    breed: "Indian Pariah",
    location: "Bangalore",
    dateOfBirth: "2020-08-23",
    healthStatus: ["Vaccinated", "Neutered", "Healthy"],
    imageUrl:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/muffin.jpeg",
    owner: "Niharika & Sridhar",
    badge: "Vaccination Complete",
    skills: [skills[0], skills[1], skills[2], skills[3], skills[4], skills[7], skills[8], skills[10], skills[11], , skills[12]],
    gender: "Male",
    bio: ` In the bustling city of Bangalore, I was born, a mischievous Indian Pariah pup named Muffin. My days were filled with exploration and adventure, but fate had different plans for me - my path crossed with a loving couple who saw past my naughty antics and recognized my gentle soul.
        Now, I am their cherished companion at home, an angel in their presence, yet the neighborhood knows me as a gunda on the loose! My days are spent playing hide-and-seek in our apartment complex, causing a ruckus that only adds to my charm. With my family by my side and my mischief under control (mostly), life has never been sweeter for this scamp of a pup named Muffin.`,
  },
  {
    id: "chikki0000001",
    name: "Chikki",
    species: "Dog",
    breed: "Indian Spitz",
    location: "Bangalore",
    dateOfBirth: "2019-01-21",
    healthStatus: ["Vaccinated", "Spayed", "Healthy"],
    imageUrl:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/chikki.jpeg",
    owner: "Barsha & Arun",
    badge: "Vaccination Complete",
    gender: "Female",
    bio: `In the heart of Kerala, I was born, a spirited Indian Spitz pup named Chikki. Fate brought me to Bangalore, where I found a loving family - a couple who welcomed me into their home and hearts. With time, I grew to become not just their pet, but a cherished member of the family. My younger human brother, with eyes full of wonder, chases after me, and together we create a bond that transcends species. Life is filled with love, laughter, and endless adventures - all because I was chosen to be part of this wonderful family.`,
    skills: [skills[0], skills[1], skills[2], skills[3], skills[4], skills[7], skills[8], skills[10], skills[11], skills[9] , skills[5]],
  },
  {
    id: "loki0000001",
    name: "Loki",
    species: "Dog",
    breed: "Pitbull",
    location: "Bangalore",
    dateOfBirth: "2021-08-23",
    healthStatus: ["Vaccinated", "Neutered", "Healthy"],
    imageUrl: "",
    owner: "Kyanak",
    badge: "Vaccination Complete",
    gender: "Male",
    bio: "",
    skills: [skills[0], skills[1], skills[2], skills[3], skills[4], skills[7], skills[8], skills[10], skills[11], , skills[12]],
  },
  {
    id: "iris0000001",
    name: "Iris",
    species: "Dog",
    breed: "Indian Pariah",
    location: "Bangalore",
    dateOfBirth: "2019-08-23",
    healthStatus: ["Vaccinated", "Spayed", "Healthy"],
    imageUrl: "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/iris.jpeg",
    owner: "Unnati & Srihari",
    badge: "Vaccination Complete",
    gender: "Female",
    bio: ` In the heart of Bangalore, I was born - an independent Indian Pariah named Iris. Roaming the city's alleys, I learned to fend for myself, but fate brought me to a beautiful home shared by a couple and their feline companion, Nala.

    Life with my new family is filled with companionship, love, and playful rivalries between Iris and Nala (I must admit, she wins most of the time!). The couple's affection and care have made me feel truly cherished, and every day brings a new adventure in our shared home. I am grateful for this life, filled with love, laughter, and friendship that transcends species.`,
    skills: [skills[0], skills[1], skills[2], skills[3], skills[4], skills[7], skills[8], skills[10], skills[11], skills[9] , skills[5]],
  },
  {
    id: "murphy0000001",
    name: "Murphy",
    species: "Dog",
    breed: "Golden Retriever",
    location: "Meerut",
    dateOfBirth: "2019-08-23",
    healthStatus: ["Vaccinated", "Neutered", "Healthy"],
    imageUrl:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/murphy.jpeg",
    owner: "Sneha & Anshul",
    badge: "Vaccination Complete",
    gender: "Male",
    bio: "",
    skills: [],
  },
  {
    id: "poppins0000001",
    name: "Poppins",
    species: "Dog",
    breed: "Cocker Spaniel",
    location: "Bangalore",
    dateOfBirth: "2021-08-30",
    healthStatus: ["Vaccinated", "Healthy"],
    imageUrl:
      "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/poopins.jpeg",
    owner: "Suman",
    badge: "Vaccination Complete",
    gender: "Male",
    bio: "",
    skills: [],
  },
  {
    id: "nala0000001",
    name: "Nala",
    species: "Cat",
    breed: "Indie",
    location: "Bangalore",
    dateOfBirth: "2022-08-23",
    healthStatus: ["Vaccinated", "Spayed"],
    imageUrl: "https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/nala.jpeg",
    owner: "Unnati & Srihari",
    badge: "Vaccination Complete",
    gender: "Female",
    bio: ` In the heart of Bangalore, I was born - a curious Indie named Nala. With a coat as sleek as a whisper and eyes filled with mystery, I roamed the city's alleys, capturing hearts along the way.

    One day, my path crossed with Iris, a playful Indian Pariah who had made her home with a beautiful couple. Together, we became inseparable - sharing laughter, love, and countless adventures that tested our friendship and bond.
    
    Now, life is filled with chasing tails, napping in the sun, and the occasional rivalry (I must admit, Iris still wins most of the time!). The couple's affection and care have made me feel truly cherished, and every day brings a new adventure in our shared home. Nala - forever grateful for this life, filled with love, laughter, and friendship that transcends species.`,
    skills: [skills[13], skills[10], skills[9], skills[6], skills[2], skills[1]],
  },
  {
    id: "zoey0000001",
    name: "Zoey",
    species: "Dog",
    breed: "Golden Retriever",
    location: "Bangalore",
    dateOfBirth: "2021-08-23",
    healthStatus: ["Vaccinated", "Neutered", "Healthy"],
    imageUrl: "",
    owner: "Sristi",
    badge: "Vaccination Complete",
    gender: "Male",
    bio: "",
    skills: [],
  },
];

export default data;
