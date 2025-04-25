import { SKILLS } from "@/app/data";
import { Badge } from "@/components/ui/badge";
export const Skills = () => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {SKILLS.map((skill) => (
        <Badge key={skill.name} variant={"outline"} className="bg-card">
          {skill.name}
        </Badge>
      ))}
    </div>
  );
};
