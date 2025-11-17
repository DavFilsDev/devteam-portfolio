import React from "react";
import { Github, Linkedin } from "lucide-react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group [perspective:1000px] w-72 h-96">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border-2 border-primary rounded-2xl">
        
        {/* --- FRONT --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 [backface-visibility:hidden]">
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary shadow"
          />
          <h3 className="text-xl font-bold text-dark dark:text-white">
            {member.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-primary/10 text-primary rounded-full dark:bg-primary/20 dark:text-primary-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* --- BACK --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white dark:bg-primary-700 rounded-2xl shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm italic text-center mb-4 text-white dark:text-gray-100">
            {member.bio}
          </p>
          <div className="flex gap-4">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 dark:hover:text-gray-300"
            >
              <Github size={24} />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 dark:hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamMemberCard;
