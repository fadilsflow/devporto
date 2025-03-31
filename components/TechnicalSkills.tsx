"use client";

import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/app/data";

export const TechnicalSkills = () => {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs font-medium"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}; 