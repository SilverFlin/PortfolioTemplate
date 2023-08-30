import { baseFilesDirPath } from "@/constants/paths"

function getFileURL(fileName: string) {
    const url: string = new URL(`${baseFilesDirPath}/${fileName}`, import.meta.url).href
    return url
}

export { getFileURL }