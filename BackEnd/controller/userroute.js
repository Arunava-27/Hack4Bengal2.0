const { User, Patient } = require("../model/user");


require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.RegisterUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!(email && password)) {
      res.status(400).send({ message: "all fields are required" });
    } else {
      const findUser = await User.findOne({ email });
      if (findUser) {
        res.status(400).send({ message: "user already exists" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        await new User({ email, password: hashedpassword }).save();
        res.status(200).send({ message: "User added" });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports.Profile = async (req, res) => {
  try {
    const { fname, lname, age, sex, weight, height, mobile, pgname, address, blood_group, checkbox } = req.body;
    console.log(fname, lname, age, sex, weight, height, mobile, pgname, address, blood_group, checkbox);

    await new Patient({ fname, lname, age, sex, weight, height, mobile, pgname, address, blood_group, checkbox }).save();
    res.status(200).send({ message: "Updated" });
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ message: "all fields are required" });
    } else {
      const findUser = await User.findOne({ email });
      if (findUser && (await bcrypt.compare(password, findUser.password))) {
        const token = jwt.sign(
          { user_id: findUser.id, email },
          process.env.TOKEN_KEY,
          { expiresIn: "5d" }
        );
        return res.status(200).send({ token: token, findUser });
      } else {
        res.status(400).send({ message: "wrong credentials" });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports.verifyToken = async (req, res) => {

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {

    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const user_id = decoded.user_id;

    const findUser = await User.findOne({ _id: user_id });
    if (!findUser) {
      return res.status(403).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "authorized", findUser });


  });
};
