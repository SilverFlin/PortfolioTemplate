import type { TestimonialCardProps } from "@/types";

const testimonialCards: TestimonialCardProps[] = [
    {
        id: 1,
        name: "Omar Palau",
        title: "Technical Writer",
        company: "Wizeline",
        message: "I know Luis since his bachelor's and early professional career. He's critical, self-driven, and motivated. He excels in full-stack engineering and quickly adapts to new technologies. I look forward to working with him in future projects.",
        imageName: "omar-palau.jpeg",
        isActive: true
    },
    {
        id: 2,
        name: "Zachary Plotkin",
        title: "Founder / CEO",
        studyHall: "Mathematics, Princeton University",
        company: "River Project",
        message: "Luis is one of the most hardworking, kind, and passionate individuals I know. On a team with limited oversight, he was able to adjust to a novel framework and develop complex software he had never touched on before. I cannot recommend him enough to anyone interested in bringing on a competent and adaptable software developer. Luis was a wonderful addition to the River Project ecosystem and he would be just as wonderful an addition to your organization as well.",
        imageName: "zachary-plotkin.png",
        isActive: false
    },
]

export default testimonialCards;