import path from "node:path";
import fs from "fs-extra"

export const renameFiles: Record<string, string | undefined> = {
    _gitignore: '.gitignore',
  }
 
export type WriteFilesOptions = {
    src?: string,
    root: string,
    fileName: string,
    content?: string
}

/**
 * Write a file to the given root directory.
 * If `content` is provided, writes that content to the file.
 * If `src` is provided, copies the file from `src` to `root`.
 * If `src` is not provided, does nothing if `content` is not provided.
 * 
 * @param {string} options.src The source path to copy the file from
 * @param {string} options.root The root directory to write the file to
 * @param {string} options.fileName The name of the file to write
 * @param {string} [options.content] The content to write to the file
 */
export const writeFiles = async ({src, root, fileName, content}: WriteFilesOptions) => {
    const targetPath = path.join(root, renameFiles[fileName] ?? fileName);
    if(content){
        try{
            await fs.writeFile(targetPath, content);
        } catch (error) {
            console.log(error)
        }
    } else {
        try{
            if(!src) {
                return;
            }
            await fs.copy(path.join(src, fileName), targetPath);
        } catch (error) {
            console.log(error)
        }
    }
}


