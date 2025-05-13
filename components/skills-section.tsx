import { SKILLS } from "@/app/data";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <Badge key={skill} variant="outline" className="bg-card">
          {skill}
        </Badge>
      ))}
    </div>
  );
};
