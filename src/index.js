import {Command, InvalidArgumentError } from 'commander';
import chalk from 'chalk';

const program = new Command()

program
.name("message-instagram")
.version("1.0.0")
.description("Bot de message instagram");

program
.command("connect")
.description("add a task")
.argument("<username>", "The instagram Username", valueIsNotEmpty)
.argument("<paswword>", "The instagram password", valueIsNotEmpty)
.action((username, password) => {
    console.log(chalk.dim("start"))
    try {
        console.log(username, password)
      } catch (e) {
        console.log(chalk.red("ERROR..."))
      }
    });

function valueIsNotEmpty(value){
    if(value === ""){
        throw new InvalidArgumentError(chalk.red("Value must not empty"))
    }
}