import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
import createDefaultAdmin from "./app/config/defaultAdmin";

const port = config.port;

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database connected successfully");

        // Create Default Super Admin
        await createDefaultAdmin();

        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });

    } catch (error) {
        console.log("Server startup error:", error);
    }
}

main();