import { config as dotenvConfig } from 'dotenv';
import mongoose from 'mongoose';

dotenvConfig();

    const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER } = process.env;
    const DATABASE_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.xtdufxk.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(
        DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            maxPoolSize: 50,
            socketTimeoutMS: 2500, 
        }
    );
