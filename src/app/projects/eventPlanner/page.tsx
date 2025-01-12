"use client";

import BlurFade from "@/components/magicui/blur-fade";
import {eventPlannerData} from "@/data/eventPlanner";
import { Carousel } from "@/components/carousel";

const BLUR_FADE_DELAY = 0.1;

const project = eventPlannerData;

export default function WispMadnessPage({}) {
    const images = project.media.filter((item: any) => item.type === "image");
    const videos = project.media.filter((item: any) => item.type === "video");

    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                {/* Title and Context */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                    {project.title}
                                </h1>
                            </BlurFade>
                            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300 text-justify">
                                    {project.dates}
                                </p>
                            </BlurFade>
                            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contexte du projet</h2>
                            </BlurFade>
                            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                <p className="mt-6 text-base/7 text-gray-700 dark:text-gray-300 text-justify">
                                    {project.context}
                                </p>
                            </BlurFade>
                        </div>
                    </div>
                </div>

                {/* Media Section */}
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {images.length > 0 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <Carousel items={images} className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"  />
                        </BlurFade>
                    )}
                    {videos.length > 0 && (
                        <BlurFade delay={BLUR_FADE_DELAY * 6}>
                            <Carousel items={videos} className="mt-6 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10" />
                        </BlurFade>
                    )}
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
                            <BlurFade delay={BLUR_FADE_DELAY * 7}>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Déroulement du projet</h2>
                            </BlurFade>
                            <BlurFade delay={BLUR_FADE_DELAY * 8}>
                                <p className="mt-6 text-justify">
                                    {project.progression}
                                </p>
                            </BlurFade>

                            <BlurFade delay={BLUR_FADE_DELAY * 9}>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Conclusion</h2>
                            </BlurFade>
                            <BlurFade delay={BLUR_FADE_DELAY * 10}>
                                <p className="mt-6 text-justify">
                                    {project.conclusion}
                                </p>
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

