// import userSchema from "../models/users.js";

export const indexVideo = (req, res) => {
  res.json({
    message: "Welcome to my API REST",
    author: "Sergio Campbell Dev",
    GitHub: "https://github.com/SergioCampbell",
  });
};

export const findVideo = async (req, res) => {
    // userSchema(req.body);
    await userSchema
    .find(search)
    .then((data) => res.json({ message: "All videos!", videos: data }))
    .catch((err) => res.json({ message: err }));
};
