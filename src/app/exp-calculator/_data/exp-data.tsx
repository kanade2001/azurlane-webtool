type ExpDataType = {
  id: string;
  label: string;
  exp: number[]; // [exp_s, exp_m, exp_l, exp_b]
  num_battles: number; // 通常戦闘の数
  num_battles_b?: number; // ボス戦の数
};

export const ExpData: ExpDataType[] = [
  { id: "1-1", label: "1-1", exp: [96, 96, 96, 180], num_battles: 1 },
  { id: "1-2", label: "1-2", exp: [120, 132, 132, 204], num_battles: 2 },
  { id: "1-3", label: "1-3", exp: [132, 144, 144, 216], num_battles: 2 },
  { id: "1-4", label: "1-4", exp: [156, 168, 180, 252], num_battles: 3 },

  { id: "2-1", label: "2-1", exp: [180, 198, 216, 270], num_battles: 2 },
  { id: "2-2", label: "2-2", exp: [198, 218, 237, 296], num_battles: 3 },
  { id: "2-3", label: "2-3", exp: [216, 237, 259, 321], num_battles: 3 },
  { id: "2-4", label: "2-4", exp: [234, 258, 280, 348], num_battles: 3 },

  { id: "3-1", label: "3-1", exp: [252, 277, 302, 374], num_battles: 3 },
  { id: "3-2", label: "3-2", exp: [270, 297, 323, 400], num_battles: 3 },
  { id: "3-3", label: "3-3", exp: [288, 316, 345, 426], num_battles: 3 },
  { id: "3-4", label: "3-4", exp: [306, 337, 367, 452], num_battles: 3 },

  { id: "4-1", label: "4-1", exp: [324, 356, 337, 478], num_battles: 3 },
  { id: "4-2", label: "4-2", exp: [342, 376, 410, 505], num_battles: 3 },
  { id: "4-3", label: "4-3", exp: [360, 396, 432, 530], num_battles: 3 },
  { id: "4-4", label: "4-4", exp: [378, 416, 453, 556], num_battles: 4 },

  { id: "5-1", label: "5-1", exp: [396, 435, 475, 583], num_battles: 4 },
  { id: "5-2", label: "5-2", exp: [414, 456, 496, 609], num_battles: 4 },
  { id: "5-3", label: "5-3", exp: [423, 475, 518, 634], num_battles: 4 },
  { id: "5-4", label: "5-4", exp: [450, 495, 540, 661], num_battles: 4 },

  { id: "6-1", label: "6-1", exp: [468, 514, 561, 687], num_battles: 4 },
  { id: "6-2", label: "6-2", exp: [486, 535, 583, 714], num_battles: 4 },
  { id: "6-3", label: "6-3", exp: [504, 554, 604, 739], num_battles: 4 },
  { id: "6-4", label: "6-4", exp: [522, 574, 626, 765], num_battles: 5 },

  { id: "7-1", label: "7-1", exp: [534, 588, 640, 783], num_battles: 5 },
  { id: "7-2", label: "7-2", exp: [546, 601, 655, 800], num_battles: 5 },
  { id: "7-3", label: "7-3", exp: [558, 614, 669, 818], num_battles: 5 },
  { id: "7-4", label: "7-4", exp: [570, 627, 684, 835], num_battles: 5 },

  { id: "8-1", label: "8-1", exp: [552, 607, 662, 808], num_battles: 4 },
  { id: "8-2", label: "8-2", exp: [564, 620, 676, 826], num_battles: 4 },
  { id: "8-3", label: "8-3", exp: [576, 633, 691, 843], num_battles: 4 },
  { id: "8-4", label: "8-4", exp: [588, 646, 705, 853], num_battles: 4 },

  { id: "9-1", label: "9-1", exp: [600, 660, 720, 872], num_battles: 5 },
  { id: "9-2", label: "9-2", exp: [612, 673, 734, 890], num_battles: 5 },
  { id: "9-3", label: "9-3", exp: [624, 686, 748, 907], num_battles: 5 },
  { id: "9-4", label: "9-4", exp: [636, 699, 763, 924], num_battles: 5 },

  { id: "10-1", label: "10-1", exp: [648, 712, 777, 948], num_battles: 6 },
  { id: "10-2", label: "10-2", exp: [654, 720, 784, 957], num_battles: 6 },
  { id: "10-3", label: "10-3", exp: [666, 732, 799, 974], num_battles: 6 },
  { id: "10-4", label: "10-4", exp: [678, 745, 813, 991], num_battles: 6 },

  { id: "11-1", label: "11-1", exp: [863, 948, 1034, 1261], num_battles: 6 },
  { id: "11-2", label: "11-2", exp: [870, 956, 1044, 1272], num_battles: 6 },
  { id: "11-3", label: "11-3", exp: [877, 963, 1052, 1281], num_battles: 6 },
  { id: "11-4", label: "11-4", exp: [884, 973, 1062, 1293], num_battles: 6 },

  { id: "12-1", label: "12-1", exp: [900, 990, 1080, 1315], num_battles: 6 },
  { id: "12-2", label: "12-2", exp: [907, 997, 1088, 1326], num_battles: 6 },
  { id: "12-3", label: "12-3", exp: [913, 1005, 1098, 1338], num_battles: 6 },
  { id: "12-4", label: "12-4", exp: [921, 1024, 1106, 1347], num_battles: 6 },

  { id: "13-1", label: "13-1", exp: [936, 1029, 1123, 1369], num_battles: 6 },
  { id: "13-2", label: "13-2", exp: [943, 1036, 1131, 1380], num_battles: 6 },
  { id: "13-3", label: "13-3", exp: [950, 1045, 1140, 1390], num_battles: 6 },
  { id: "13-4", label: "13-4", exp: [957, 1053, 1148, 1401], num_battles: 7 },

  { id: "14-1", label: "14-1", exp: [972, 1069, 1166, 1458], num_battles: 6 },
  { id: "14-2", label: "14-2", exp: [979, 1077, 1174, 1468], num_battles: 6 },
  { id: "14-3", label: "14-3", exp: [986, 1084, 1183, 1479], num_battles: 6 },
  { id: "14-4", label: "14-4", exp: [992, 1092, 1192, 1490], num_battles: 7 },

  { id: "15-1", label: "15-1", exp: [990, 1089, 1188, 1490], num_battles: 6 },
  { id: "15-2", label: "15-2", exp: [993, 1093, 1192, 1496], num_battles: 6 },
  {
    id: "15-3",
    label: "15-3",
    exp: [997, 1096, 1196, 1351, 1501],
    num_battles: 6,
    num_battles_b: 2,
  },
  {
    id: "15-4",
    label: "15-4",
    exp: [1000, 1100, 1201, 1356, 1506],
    num_battles: 8,
    num_battles_b: 3,
  },
];
