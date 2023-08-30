import type { TechnologyLabel } from "@/types";

const JavaTechnologyLabel: TechnologyLabel = {
    name: "Java",
    color: "#ED8B00"
}

const JavaScriptTechnologyLabel: TechnologyLabel = {
    name: "JavaScript",
    color: "#F7DF1E"
}

const TypeScriptTechnologyLabel: TechnologyLabel = {
    name: "TypeScript",
    color: "#007ACC"
}

const VueTechnologyLabel: TechnologyLabel = {
    name: "Vue.js",
    color: "#4FC08D"
}

const TailwindTechnologyLabel: TechnologyLabel = {
    name: "Tailwind CSS",
    color: "#38B2AC"
}

const HTMLTechnologyLabel: TechnologyLabel = {
    name: "HTML",
    color: "#E34F26"
}

const CSSTechnologyLabel: TechnologyLabel = {
    name: "CSS",
    color: "#1572B6"
}

const MongoDBTechnologyLabel: TechnologyLabel = {
    name: "MongoDB",
    color: "#47A248"
}

function getLabel(technology: string): TechnologyLabel {
    switch (technology.toLowerCase()) {
        case "java":
            return JavaTechnologyLabel;
        case "javascript":
            return JavaScriptTechnologyLabel;
        case "typescript":
            return TypeScriptTechnologyLabel;
        case "vue":
        case "vue.js":
            return VueTechnologyLabel;
        case "tailwind":
        case "tailwind css":
            return TailwindTechnologyLabel;
        case "html":
            return HTMLTechnologyLabel;
        case "css":
            return CSSTechnologyLabel;
        case "mongodb":
            return MongoDBTechnologyLabel;
        default:
            return {
                name: technology,
                color: "#D3CEC4"
            };
    }
}

export {
    JavaTechnologyLabel,
    JavaScriptTechnologyLabel,
    TypeScriptTechnologyLabel,
    VueTechnologyLabel,
    TailwindTechnologyLabel,
    HTMLTechnologyLabel,
    CSSTechnologyLabel,
    MongoDBTechnologyLabel,
    getLabel
}