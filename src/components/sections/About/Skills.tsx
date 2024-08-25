import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";

import { skills } from "../../../data/data";

const Skills = () => {
    return (
        <div className="container max-w-7xl pt-8 mx-auto">
            <div className="text-center mb-12">
                <CpuChipIcon className="w-10 inline-block mb-4" />
                <h1 className="md:text-4xl text-3xl font-medium title-font mb-4">
                    Skills &amp; Technologies
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                </p>
            </div>
            <ul>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
                    {skills.map((skill) => (
                        <li key={skill.id} className="p-3">
                            <img src={skill.img} alt="skill-icon" />
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}

export default Skills;
