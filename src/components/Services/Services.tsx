import {
  Target,
  Code,
  BarChart2,
  Settings,
  Users,
  Calendar,
  Cpu,
  MessageSquare,
} from "lucide-react";
import SkillsCard from "../Cards/SkillsCard/SkillsCard";
import styles from "./Services.module.scss";

const services = [
  {
    title: "Agile Coaching",
    description:
      "Help teams adopt Agile through planning, retrospectives, and backlog grooming.",
    icon: <Target size={50} />,
  },
  {
    title: "Project Management",
    description:
      "Manage technical projects from planning to delivery with clear timelines and risk mitigation.",
    icon: <Code size={50} />,
  },
  {
    title: "Data Analysis",
    description:
      "Transform data into insights using Excel, Power BI, and Tableau for better decisions.",
    icon: <BarChart2 size={50} />,
  },
  {
    title: "Tools Optimization",
    description:
      "Customize Jira, Confluence, and DevOps tools to boost team productivity.",
    icon: <Settings size={50} />,
  },
  {
    title: "Team Leadership",
    description:
      "Lead remote and hybrid teams with focus on alignment, transparency, and performance.",
    icon: <Users size={50} />,
  },
  {
    title: "Interim Project Manager",
    description:
      "Offer short-term leadership for transitions, emergency recovery, or PM onboarding.",
    icon: <Calendar size={50} />,
  },
  {
    title: "Process Automation",
    description:
      "Implement CI/CD pipelines and automate repetitive tasks to accelerate development cycles.",
    icon: <Cpu size={50} />,
  },
  {
    title: " Communication",
    description:
      "Ensure alignment between tech teams and business stakeholders through clear, consistent communication.",
    icon: <MessageSquare size={50} />,
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesWrapper}>
        <h2>Skills & Technologies</h2>
        <p>What I bring to the table</p>
        <div className={styles.serviceCards}>
          {services.map((service, index) => (
            <SkillsCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;