import type { ComponentOptions } from "vue";

type TestimonialCardProps = {
    id: number;
    name: string;
    title: string;
    studyHall?: string;
    company: string;
    message: string;
    imageName?: string;
    isActive: boolean;
}

type ProjectCardProps = {
    id: number;
    name: string;
    description: string;
    date: Date;
    imageName: string;
    technologies: TechnologyLabel[];
}



type TechnologyLabel = {
    name: string;
    color: string;
}

interface Article {
    id: string;
    title: string;
    description?: string;
    date: Date;
    component: ComponentOptions
    tags: TechnologyLabel[];
    imageName: string;
}

interface Project extends Article {

}

interface MarkdownResponse extends Article {
    default: ComponentOptions;
    rawTags: string[];
}

export type {
    TestimonialCardProps,
    ProjectCardProps,
    TechnologyLabel,
    Article,
    Project,
    MarkdownResponse
}