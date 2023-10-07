import { Project } from "../../models/data";

type PropsType = {
  item: Project;
};

export function ProjectCard({ item }: PropsType) {
  return (
    <>
      <li key={item.id} className="container text-center">
        <div>
          <h2>{item.name}</h2>
          <img src={item.img} alt="" className="rounded mx-auto d-block" />
          <p>{item.description}</p>
          <p>
            {item.author.firstName} {item.author.lastName}
          </p>
        </div>
        <button className="btn btn-success">View</button>
      </li>
    </>
  );
}
