import {Command, InvalidArgumentError } from 'commander';
import chalk from 'chalk';

const program = new Command()

program
.name("message-instagram")
.version("1.0.0")
.description("Bot de message instagram");

program
  .command("connect")
  .description("Connect to instagram")
  .argument("<username>", "The instagram username", valueIsNotEmpty)
  .argument("<password>", "The instagram username", valueIsNotEmpty)
  .action((username, password) => {
    console.log(username, password)
    }
  );


  program.parse();

function valueIsNotEmpty(value){
    if(value === ""){
        throw new InvalidArgumentError(chalk.red("Value must not empty"))
    }
}