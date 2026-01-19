import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

interface Props {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

const ContentSection = ({
  title,
  description,
  actionLabel = "Discover",
  actionHref = "#",
  className,
}: Props) => {
  return (
    <section className={clsx("flex flex-col", className)}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
            {title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="shrink-0 self-end">
          <a href={actionHref}>
            <Button
              variant="outline"
              icon={<ChevronRight className="h-4 w-4 bg-transparent" />}
              iconPosition="right"
            >
              {actionLabel}
            </Button>
          </a>
        </div>
      </div>

      <hr className="mt-8 border-border" />
    </section>
  );
};

export default ContentSection;
