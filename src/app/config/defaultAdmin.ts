import { User } from "../modules/user/user.model";
import config from "./index";
const createDefaultAdmin = async () => {
  const email = config.default_admin_email;
  const password = config.default_admin_password;
  if (!email || !password) {
    throw new Error("Default admin credentials are missing");
  }

  const existingAdmin = await User.findOne({ email });

  if (existingAdmin) {
    console.log("Default Super Admin already exists");
    return;
  }

  await User.create({
    name: "Super Admin",
    email,
    password,
    role: "superAdmin",
  });

  console.log("Default Super Admin created successfully");
};

export default createDefaultAdmin;