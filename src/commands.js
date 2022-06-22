import fs from "fs/promises";

const DEFAULT_FILE_LOGIN = "./assets/login.json";

export async function createFileLogin(username, password) {
  const data = { username: username, password: password };
  try {
    const file = await fs.writeFile(DEFAULT_FILE_LOGIN, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}
