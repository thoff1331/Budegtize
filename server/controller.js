const numberToRoman = (req, res) => {
  let str = req.query.integer;
  let num = parseInt(str);
  let value = "";
  const romanReferenceObject = {
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let remiander;
  if (num > 255 || num < 0)
    console.log("Ensure your input is a  number and  less than 255");
  else {
    for (let val in romanReferenceObject) {
      remiander = Math.floor(num / romanReferenceObject[val]);
      if (remiander >= 0) {
        for (let i = 0; i < remiander; i++) {
          value += val;
        }
      }
      num = num % romanReferenceObject[val];
    }
  }
  return res.json(value);
};

module.exports = {
  numberToRoman,
};
