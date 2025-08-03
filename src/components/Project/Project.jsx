import Tags from "../Tags/Tags";

const Project = ({ imgUrl, projectName, tags }) => {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <img src={imgUrl} className="w-fit rounded-xl" />
      <div className="text-xl">{projectName}</div>
     <div className="flex gap-3">
       {tags.map((tag, key) => {
         return(
          <Tags bgColor={"bg-white"} tags={tag} fontColor={"text-zinc-500"} key={key}/>
         )
      })}
     </div>
    </div>
  );
};

export default Project;
