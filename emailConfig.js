// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "samadteam318@gmail.com",
    pass: "vbbx qrsx uvpo plzl"
  }
});
