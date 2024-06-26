import app from "./app.js";

const { PORT } = process.env;

const startServer = async () => {
  app.listen(PORT, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`Server is running. Use our API on port: ${PORT}`);
  });
};

startServer();
