import User from "../models/User";

export const signUp = (req, res, next) => {
  const { username, email, password, roles } = req.body;
  new User({username, email, password, roles});
};
export const signIn = (req, res, next) => {
  res.json("Sign In");
};
