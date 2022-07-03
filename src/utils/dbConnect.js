import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { configuration } from "./constants";

const connection = {};

// dotenv.config();

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;

export async function getServerSideProps() {
  // console.log(process.env.CONNECTION_URL);

  return {
    props: {
      hello: "world",
    },
  };
}
