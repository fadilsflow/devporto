import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/app/data";

export const SkillsSection = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <Badge
          key={skill.name}
          className=" border border-border "
          variant="outline"
        >
          {skill.name}
        </Badge>
      ))}
    </div>
  );
};
