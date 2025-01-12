import { ThemeProvider } from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";


export default function ProjectsLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
                {children}
                <Navbar />
            </TooltipProvider>
        </ThemeProvider>
    );
}
