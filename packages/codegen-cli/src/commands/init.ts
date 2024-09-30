import { Command } from "commander";
import * as promt from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import pc from "picocolors";
import { z } from "zod";
import { Header } from "@/src/header";
import { isValidPackageName } from "../utits/is-valid-package-name";
import { Framework, StyleProps, templates } from "../utits/template";
import { generatePackage } from "../scripts/package-generator";
import { logger } from "../utits/logger";

export type PromtConfig = {
  projectName: string;
  framework: string;
  variant: string;
  style: StyleProps;
  isORM: boolean;
  orm: string;
  onConfirm: boolean;
};

// TODO add options in future
// const initOptionSchema = z.object({
//     default: z.boolean(),
// })

export const init = new Command()
  .name("init")
  .description("Initialize a new project and install dependencies")
  .action(async () => {
    Header();
    runInit();
  });

const frameworkList = () => {
  return templates.map((framework) => {
    const colorFn = framework.color;
    return {
      value: framework.name,
      label: colorFn(framework.tag),
    };
  });
};

const variantList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.variant.map((variant) => ({
        value: variant.name,
        label: variant.color(variant.tag),
      })) || []
  );
};

const styleList = (framework: string) => {
  return (
    templates
      .find((f) => f.name === framework)
      ?.style?.map((style) => ({
        value: style.name,
        label: style.color(style.name),
      })) || []
  );
};

const typeOfFramework = (framework: string) => {
  return templates.find((f) => f.name === framework)?.type;
};
export async function runInit() {
  promt.intro(pc.bgCyan(pc.black("CodeGen Initializer")));

  const promtConfig: PromtConfig = (await promt.group(
    {
      projectName: () =>
        promt.text({
          message: "✏️ Name your project?",
          placeholder: "my-project",
          validate: (value: string) => {
            if (!isValidPackageName(value))
              return "Enter a valid package name.";
          },
        }),
      framework: ({ results }) =>
        promt.select({
          message: `🛠️ Which framework do you want to use for ${pc.italic(pc.cyan(results.projectName))}?`,
          initialValue: "Nextjs",
          options: frameworkList(),
        }),
      variant: ({ results }) =>
        promt.select({
          message: `🔤 Choose variant for ${pc.italic(pc.cyan(results.projectName))}?`,
          initialValue: "TS",
          options: variantList(results.framework as string),
        }),
      style: ({ results }) => {
        if (
          typeOfFramework(results.framework as string) !== "backend" &&
          results.variant !== "default-next"
        ) {
          return promt.select({
            message: `🎨 What you want for style?`,
            initialValue: "CSS",
            options: styleList(results.framework as string),
          });
        }
      },
      isORM: ({ results }) => {
        if (typeOfFramework(results.framework as string) === "backend") {
          return promt.confirm({
            message: `🤔 Do you want ${pc.cyan("ORM")} for database management?`,
            initialValue: true,
          });
        }
      },

      orm: ({ results }) => {
        if (results.isORM) {
          return promt.select({
            message: `🥷 What you want as ORM?`,
            initialValue: "Prisma",
            options: [
              { value: "Prisma", label: pc.blueBright("Prisma ORM") },
              { value: "Drizzle", label: pc.greenBright("Drizzle ORM") },
            ],
          });
        }
      },
      onConfirm: ({ results }) =>
        promt.confirm({
          message: `🤔 Confirm to create project?
                                \t Project Name: ${pc.cyan(results.projectName as string)}
                                \t Framework: ${pc.cyan(results.framework as string)}
                                \t Variant: ${pc.cyan(results.variant as string)}
                                `,
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        promt.cancel("🫡 Ok, I'll run it later. Bye!");
        process.exit(0);
      },
    },
  )) as PromtConfig;

  if (promtConfig.onConfirm) {
    const spinner = promt.spinner();
    spinner.start("☕ Grab a coffee and relax, Creating project...");
    await generatePackage(promtConfig);
    spinner.stop();
  } else {
    process.exit(0);
  }

  let nextSteps = `cd ${promtConfig.projectName}        \n${promtConfig.onConfirm ? "" : `${"npm"} install\n`}${"npm"} dev`;

  promt.note(nextSteps, "🎉 Next steps.");

  logger.info(
    `⚠️ Problems? ${pc.underline(pc.cyan("https://github.com/Leo5661/codegen/issues"))}`,
  );

  process.exit(0);
}
