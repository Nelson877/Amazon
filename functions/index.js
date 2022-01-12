const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const admin = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51K9zb2DiGUFRrhJxAcn35xqQmgdM30QIPLtSJijPd4RwolEGdJ2sqPpHacQhuPQSyCYhDwVBAEfm1C7IJOCIZBAt00t6Fz8tqT"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello!  world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Recieved BOM!! fr this amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunitss of the currency
    currency: "usd",
  });
  // Ok- Created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);
