import { Command } from "commander";
import * as promt from "@clack/prompts"
import { setTimeout } from 'node:timers/promises';
import pc from "picocolors"
import { z } from "zod";
import { Header } from "@/src/header";
import { isValidPackageName } from "../utits/is-valid-package-name";

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
                    message: "✏️ Name your project?",
                    placeholder: "my-project",
                    validate: (value: string) => {
                        if (!isValidPackageName(value)) return 'Enter a valid package name.';
                    }
                })
            ,
            framework: ({results}) => 
                promt.select({
                    message: `🛠️ Which framework do you want to use for ${pc.italic(pc.cyan(results.projectName))}?`,
                    initialValue: 'Nextjs',
                    options: [
                        {value: 'Nextjs', label: pc.blue('Next.js'), hint: "Next 14+"},
                        {value: 'React', label: pc.blueBright('React.js'), hint: "Vite Based"},
                        {value: 'Svelte', label: pc.redBright('Svelte.js'), hint: "Vite Based"},
                        {value: 'Node', label: pc.green('Node.js'), hint: "Node with express"},
                    ]
                })
            ,
            language: ({results}) =>  
                promt.select({
                    message: `🔤 Which language do you want to use for ${pc.italic(pc.cyan(results.projectName))}?`,
                    initialValue: 'TS',
                    options: [
                        {value: 'TS', label: pc.blue('TypeScript')},
                        {value: 'JS', label: pc.yellow('JavaScript')},
                    ]
                })
            ,

            style: ({results}) => {
                if(results.framework !== 'Node') {
                    return promt.select({
                           message: `🎨 What you want for style?`,
                           initialValue: 'CSS',
                           options: [
                               {value: 'CSS', label: pc.blue('CSS')},
                               {value: 'SCSS', label: pc.yellow('SCSS')},
                               {value: 'Tailwind', label: pc.blueBright('TailwindCSS')},
                           ]
                       })
                    }
            },
            isORM: ({results}) => {
                    if(    results.framework === 'Node' 
                        || results.framework === 'Nextjs'
                        || results.framework === 'Svelte'
                    ) {
                        return promt.confirm({
                            message: `🤔 Do you want ${pc.cyan("ORM")} for database management?`,
                            initialValue: true,
                        })
                        }     
            },

            orm: ({results}) => {
                if(results.isORM) {
                    return promt.select({
                        message: `🥷 What you want as ORM?`,
                        initialValue: 'Prisma',
                        options: [
                            {value: 'Prisma', label: pc.blueBright('Prisma ORM')},
                            {value: 'Drizzle', label: pc.greenBright('Drizzle ORM')},
                        ]
                    })
                }
            },
            onConfirm: ({results}) => 
                    promt.confirm({
                        message: `🤔 Confirm to create project?
                                \t Project Name: ${pc.cyan(results.projectName as string)}
                                \t Framework: ${pc.cyan(results.framework as string)}
                                \t Language: ${pc.cyan(results.language as string)}
                                `,
                        initialValue: true,
                    })
        },
        {
            onCancel: () => {
                promt.cancel("🫡 Ok, I'll run it later. Bye!")
                process.exit(0)
            }
        }
    )

    if(project.onConfirm){
        const spinner = promt.spinner()
        spinner.start("☕ Grab a coffee and relax, Creating project...")
        await setTimeout(5000)
        spinner.stop()
    } else {
        promt.cancel("🫡 Ok, I'll run it later. Bye!")
        process.exit(0)
    }

    let nextSteps = `cd ${project.projectName}        \n${project.onConfirm ? '' : 'pnpm install\n'}pnpm dev`;

	promt.note(nextSteps, '🎉 Next steps.');

	promt.outro(`⚠️ Problems? ${pc.underline(pc.cyan('https://github.com/Leo5661/codegen/issues'))}`);
}