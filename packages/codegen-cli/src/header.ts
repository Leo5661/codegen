import chalk from "chalk";
import figlet from "figlet"


const figletTextConfig: figlet.Options = {
    font: "Standard",
    horizontalLayout: "default",

}

const Header = () => {
    console.log(chalk.greenBright(figlet.textSync("< CodeGen />", figletTextConfig)) + "\n");
    console.log(chalk.green('-'.repeat(process.stdout.columns)) + "\n\n");
}


export {Header}