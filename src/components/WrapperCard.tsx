import React from "react";
import SkillCard from "./SkillCard";

interface SkillType {
    icon: string;
    label: string;
}

interface WrapperCardProps {
    category: string; // The category name, e.g., "frontend"
    skills: SkillType[]; // List of skills in that category
}

const WrapperCard: React.FC<WrapperCardProps> = ({ category, skills }) => {
    return (
        <div className="mb-8 reveal-up">
            <h3 className="text-2xlxl pb-3 text-zinc-200 font-semibold capitalize">
                {category.replace(/([a-z])([A-Z])/g, "$1 & $2")} {/* Adjust casing */}
            </h3>
            <div className="skill-grid grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default WrapperCard;
