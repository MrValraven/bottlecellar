const MOCK_DATA = [
  {
    name: "Descoberta",
    brand: "Casa da Passarella",
    year: 2022,
    price: 16.39,
    quantity: 11,
    rating: "5",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-17eab92efcfb",
  },
  {
    name: "Tapada das Lebres",
    brand: "Tapada das Lebres",
    year: 2009,
    price: 12.99,
    quantity: 4,
    rating: "3",
    notes: [
      "Sabor macio e aveludado, com excelente estrutura e final persistente. Frutos secos e especiarias.",
      "O teor alcoólico é 14%",
      "É um vinho tinto e tem uma cor granada",
    ],
    id: "1a7ae20d-5141-4bd9-afa0-jfid",
  },
  {
    name: "Mula Velha Reserva",
    brand: "Mula Velha",
    year: 2012,
    price: 2.89,
    quantity: 10,
    rating: "2",
    notes: ["Tem uma boa relação qualidade preço, Bom para oferecer no Natal"],
    id: "1a7ae20d-5141-4bd9-afa0-jfidreg35rt",
  },
  {
    name: "Cancellus Premium DOC",
    brand: "Cancellus",
    year: 2019,
    price: 3.69,
    quantity: 2,
    rating: "4",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfid34gthg54",
  },
  {
    name: "Pera Doce Reserva",
    brand: "Pera Doce",
    year: 2021,
    price: 3.29,
    quantity: 8,
    rating: "5",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgf4g456g",
  },
  {
    name: "Pera Doce Regional",
    brand: "Pera Doce",
    year: 2020,
    price: 4.99,
    quantity: 6,
    rating: "5",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidtjhtrher",
  },
  {
    name: "Guarda Rios Regional",
    brand: "Guarda Rios",
    year: 2000,
    price: 3.99,
    quantity: 6,
    rating: "3",
    notes: ["É bom"],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgfgret",
  },
  {
    name: "Terra Lenta Premium DOC",
    brand: "Carmim",
    year: 2020,
    price: 9.99,
    quantity: 2,
    rating: "4",
    notes: ["Ótimo para comer com assados"],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgg24g3",
  },
  {
    name: "Contemporal Regional",
    brand: "Contemporal",
    year: 2001,
    price: 1.89,
    quantity: 1,
    rating: "4",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidmutrth",
  },
  {
    name: "Lambrusco",
    brand: "Ilhas",
    year: 2000,
    price: 1.99,
    quantity: 1,
    rating: "5",
    notes: ["Decente para comer com peixe ou saladas"],
    id: "1a7ae20d-5141-4bd9-afa0-jfiderg4e",
  },
  {
    name: "370 Léguas",
    brand: "Leguas",
    year: 1980,
    price: 50.39,
    quantity: 1,
    rating: "3",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgertg",
  },
  {
    name: "Muralhas",
    brand: "Muralhas",
    year: 2020,
    price: 4.19,
    quantity: 2,
    rating: "3",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidg5g5g3w",
  },
  {
    name: "Catarina",
    brand: "Bacalhoa",
    year: 2001,
    price: 7.49,
    quantity: 1,
    rating: "3",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfid35gf5",
  },
  {
    name: "Quadrifolia",
    brand: "Vallado",
    year: 2000,
    price: 4.19,
    quantity: 6,
    rating: "4",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgeg4e5",
  },
  {
    name: "Arcos do Convento",
    brand: "Arcos",
    year: 2007,
    price: 5.99,
    quantity: 2,
    rating: "3",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfiddwsg3g5",
  },
  {
    name: "Palmelão",
    brand: "Adega de Palmela",
    year: 2005,
    price: 1.99,
    quantity: 6,
    rating: "2",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidgthy",
  },
  {
    name: "Assobio",
    brand: "Esporão",
    year: 2010,
    price: 5.99,
    quantity: 2,
    rating: "5",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidg3g35",
  },
  {
    name: "Pacheca",
    brand: "Quinta da Pacheca",
    year: 2022,
    price: 6.99,
    quantity: 6,
    rating: "4",
    notes: [],
    id: "1a7ae20d-5141-4bd9-afa0-jfidg355grfe",
  },
  {
    name: "Faisão Frutado Rosé",
    brand: "Faisão",
    year: 2021,
    price: 2.19,
    quantity: 6,
    rating: "3",
    notes: [
      "Sabor e Aroma leve, macio e adocicado com final fresco e boa persistência. Jovem a frutos silvestres.",
    ],
    id: "1a7ae20d-5141-4bd9-afa0-jfidg35fh",
  },
  {
    name: "Monte Velho",
    brand: "Esporão",
    year: 2005,
    price: 4.19,
    quantity: 2,
    rating: "5",
    notes: [
      "Sabor e Aroma leve, macio e adocicado com final fresco e boa persistência.",
    ],
    id: "1a7ae20d-5141-4bd9-afa0-fdkfwpcg",
  },
];

export default MOCK_DATA;
