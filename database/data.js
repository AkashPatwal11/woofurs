const data = [
    {
        id: 'biEUg0_mCA',
        name: "air dried beef",
        rate: 5,
        price: "30.00",
        categorie: "beef",
        image: '/pet_food/food1.png',
        offer: {
            available: true,
            price: "28.00",
        }
    },
    {
        id: 'LZIcamdHed',
        name: "air dried lamb",
        rate: 3,
        price: "34.00",
        categorie: "food",
        image: 'pet_food/food2.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'xUf1h2hB1k',
        name: "air dried salmon",
        rate: 5,
        price: "9.99",
        categorie: "fish",
        image: 'pet_food/food3.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'fkHAu7r9Vg',
        name: "beef dog rewards",
        rate: 4,
        price: "20.00",
        categorie: "rewards",
        image: 'pet_food/food4.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'EnH46iXwNQ',
        name: "dry beef food",
        rate: 5,
        price: "16.00",
        categorie: "beef",
        image: 'pet_food/food5.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'bkw0LqZI-c',
        name: "dry chicken food",
        rate: 5,
        price: "30.00",
        categorie: "food",
        image: 'pet_food/food6.png',
        offer: {
            available: true,
            price: "28.00",
        }
    },
    {
        id: 'svmJ-PZdrG',
        name: "dry lamb food",
        rate: 5,
        price: "34.00",
        categorie: "food",
        image: 'pet_food/food7.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: '3KohRTq-lV',
        name: "dry salmon food",
        rate: 5,
        price: "20.00",
        categorie: "fish",
        image: 'pet_food/food8.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'n5BnmMBDRA',
        name: "fish dog rewards",
        rate: 3,
        price: "12.00",
        categorie: "rewards",
        image: 'pet_food/food9.png',
        offer: {
            available: true,
            price: "10.00",
        }
    },
    {
        id: 'bB2FZo2ycO',
        name: "free range chicken",
        rate: 4,
        price: "16.00",
        categorie: "food",
        image: 'pet_food/food10.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'XuTUsvnfWG',
        name: "lamb dog rewards",
        rate: 5,
        price: "36.00",
        categorie: "rewards",
        image: 'pet_food/food11.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'retYS6rasF',
        name: "rewards beef food",
        rate: 5,
        price: "20.00",
        categorie: "beef",
        image: 'pet_food/food12.png',
        offer: {
            available: true,
            price: "18.00",
        }
    },
    {
        id: 'kRS_SHIp59',
        name: "salmon full meal",
        rate: 3,
        price: "20.00",
        categorie: "fish",
        image: 'pet_food/food13.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'ph47D4nf9h',
        name: "tuna full meal",
        rate: 5,
        price: "19.00",
        categorie: "fish",
        image: 'pet_food/food14.png',
        offer: {
            available: false,
            price: null,
        }
    },
    {
        id: 'RuZeDwkBzm',
        name: "venison dog rewards",
        rate: 4,
        price: "20.00",
        categorie: "food",
        image: 'pet_food/food15.png',
        offer: {
            available: false,
            price: null,
        }
    },
]

export const petData = [
    {
        id: 'ferro0000001',
        name: 'Ferro',
        species: 'Dog',
        breed: 'Labrador Retriever',
        location: 'Bangalore',
        dateOfBirth: '2015-02-02',
        healthStatus: ['Vaccinated', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/ferro.jpeg',
        owner: 'Piyush & Srishti',
        badge: 'Vaccination Complete',
        gender: 'Male'
      },
      {
        id: 'muffin0000001',
        name: 'Muffin',
        species: 'Dog',
        breed: 'Indian Pariah',
        location: 'Bangalore',
        dateOfBirth: '2020-08-23',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/muffin.jpeg',
        owner: 'Niharika & Sridhar',
        badge: 'Vaccination Complete',
        skills: [{name: 'Puked on the Rug', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/pukrugBadge.png'}, {name: 'Stood on the Table', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/tableBadge.png'}, {name: 'Chased a Squirrel', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/squirrelbadge.png'}],
        gender: 'Male',
        bio: ` In the bustling city of Bangalore, I was born, a mischievous Indian Pariah pup named Muffin. My days were filled with exploration and adventure, but fate had different plans for me - my path crossed with a loving couple who saw past my naughty antics and recognized my gentle soul.
        Now, I am their cherished companion at home, an angel in their presence, yet the neighborhood knows me as a gunda on the loose! My days are spent playing hide-and-seek in our apartment complex, causing a ruckus that only adds to my charm. With my family by my side and my mischief under control (mostly), life has never been sweeter for this scamp of a pup named Muffin.`
      },
      {
        id: 'chikki0000001',
        name: 'Chikki',
        species: 'Dog',
        breed: 'Indian Spitz',
        location: 'Bangalore',
        dateOfBirth: '2019-01-21',
        healthStatus: ['Vaccinated', 'Spayed', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/chikki.jpeg',
        owner: 'Barsha & Arun',
        badge: 'Vaccination Complete',
        gender: 'Female',
        bio: `In the heart of Kerala, I was born, a spirited Indian Spitz pup named Chikki. Fate brought me to Bangalore, where I found a loving family - a couple who welcomed me into their home and hearts. With time, I grew to become not just their pet, but a cherished member of the family. My younger human brother, with eyes full of wonder, chases after me, and together we create a bond that transcends species. Life is filled with love, laughter, and endless adventures - all because I was chosen to be part of this wonderful family.`,
        skills: [{name: 'Puked on the Rug', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/pukrugBadge.png'}, {name: 'Stood on the Table', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/tableBadge.png'}, {name: 'Chased a Squirrel', image: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/squirrelbadge.png'}],
      },
      {
        id: 'iris0000001',
        name: 'Iris',
        species: 'Dog',
        breed: 'Indian Pariah',
        location: 'Bangalore',
        dateOfBirth: '2019-08-23',
        healthStatus: ['Vaccinated', 'Spayed', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/iris.jpeg',
        owner: 'Unnati & Srihari',
        badge: 'Vaccination Complete',
        gender: 'Female',
        bio: '',
        skills: []
      },
      {
        id: 'murphy0000001',
        name: 'Murphy',
        species: 'Dog',
        breed: 'Golden Retriever',
        location: 'Meerut',
        dateOfBirth: '2019-08-23',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/murphy.jpeg',
        owner: 'Sneha & Anshul',
        badge: 'Vaccination Complete',
        gender: 'Male',
        bio: '',
        skills: []
      },
      {
        id: 'poppins0000001',
        name: 'Poppins',
        species: 'Dog',
        breed: 'Cocker Spaniel',
        location: 'Bangalore',
        dateOfBirth: '2021-08-23',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/poopins.jpeg',
        owner: 'Suman',
        badge: 'Vaccination Complete',
        gender: 'Male',
        bio: '',
        skills: []
      },
      {
        id: 'nala0000001',
        name: 'Nala',
        species: 'Cat',
        breed: 'Indie',
        location: 'Bangalore',
        dateOfBirth: '2022-08-23',
        healthStatus: ['Vaccinated', 'Spayed'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/nala.jpeg',
        owner: 'Unnati & Srihari',
        badge: 'Vaccination Complete',
        gender: 'Female',
        bio: '',
        skills: []
      },
      {
        id: 'zoey0000001',
        name: 'Zoey',
        species: 'Dog',
        breed: 'Golden Retriever',
        location: 'Bangalore',
        dateOfBirth: '2021-08-23',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: '',
        owner: 'Sristi',
        badge: 'Vaccination Complete',
        gender: 'Male',
        bio: '',
        skills: []
      },
    ];

    export default data;