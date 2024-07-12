"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
               An Intuitive Alternative to Notion. Experience more with <span className="underline">Hitch</span> 
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Hitch is a connected workspace where <br/> ideas come to fruition.
            </h3>
            <Button>
                Enter Hitch
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}