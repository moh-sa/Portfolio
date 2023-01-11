import Image from "next/image";
import Button from "./Button";

const Card = (props: CardProps) => {
  return (
    <div
      className="flex flex-col justify-between rounded-lg
      border border-gray-600 bg-gray-800 text-center shadow-md lg:items-center"
    >
      <div>
        {props.type === "img" && (
          <a
            href={props.demo_url}
            target="_blank"
            title={`Go to the live demo of "${props.title}"`}
            aria-label={`Go to the live demo of "${props.title}"`}
          >
            <Image
              width={800}
              height={400}
              className="rounded-t-lg"
              alt={`An image of a project called ${props.title}`}
              src={props.media_url}
            />
          </a>
        )}

        {props.type === "vid" && (
          <video className="rounded-t-lg" autoPlay muted>
            <source src={props.media_url} type="video/mp4" />
          </video>
        )}

        <div className="m-4">
          <a href={props.demo_url} target="_blank">
            <h5 className="mb-2 text-2xl font-bold -tracking-tight text-white">
              {props.title}{" "}
              <span className="text-sm text-gray-400">{props.year}</span>
            </h5>
          </a>

          <p className="font-normal text-gray-400">{props.description}</p>
        </div>
      </div>

      <div className="m-4 flex flex-col flex-wrap gap-4 lg:flex-row lg:justify-center">
        {!props.is_demo_disabled && (
          <Button icon="demo" href={props.demo_url} text="Live Demo" />
        )}
        {!props.is_repo_disabled && (
          <Button icon="github" href={props.repo_url} text="Github Repo" />
        )}
      </div>
    </div>
  );
};

export default Card;
