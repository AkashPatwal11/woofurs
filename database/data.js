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
        name: 'Ferro',
        species: 'Dog',
        breed: 'Labrador Retriever',
        location: 'Bangalore',
        age: '9 years',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/ferro.jpeg',
        timeActive: 'Since 2021',
        owner: 'Piyush & Srishti',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Muffin',
        species: 'Dog',
        breed: 'Indian Pariah',
        location: 'Bangalore',
        age: '4 years',
        healthStatus: ['Vaccinated', 'Spayed', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/muffin.jpeg',
        timeActive: 'Since 2021',
        owner: 'Niharika & Sridhar',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Chkki',
        species: 'Dog',
        breed: 'Indian Spitz',
        location: 'Bangalore',
        age: '5 years',
        healthStatus: ['Vaccinated', 'Spayed', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/chikki.jpeg',
        timeActive: 'Since 2021',
        owner: 'Barsha & Arun',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Iris',
        species: 'Dog',
        breed: 'Indian Pariah',
        location: 'Bangalore',
        age: '5 years',
        healthStatus: ['Vaccinated', 'Spayed', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/iris.jpeg',
        timeActive: 'Since 2022',
        owner: 'Unnati & Srihari',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Murphy',
        species: 'Dog',
        breed: 'Golden Retriever',
        location: 'Meerut',
        age: '5 years',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/murphy.jpeg',
        timeActive: 'Since 2021',
        owner: 'Sneha & Anshul',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Poppins',
        species: 'Dog',
        breed: 'Cocker Spaniel',
        location: 'Bangalore',
        age: '3 years',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/poopins.jpeg',
        timeActive: 'Since 2021',
        owner: 'Suman',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Nala',
        species: 'Cat',
        breed: 'Indie',
        location: 'Bangalore',
        age: '2 years',
        healthStatus: ['Vaccinated', 'Spayed'],
        imageUrl: 'https://makemyai.s3.ap-south-1.amazonaws.com/woofurs/nala.jpeg',
        timeActive: 'Since 2022',
        owner: 'Unnati & Srihari',
        badge: 'Vaccination Complete',
      },
      {
        name: 'Zoey',
        species: 'Dog',
        breed: 'Golden Retriever',
        location: 'Bangalore',
        age: '3 years',
        healthStatus: ['Vaccinated', 'Neutered', 'Healthy'],
        imageUrl: '',
        timeActive: 'Since 2021',
        owner: 'Sristi',
        badge: 'Vaccination Complete',
      },
    ];

    export default data;