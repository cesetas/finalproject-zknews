import mongoose from "mongoose";
import dotenv from "dotenv";

const connection = {};

dotenv.config();

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

export default dbConnect;

// export async function getServerSideProps() {
//   console.log(process.env.CONNECTION_URL);

//   return {
//     props: {
//       hello: "world",
//     },
//   };
// }
