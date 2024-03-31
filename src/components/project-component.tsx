import { Button } from "@/components/ui/button";

interface ProjectComponentProps {
  scr1: string;
  body: string;
  title: string;
  buttonLink?: string;
}

function ProjectComponent(props: ProjectComponentProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between">
      <div className="w-full sm:w-auto md:pr-8">
        <h1 className="text-2xl sm:text-4xl font-semibold pb-2">
          {props.title}
        </h1>
        <p className="pr-2">{props.body}</p>
        {props.buttonLink && (
          <a href={props.buttonLink}>
            <Button size="sm" className="mt-2">
              View Project
            </Button>
          </a>
        )}
      </div>
      <img
        src={props.scr1}
        alt="Screenshot"
        className="rounded-xl w-full sm:w-96 mt-8 sm:mt-0"
      />
    </div>
  );
}

export default ProjectComponent;
