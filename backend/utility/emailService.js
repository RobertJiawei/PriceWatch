import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "rafael.beahan46@ethereal.email",
    pass: "5dAWrx9pYvntj88CCV",
  },
});

export const sendEmail = async (to, product) => {
  const mailOptions = {
    from: "rafael.beahan46@ethereal.email",
    to: to,
    subject: `Price Alert: ${product.product_title} has a new price!`,
    text: `The price for ${product.product_title} has changed to ${product.product_price}. \nCheck it out here: ${product.product_url}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
