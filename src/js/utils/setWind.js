const setWind = (speed, degrees) => {
  const theSpeed = speed * 2.237;
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
    "North"
  ];
  const compassSection = Math.round(degrees / 45);
  let theDirection = directions[compassSection + 1];
  if (speed > 1 && compassSection) {
    return `${Math.round(
      speed
    )} miles per hour coming from the ${theDirection}`;
  } else {
    return "Little or no wind at the moment.";
  }
};

export default setWind;
