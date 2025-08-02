import Heading from "../../components/Heading/Heading";
import Project from "../../components/Project/Project";

const Works = () => {
  return (
    <section>
      <div className="xl:px-20 xl:py-20 max-w-screen-xl m-auto">
        <Heading normal={"Proof of"} italic={" Work"} />
        <div className="grid grid-cols-2 xl:gap-5 pt-20">
          {projectDetails.map((details) => {
            return (
              <Project
                imgUrl={details.imgUrl}
                projectName={details.projectName}
                tags={details.tags}    
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;

const projectDetails = [
  {
    id: 1,
    imgUrl:
      "https://www.kartavya.io/images/home/onlinePresence/online_img_1.jpg",
    projectName: "FlowBank",
    tags: ["UX Research", "Interface Design"],
  },

  {
    id: 2,
    imgUrl:
      "https://www.kartavya.io/images/home/onlinePresence/online_img_2.jpg",
    projectName: "Academy.co",
    tags: ["Product Design", "Interaction Design"],
  },

  {
    id: 3,
    imgUrl:
      "https://www.kartavya.io/images/home/onlinePresence/online_img_3.jpg",
    projectName: "Genome",
    tags: ["Brand Identity Design", "UX Research"],
  },

  {
    id: 3,
    imgUrl:
      "https://www.kartavya.io/images/home/onlinePresence/online_img_4.jpg",
    projectName: "Hotto",
    tags: ["Visual Storytelling", "Mobile & Web Design"],
  },
];
