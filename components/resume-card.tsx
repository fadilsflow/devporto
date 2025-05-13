interface ResumeItem {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}

interface ResumeCardProps {
  items: ResumeItem[];
  title?: string;
  className?: string;
}

export default function ResumeCard({
  items,
  title,
  className = "",
}: ResumeCardProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {title && (
        <h2 className="text-sm font-mono uppercase font-bold tracking-wider">
          {title}
        </h2>
      )}
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-foreground text-xs">{item.subtitle}</p>
            </div>
            <span className="text-primary font-normal text-xs sm:text-sm whitespace-nowrap">
              {item.period}
            </span>
          </div>
          {item.description && (
            <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
