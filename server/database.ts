import { connect } from "mongoose";

export const startConnection = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("No se encontró la variable de entorno MONGODB_URI.");
    }

    const db = await connect(process.env.MONGODB_URI);
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
