import Connection from "../db/connection.js";
import User from "../models/user.js";

export default class UserAccessor {
static async getAllUsers() {
    await Connection.open("users");
    const users = [];
    try {
        for await (const doc of User.find()) {
            users.push(doc);
        }
    } catch (e) {
        throw e;
    }
}
}
