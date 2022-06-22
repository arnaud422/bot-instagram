import { Command, InvalidArgumentError } from "commander";
import { createFileLogin } from "./commands.js";
import Insta from '@androz2091/insta.js';
import chalk from "chalk";

const program = new Command();

program
  .name("message-instagram")
  .version("1.0.0")
  .description("Bot de message instagram");

program
  .command("connect")
  .description("Connect to instagram")
  .argument("<username>", "The instagram username", valueIsNotEmpty)
  .argument("<password>", "The instagram password", valueIsNotEmpty)
  .action(async (username, password) => {
    const isLogin = await createFileLogin(username, password);
    if (!isLogin) {
      console.log(chalk.red("Error creating connection file"));
    } else {
    }
  });

program.parse();

function valueIsNotEmpty(value) {
  if (value === "") {
    throw new InvalidArgumentError(chalk.red("Value must not empty"));
  }
  return value;
}
