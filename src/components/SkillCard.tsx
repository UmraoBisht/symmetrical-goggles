import React from "react"


interface SkillType {
  label: string;
  icon: string;
}

const SkillCard: React.FC<SkillType> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 ring-inset ring-1 ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group">
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={icon} alt={label.split(" ").join("-")} height={32} width={32} />
      </figure>
      <div>
        <h3>
          {label}
        </h3>
      </div>
    </div>
  )
}

export default SkillCard