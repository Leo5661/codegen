import { Command } from "commander";
import * as promt from "@clack/prompts"
import { setTimeout } from 'node:timers/promises';
import pc from "picocolors"
import { z } from "zod";
import { Header } from "@/src/header";

// TODO add options in future
// const initOptionSchema = z.object({
//     default: z.boolean(),
// })

export const init = new Command()
    .name("init")
    .description("Initialize a new project and install dependencies")
    .action(async () => {
        runInit();
    })
   

export async function runInit() {
    Header();
    promt.intro(pc.bgCyan(pc.black("CodeGen Initializer")))

    const project = await promt.group(
        {
            projectName: () => 
                promt.text({
                    message: "Where do you want to create your project?",
                    placeholder: "./my-project",
                    validate: (value: string) => {
                        if (!value) return 'Please enter a path.';
						if (value[0] !== '.') return 'Please enter a relative path.';
                    }
                })
            ,
            framework: ({results}) => 
                promt.select({
                    message: `Which framework do you want to use for ${pc.italic(pc.cyan(results.projectName))}?`,
                    initialValue: 'Nextjs',
                    options: [
                        {value: pc.blue('Nextjs'), label: pc.blue('Next.js'), hint: "Next 14+"},
                        {value: pc.blueBright('React'), label: pc.blueBright('React.js'), hint: "Vite Based"},
                        {value: pc.redBright('Svelte'), label: pc.redBright('Svelte.js'), hint: "Vite Based"},
                        {value: pc.green('Node'), label: pc.green('Node.js'), hint: "Node with express"},
                    ]
                })
            ,
            language: ({results}) => 
                promt.select({
                    message: `Which language do you want to use for ${pc.italic(pc.cyan(results.projectName))}?`,
                    initialValue: 'TS',
                    options: [
                        {value: pc.blue('TS'), label: pc.blue('TypeScript')},
                        {value: pc.yellow('JS'), label: pc.yellow('JavaScript')},
                    ]
                })
            ,

            style: ({results}) => 
                promt.select({
                    message: `What you want for style?`,
                    initialValue: 'CSS',
                    options: [
                        {value: pc.blue('CSS'), label: pc.blue('CSS')},
                        {value: pc.yellow('SCSS'), label: pc.yellow('SCSS')},
                        {value: pc.blueBright('Tailwind'), label: pc.blueBright('TailwindCSS')},
                    ]
                })
            ,
            database: ({results}) => 
                promt.select({
                    message: `What you want for database?`,
                    initialValue: 'MongoDB',
                    options: [
                        {value: pc.green('MongoDB'), label: pc.green('MongoDB')},
                        {value: pc.blueBright('Prisma'), label: pc.blueBright('Prisma')},
                    ]
                })
            ,
            onConfirm: ({results}) => 
                    promt.confirm({
                        message: `Confirm to create project?
                                \t Project Name: ${pc.cyan(results.projectName as string)}
                                \t Framework: ${pc.cyan(results.framework as string)}
                                \t Language: ${pc.cyan(results.language as string)}
                                \t Style: ${pc.cyan(results.style as string)}
                                \t Database: ${pc.cyan(results.database as string)}
                                `,
                        initialValue: true,
                    })
            
        },
        {
            onCancel: () => {
                promt.cancel("Ok, I'll run it later.")
                process.exit(0)
            }
        }
    )

    if(project.onConfirm){
        const spinner = promt.spinner()
        spinner.start("Grab a coffee and relax, Creating project...")
        await setTimeout(5000)
        spinner.stop()
    } else {
        promt.cancel("Ok, I'll run it later.")
        process.exit(0)
    }

    let nextSteps = `cd ${project.projectName}        \n${project.onConfirm ? '' : 'pnpm install\n'}pnpm dev`;

	promt.note(nextSteps, 'Next steps.');

	promt.outro(`Problems? ${pc.underline(pc.cyan('https://github.com/Leo5661/codegen/issues'))}`);
}