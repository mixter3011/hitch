"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create new note."
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
                <Image
                    src="/Thinking.png"
                    height="300"
                    width="300"
                    alt="Thinking"
                    className="dark:hidden mx-auto"
                />
                <Image
                    src="/Thinking-dark.png"
                    height="300"
                    width="300"
                    alt="Thinking"
                    className="hidden dark:block mx-auto"
                />
                <h2 className="text-lg font-medium">
                    Welcome to {user?.firstName}&apos;s Hitch
                </h2>
                <Button onClick={onCreate}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create a note
                </Button>
        </div>
    );
}

export default DocumentsPage;
