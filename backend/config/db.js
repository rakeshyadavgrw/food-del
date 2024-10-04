import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://rakesh:food@cluster0.p43ue.mongodb.net/food-del")
    .then(() => console.log("DB Connected"));
};
