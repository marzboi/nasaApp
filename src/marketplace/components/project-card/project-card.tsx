import { Project } from "../../models/data";

type PropsType = {
  item: Project;
};

export function ProjectCard({ item }: PropsType) {
  return (
    <>
      <li key={item.id}>
        <div>
          <h2>{item.name}</h2>
          <img src={item.img} alt="" />
          <p>{item.description}</p>
          <p>
            {item.author.firstName} {item.author.lastName}
          </p>
        </div>
        <div>
          <button className="btn btn-success">View</button>
        </div>
      </li>
    </>
  );
}
