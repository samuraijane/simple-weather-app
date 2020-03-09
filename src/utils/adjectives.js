const adjectives = [
  "amazing",
  "beautiful",
  "bleak",
  "cloudy",
  "depressing",
  "fabulous",
  "killer",
  "rainy",
  "sunny",
  "thoughtful",
  "unforgettable",
  "wonderful"
];

const randomAdjective = () => {
  const random = Math.floor(Math.random() * adjectives.length);
  return adjectives[random];
};

export { randomAdjective };
