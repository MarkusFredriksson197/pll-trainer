export interface PLLAlgorithm {
  name: string;
  category: string;
  algorithm: string;
  probability: string;
  auf: string;
  difficulty: number; // 1-4 dots
  recognition: string;
  notes: string;
  pattern: string[][];
}

export const pllAlgorithms: PLLAlgorithm[] = [
  // EDGES ONLY
  {
    name: "Ua",
    category: "Edges Only",
    algorithm: "( R U R' U R' ) U' R2 U' ( R' U R' U R )",
    probability: "1/18",
    auf: "U2",
    difficulty: 2,
    recognition: "Bar in the front & edge on the left side is opposite relative to its side (or the edge on the right isn't)",
    notes: "Looks like a long alg, but it flows super well and is regripless, which makes it one of my fastest PLL's. To help memorize: see how you move pairs around.",
    pattern: [
      ["Y", "R", "Y"],
      ["G", "Y", "B"],
      ["Y", "O", "Y"]
    ]
  },
  {
    name: "Ub",
    category: "Edges Only",
    algorithm: "( R' U ) ( R' U' ) ( R' U' ) ( R' U ) R U R2",
    probability: "1/18",
    auf: "U'",
    difficulty: 2,
    recognition: "Bar in the front & edge on the right side is opposite relative to its side (or the edge on the left isn't)",
    notes: "Make sure to watch the video to finger trick this one, since the third R' can be tricky. Notice how (R' U) & (R' U') repeat.",
    pattern: [
      ["Y", "R", "Y"],
      ["B", "Y", "G"],
      ["Y", "O", "Y"]
    ]
  },
  {
    name: "H",
    category: "Edges Only",
    algorithm: "M2 ( U' ) M2 ( U2 ) M2 ( U' ) M2",
    probability: "1/72",
    auf: "",
    difficulty: 1,
    recognition: "All edges are opposite compared to its corners. If you notice this is the case for two sides, you can tell it's an H perm.",
    notes: "You can perform this alg from any side. If you use left hand for M slices, do the inverse alg M2 ( U ) M2 ( U2 ) M2 ( U ) M2. ! Double-flick U2's !",
    pattern: [
      ["Y", "G", "Y"],
      ["R", "Y", "O"],
      ["Y", "B", "Y"]
    ]
  },
  {
    name: "Z",
    category: "Edges Only",
    algorithm: "M' U' ( M2 U' ) ( M2 U' ) M' U2 M2",
    probability: "1/36",
    auf: "U'",
    difficulty: 2,
    recognition: "Very similar to the H perm, although this one doesn't have any opposite colors on any side. This forms two checkerboard patterns (red/green and blue/orange)",
    notes: "Make sure to hold a checkerboard (two sides with only two colors) on the right side for this alg. Inverse alg: y M' U ( M2 U ) ( M2 U ) M' U2 M2",
    pattern: [
      ["Y", "R", "Y"],
      ["G", "Y", "R"],
      ["Y", "G", "Y"]
    ]
  },

  // CORNERS ONLY
  {
    name: "Aa",
    category: "Corners Only",
    algorithm: "x ( R' U R' ) D2 ( R U' R' ) D2 R2 x'",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Block in the left front, and headlights in the back.",
    notes: "The rotation and the R' are executed as an l'. Make sure to use alternating fingers (pinky/ring or ring/pinky) for the D moves.",
    pattern: [
      ["R", "R", "Y"],
      ["R", "Y", "G"],
      ["O", "B", "Y"]
    ]
  },
  {
    name: "Ab",
    category: "Corners Only",
    algorithm: "x R2 D2 ( R U R' ) D2 ( R U' R ) x'",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Block in the left front, and headlights on the right.",
    notes: "Same alg as the Aa, just mirrored. Once again make sure to use alternating fingers for the D2's. That's all I ask from you.",
    pattern: [
      ["R", "R", "Y"],
      ["R", "Y", "B"],
      ["O", "G", "Y"]
    ]
  },
  {
    name: "E",
    category: "Corners Only",
    algorithm: "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x",
    probability: "1/36",
    auf: "",
    difficulty: 4,
    recognition: "No blocks or bars. Make sure that the two pieces pointed to with arrows are the same color, otherwise you'll end up with a H perm.",
    notes: "Get ready to hate this one. Make sure you push the D' 's with you ring finger (watch video to be sure).",
    pattern: [
      ["R", "B", "Y"],
      ["G", "Y", "O"],
      ["Y", "R", "B"]
    ]
  },

  // ADJACENT SWAP
  {
    name: "T",
    category: "Adjacent Swap",
    algorithm: "( R U R' U' ) ( R' F R2 U' ) R' U' ( R U R' F' )",
    probability: "1/18",
    auf: "",
    difficulty: 1,
    recognition: "Two bars attached to headlights, hold the headlights on the left",
    notes: "Probably the best knowns PLL. To memorize this one it can help to track the pairs",
    pattern: [
      ["R", "R", "Y"],
      ["G", "Y", "G"],
      ["Y", "B", "Y"]
    ]
  },
  {
    name: "F",
    category: "Adjacent Swap",
    algorithm: "( R' U' F' ) ( R U R' U' ) ( R' F R2 U' ) ( R' U' R U ) ( R' U R )",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Block in the left front, and headlights on the right.",
    notes: "( R' U' F' ) followed by T- perm with different ending. Long alg, but really easy to recognize (and pretty fast if executed properly)",
    pattern: [
      ["R", "R", "Y"],
      ["R", "Y", "G"],
      ["Y", "B", "Y"]
    ]
  },
  {
    name: "Ja",
    category: "Adjacent Swap",
    algorithm: "( R' U L' U2 ) ( R U' R' U2 ) R L",
    probability: "1/18",
    auf: "U",
    difficulty: 2,
    recognition: "J-shaped big bar, and small bars always on the left side. (hold big bar front)",
    notes: "Alernation between R and L moves can be tricky, but super fast if you master it. You can also execute the last \"L\" as \"r\" (I do that when there's no AUF)",
    pattern: [
      ["Y", "G", "Y"],
      ["R", "Y", "R"],
      ["G", "B", "G"]
    ]
  },
  {
    name: "Jb",
    category: "Adjacent Swap",
    algorithm: "( R U R' F' ) ( R U R' U' ) R' F R2 U' R'",
    probability: "1/18",
    auf: "",
    difficulty: 1,
    recognition: "L-shaped big bar, and small bars always on the right side. (hold big bar left)",
    notes: "Most people's favorite PLL (and Youtuber) for a reason; it's very fast. notice how ( R U R' F' ) is really similar to ( R U R' U' )",
    pattern: [
      ["Y", "R", "Y"],
      ["G", "Y", "G"],
      ["R", "B", "R"]
    ]
  },
  {
    name: "Ra",
    category: "Adjacent Swap",
    algorithm: "( R U' R' U' ) ( R U R ) D ( R' U' R ) D' ( R' U2 R' )",
    probability: "1/18",
    auf: "",
    difficulty: 4,
    recognition: "One bar attached to the right side of the headlights. Hold headlights left",
    notes: "Key here is to be able to push the D' with your left ring finger.",
    pattern: [
      ["R", "R", "Y"],
      ["G", "Y", "R"],
      ["Y", "B", "Y"]
    ]
  },
  {
    name: "Rb",
    category: "Adjacent Swap",
    algorithm: "( R' U2 R U2' ) R' F ( R U R' U' ) R' F' R2",
    probability: "1/18",
    auf: "",
    difficulty: 2,
    recognition: "One bar attached to the left side of the headlights. Hold headlights in front.",
    notes: "One of my favorites. Key here is to dubbelflick the U moves (right/left hand). The end of the alg has some similarities to a T perm",
    pattern: [
      ["Y", "R", "Y"],
      ["R", "Y", "G"],
      ["R", "B", "R"]
    ]
  },

  // DIAGONAL SWAP
  {
    name: "Y",
    category: "Diagonal Swap",
    algorithm: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
    probability: "1/18",
    auf: "",
    difficulty: 2,
    recognition: "Two bars with a corner in between (notice how the corner in between is opposite color to the bars)",
    notes: "The alg consists of two OLL's : F (R U' R' U') (R U R' F') and (R U R' U') (R' F R F'). Once you can do them seperately, learning the alg is very easy.",
    pattern: [
      ["Y", "G", "Y"],
      ["R", "Y", "R"],
      ["Y", "O", "Y"]
    ]
  },
  {
    name: "V",
    category: "Diagonal Swap",
    algorithm: "( R' U R' U' ) y ( R' F' R2 U' ) ( R' U R' F ) R F",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Block in the left front, no headlights.",
    notes: "The only PLL I do with a rotation. It is hard to master, but once you do it is a solid alg. I use my right index finger for both last F-moves.",
    pattern: [
      ["R", "R", "Y"],
      ["R", "Y", "B"],
      ["O", "G", "B"]
    ]
  },
  {
    name: "Na",
    category: "Diagonal Swap",
    algorithm: "( R U R' U ) ( R U R' F' ) ( R U R' U' ) R' F ( R2 U' R' ) ( U2 R U' R' )",
    probability: "1/72",
    auf: "",
    difficulty: 3,
    recognition: "Bars on the right, each side of the cube with the corner opposite colored. (I think of it as arrows pointing to the left)",
    notes: "Super long alg, but very easy to memorize. It's basically ( R U R' U ) ( Jb- perm ) ( U2 R U' R' )",
    pattern: [
      ["Y", "R", "Y"],
      ["G", "Y", "B"],
      ["G", "O", "B"]
    ]
  },
  {
    name: "Nb",
    category: "Diagonal Swap",
    algorithm: "( R' U R U' ) ( R' F' U' F ) ( R U R' F ) R' F' ( R U' R )",
    probability: "1/72",
    auf: "",
    difficulty: 4,
    recognition: "Bars on the left, each side of the cube with the corner opposite colored. (I think of it as arrows pointing to the right)",
    notes: "One of the most difficult algs to learn, since it's pretty random moves, and you only get a n-perm in 1/72 solves. So make sure you practice this one well.",
    pattern: [
      ["Y", "R", "Y"],
      ["B", "Y", "G"],
      ["B", "O", "G"]
    ]
  },

  // G-PERMS
  {
    name: "Ga",
    category: "G-Perms",
    algorithm: "R2 U ( R' U R' U' ) ( R U' R2) D U' ( R' U R D' )",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Headlights left, bar in front not attached to headlights",
    notes: "One of my faster G perms, and probabably the easiest to recognize. Start with thumb on bottom and make sure to push the last D' with your left ring finger",
    pattern: [
      ["R", "R", "Y"],
      ["G", "Y", "B"],
      ["Y", "O", "Y"]
    ]
  },
  {
    name: "Gb",
    category: "G-Perms",
    algorithm: " D ( R' U' R U ) D' ( R2 U R' U ) ( R U' R U' ) R2'",
    probability: "1/18",
    auf: "",
    difficulty: 4,
    recognition: "Headlights left, bar in right back opposite to headlights.",
    notes: "I finger trick it in a pretty unique way so you probably need to watch the video for this one",
    pattern: [
      ["R", "R", "Y"],
      ["G", "Y", "O"],
      ["Y", "B", "Y"]
    ]
  },
  {
    name: "Gc",
    category: "G-Perms",
    algorithm: " R2' F2 ( R U2 R U2' ) R' F ( R U R' U' ) R' F R2",
    probability: "1/18",
    auf: "",
    difficulty: 4,
    recognition: "Headlights on the RIGHT, bar in front not attached to headlights.",
    notes: "This is the only G-perm I don't use D-moves for. Alg is long and difficult, but pretty fool-proof once you master it. Double flicking U2's is important here.",
    pattern: [
      ["Y", "R", "Y"],
      ["B", "Y", "G"],
      ["R", "O", "R"]
    ]
  },
  {
    name: "Gd",
    category: "G-Perms",
    algorithm: "(R U R' U') D (R2 U' R U') (R' U R' U) R2 D'",
    probability: "1/18",
    auf: "",
    difficulty: 3,
    recognition: "Headlights left, bar in right/front opposite to headlights",
    notes: "My favourite G-perm! The entire alg flows super well. Make sure to do the U' and D simultaneously.",
    pattern: [
      ["R", "R", "Y"],
      ["O", "Y", "G"],
      ["Y", "B", "Y"]
    ]
  }
];

export const categories = [
  "All",
  "Edges Only",
  "Corners Only",
  "Adjacent Swap",
  "Diagonal Swap",
  "G-Perms"
];