import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import InteractiveHoverButton from "@/components/magicui/InteractiveHoverButton";

const BASE_DELAY = 0.1;
const SECTION_DELAY_MULTIPLIER = 1.2;
const ITEM_DELAY_INCREMENT = 0.05;

const calculateDelay = (base: number, multiplier = 1, increment = 0, index = 0) => {
    return base * multiplier + increment * index;
};

export default function Page() {
    return (
        <main className="flex flex-col space-y-10 min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6">

            {/* Hero Section */}
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                delay={calculateDelay(BASE_DELAY, 1)}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={calculateDelay(BASE_DELAY, 1)}
                                text={DATA.description}
                            />
                        </div>
                        <BlurFade delay={calculateDelay(BASE_DELAY, 1)}>
                            <Avatar className="size-28 border">
                                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER)}>
                    <h2 className="text-xl font-bold">Description</h2>
                </BlurFade>
                <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER + 1)}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                </BlurFade>
                <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER + 2)} className="flex justify-center items-center mt-5">
                    <Link href={DATA.cvUrl} target="_blank">
                        <InteractiveHoverButton text="Mon CV" />
                    </Link>
                </BlurFade>
            </section>

            {/* Work Section */}
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 2)}>
                        <h2 className="text-xl font-bold">Experience Professionel</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                        <BlurFade
                            key={work.company}
                            delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 2, ITEM_DELAY_INCREMENT, id)}
                        >
                            <ResumeCard
                                key={work.company}
                                logoUrl={work.logoUrl}
                                altText={work.company}
                                title={work.company}
                                subtitle={work.title}
                                href={work.href}
                                badges={work.badges}
                                period={`${work.start} - ${work.end ?? "Present"}`}
                                description={work.description}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>

            {/* School Section */}
            <section id="school">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 3)}>
                        <h2 className="text-xl font-bold">Parcours Scolaire</h2>
                    </BlurFade>
                    <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 4)}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {DATA.school.map((project, id) => (
                                <BlurFade
                                    key={project.title + project.dates}
                                    delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 4, ITEM_DELAY_INCREMENT, id)}
                                >
                                    <HackathonCard
                                        title={project.title}
                                        description={project.description}
                                        location={project.location}
                                        dates={project.dates}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </BlurFade>
                            ))}
                        </ul>
                    </BlurFade>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 5)}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Mes Projets
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Découvrez mes derniers projets !
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    J'ai travaillé sur plusieurs projets : scolaire, professionel ou personnel. Voici une compilation des plus intéressants.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 5, ITEM_DELAY_INCREMENT, id)}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 6)}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Restons en contact !
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Contactez moi sur{" "}
                                <Link
                                    href={DATA.contact.social.LinkedIn.url}
                                    className="text-blue-500 hover:underline"
                                >
                                    Linkedin
                                </Link>{" "}
                                ou par{" "}
                                <Link
                                    href={DATA.contact.social.email.url}
                                    className="text-blue-500 hover:underline"
                                >
                                    mail
                                </Link>{" "}
                                ({DATA.contact.email}) et je vous répondrais dès que possible !
                            </p>
                            <BlurFade delay={calculateDelay(BASE_DELAY, SECTION_DELAY_MULTIPLIER * 6 + 1)}>
                                <Link href={DATA.cvUrl} target="_blank">
                                    <InteractiveHoverButton text="Mon CV" />
                                </Link>
                            </BlurFade>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
