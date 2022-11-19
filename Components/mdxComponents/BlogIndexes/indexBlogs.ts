import { machineLearningSubPages } from "./MachineLearning.Index";
import { MoleculardockingSubPages } from "./Molecular-docking.blogsIndex";
import { NatureOfCodeSubPages } from "./NatureOfCode.index";
import { randomSubPages } from "./randomBlogs.index";

export const blogs = [
    {
      name: "Welcome",
      link: "/articles/welcome",
      subPages: [],
    },
    {
      name: "Molecular Docking",
      link: "/articles/molecular-docking/1.1-Introduction-to-molecular-docking",
      subPages: MoleculardockingSubPages,
      alwaysOpen:true
    },
    {
      name: "Machine Learning",
      link: "/articles/molecular-docking/1.1-Introduction-to-molecular-docking",
      subPages:machineLearningSubPages,
    },
    {
        name: "The Nature of Code",
        link: "/articles/molecular-docking/1.1-Introduction-to-molecular-docking",
        subPages:NatureOfCodeSubPages,
      },
    {
      name: "Random Research / ongoing Research",
      link: "/articles/random",
      subPages: randomSubPages,
    },
  ];