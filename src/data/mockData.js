import { tokens } from "../theme";
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Bhatinda",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "Ludhiana",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "Saroili",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "Kaola",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "Mohali",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "Ludhiana",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "Firozpur",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "Jalandhar",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    Ludhiana: 137,
    LudhianaColor: "hsl(229, 70%, 50%)",
    Mohali: 96,
    MohaliColor: "hsl(296, 70%, 50%)",
    Jalandhar: 72,
    JalandharColor: "hsl(97, 70%, 50%)",
    Firozpur: 140,
    FirozpurColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    Ludhiana: 55,
    LudhianaColor: "hsl(307, 70%, 50%)",
    Mohali: 28,
    MohaliColor: "hsl(111, 70%, 50%)",
    Jalandhar: 58,
    JalandharColor: "hsl(273, 70%, 50%)",
    Firozpur: 29,
    FirozpurColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    Ludhiana: 109,
    LudhianaColor: "hsl(72, 70%, 50%)",
    Mohali: 23,
    MohaliColor: "hsl(96, 70%, 50%)",
    Jalandhar: 34,
    JalandharColor: "hsl(106, 70%, 50%)",
    Firozpur: 152,
    FirozpurColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    Ludhiana: 133,
    LudhianaColor: "hsl(257, 70%, 50%)",
    Mohali: 52,
    MohaliColor: "hsl(326, 70%, 50%)",
    Jalandhar: 43,
    JalandharColor: "hsl(110, 70%, 50%)",
    Firozpur: 83,
    FirozpurColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    Ludhiana: 81,
    LudhianaColor: "hsl(190, 70%, 50%)",
    Mohali: 80,
    MohaliColor: "hsl(325, 70%, 50%)",
    Jalandhar: 112,
    JalandharColor: "hsl(54, 70%, 50%)",
    Firozpur: 35,
    FirozpurColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    Ludhiana: 66,
    LudhianaColor: "hsl(208, 70%, 50%)",
    Mohali: 111,
    MohaliColor: "hsl(334, 70%, 50%)",
    Jalandhar: 167,
    JalandharColor: "hsl(182, 70%, 50%)",
    Firozpur: 18,
    FirozpurColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    Ludhiana: 80,
    LudhianaColor: "hsl(87, 70%, 50%)",
    Mohali: 47,
    MohaliColor: "hsl(141, 70%, 50%)",
    Jalandhar: 158,
    JalandharColor: "hsl(224, 70%, 50%)",
    Firozpur: 49,
    FirozpurColor: "hsl(274, 70%, 50%)",
  },
];


export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

// export const mockLineData = [
//   {
//     id: "SQM",
//     color: tokens("dark").greenAccent[500],
//     data: [
//       {
//         x: "plane",
//         y: 101,
//       },
//       {
//         x: "helicopter",
//         y: 75,
//       },
//       {
//         x: "boat",
//         y: 36,
//       },
//       {
//         x: "train",
//         y: 216,
//       },
//       {
//         x: "subway",
//         y: 35,
//       },
//       {
//         x: "bus",
//         y: 236,
//       },
//       {
//         x: "car",
//         y: 88,
//       },
//       {
//         x: "moto",
//         y: 232,
//       },
//       {
//         x: "bicycle",
//         y: 281,
//       },
//       {
//         x: "horse",
//         y: 1,
//       },
//       {
//         x: "skateboard",
//         y: 35,
//       },
//       {
//         x: "others",
//         y: 14,
//       },
//     ],
//   },
//   {
//     id: "NQM",
//     color: tokens("dark").blueAccent[300],
//     data: [
//       {
//         x: "plane",
//         y: 212,
//       },
//       {
//         x: "helicopter",
//         y: 190,
//       },
//       {
//         x: "boat",
//         y: 270,
//       },
//       {
//         x: "train",
//         y: 9,
//       },
//       {
//         x: "subway",
//         y: 75,
//       },
//       {
//         x: "bus",
//         y: 175,
//       },
//       {
//         x: "car",
//         y: 33,
//       },
//       {
//         x: "moto",
//         y: 189,
//       },
//       {
//         x: "bicycle",
//         y: 97,
//       },
//       {
//         x: "horse",
//         y: 87,
//       },
//       {
//         x: "skateboard",
//         y: 299,
//       },
//       {
//         x: "others",
//         y: 251,
//       },
//     ],
//   },
//   {
//     id: "QCR",
//     color: tokens("dark").redAccent[200],
//     data: [
//       {
//         x: "plane",
//         y: 191,
//       },
//       {
//         x: "helicopter",
//         y: 136,
//       },
//       {
//         x: "boat",
//         y: 91,
//       },
//       {
//         x: "train",
//         y: 190,
//       },
//       {
//         x: "subway",
//         y: 211,
//       },
//       {
//         x: "bus",
//         y: 152,
//       },
//       {
//         x: "car",
//         y: 189,
//       },
//       {
//         x: "moto",
//         y: 152,
//       },
//       {
//         x: "bicycle",
//         y: 8,
//       },
//       {
//         x: "horse",
//         y: 197,
//       },
//       {
//         x: "skateboard",
//         y: 107,
//       },
//       {
//         x: "others",
//         y: 170,
//       },
//     ],
//   },
// ];

export const mockLineData = [
  {
    id: "NQM",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "15/02/2021",
        y: 101,
      },
      {
        x: "15/05/2021",
        y: 75,
      },
      {
        x: "15/08/2021",
        y: 36,
      },
      {
        x: "15/11/2021",
        y: 216,
      },
      {
        x: "15/02/2022",
        y: 35,
      },
      {
        x: "15/05/2022",
        y: 236,
      },
      {
        x: "15/08/2022",
        y: 88,
      },
      {
        x: "15/11/2022",
        y: 232,
      },
      {
        x: "15/02/2023",
        y: 281,
      },
      {
        x: "15/05/2023",
        y: 1,
      },
      {
        x: "15/08/2023",
        y: 35,
      },
      {
        x: "15/11/2023",
        y: 14,
      },
    ],
  },
  {
    id: "SQM",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "15/02/2021",
        y: 212,
      },
      {
        x: "15/05/2021",
        y: 190,
      },
      {
        x: "15/08/2021",
        y: 270,
      },
      {
        x: "15/11/2021",
        y: 9,
      },
      {
        x: "15/02/2022",
        y: 75,
      },
      {
        x: "15/05/2022",
        y: 175,
      },
      {
        x: "15/08/2022",
        y: 33,
      },
      {
        x: "15/11/2022",
        y: 189,
      },
      {
        x: "15/02/2023",
        y: 97,
      },
      {
        x: "15/05/2023",
        y: 87,
      },
      {
        x: "15/08/2023",
        y: 299,
      },
      {
        x: "15/11/2023",
        y: 251,
      },
    ],
  },
  // {
  //   id: "QCR",
  //   color: tokens("dark").redAccent[200],
  //   data: [
  //     {
  //       x: "15/02/2021",
  //       y: 191,
  //     },
  //     {
  //       x: "15/05/2021",
  //       y: 136,
  //     },
  //     {
  //       x: "15/08/2021",
  //       y: 91,
  //     },
  //     {
  //       x: "15/11/2021",
  //       y: 190,
  //     },
  //     {
  //       x: "15/02/2022",
  //       y: 211,
  //     },
  //     {
  //       x: "15/05/2022",
  //       y: 152,
  //     },
  //     {
  //       x: "15/08/2022",
  //       y: 189,
  //     },
  //     {
  //       x: "15/11/2022",
  //       y: 152,
  //     },
  //     {
  //       x: "15/02/2023",
  //       y: 8,
  //     },
  //     {
  //       x: "15/05/2023",
  //       y: 197,
  //     },
  //     {
  //       x: "15/08/2023",
  //       y: 107,
  //     },
  //     {
  //       x: "15/11/2023",
  //       y: 170,
  //     },
  //   ],
  // },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];

export const experiences = [
    {
      title: "Initiation of Project",
      icon: one,
      iconBg: "#383E56",
      date: "2023-04-01 - 2023-06-30",
      name1: "Goyal Ashok Kumar | SQM | July 23, 2021",
      name2: "Chaudhary P. P. | SQM | Sept 28, 2021",
      type1: "Satisfactory",
      type2: "Satisfactory",
      points: [
        "Conducting project feasibility studies and defining project scope.",
        "Securing necessary approvals and permits.",
        "Developing project plans and timelines.",
        "Assembling project team and resources.",
      ],
    },
    {
      title: "Completion of Pavement",
      icon: two,
      iconBg: "#383E56",
      date: "2023-07-01 - 2023-09-30",
      name1: "Goyal Ashok Kumar | NQM | April 24, 2022",
      name2: "Chaudhary P. P. | SQM | june 21, 2022",
      type1: "Satisfactory",
      type2: "Satisfactory",
      points: [
        "Executing pavement construction activities.",
        "Ensuring quality control and compliance with specifications.",
        "Monitoring and managing construction schedule.",
        "Coordinating with contractors and suppliers.",
      ],
    },
    {
      title: "Completion of Cross Drainage Phase",
      icon: three,
      iconBg: "#E6DEDD",
      date: "2023-10-01 - 2023-12-31",
      name1: "Goyal Ashok Kumar | SQM | April 24, 2022",
      name2: "Chaudhary P. P. | SQM | june 21, 2022",
      type1: "Satisfactory",
      type2: "Satisfactory",
      points: [
        "Implementing cross drainage solutions and structures.",
        "Ensuring environmental compliance for water management.",
        "Addressing environmental impact concerns.",
        "Collaborating with environmental specialists.",
      ],
    },
    {
      title: "Environmental Compliance and Impact Mitigation",
      icon: four,
      iconBg: "#E6DEDD",
      date: "2024-01-01 - 2024-03-31",
      name1: "Goyal Ashok Kumar | SQM | Feb 27, 2023",
      name2: "Chaudhary P. P. | SQM | Nov 3-0, 2023",
      type1: "Satisfactory",
      type2: "Satisfactory",
      points: [
        "Conducting environmental impact assessments.",
        "Implementing mitigation measures and sustainability practices.",
        "Ensuring compliance with environmental regulations.",
        "Collaborating with environmental agencies for approvals.",
      ],
    },
    {
      title: "Project Completion and Handover",
      icon: five,
      iconBg: "#E6DEDD",
      date: "2024-04-01 - 2024-06-30",
      name1: "Goyal Ashok Kumar | SQM | July 23, 2021",
      name2: "Chaudhary P. P. | SQM | Sept 28, 2021",
      type1: "Satisfactory",
      type2: "Satisfactory",
      points: [
        "Finalizing project documentation and reports.",
        "Conducting project walkthroughs and inspections.",
        "Completing any outstanding tasks and punch list items.",
        "Handing over the project to stakeholders and clients.",
      ],
    },
];


