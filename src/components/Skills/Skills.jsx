import React from 'react';
import { skill } from '../../Data';

const Skills = () => {
  return (
    <section
      className='pb-[120px] xs:pb-[220px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]'
      id='skills'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Professional Skills
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Talent
        </span>
      </p>

      <div className='grid gap-8 mx-4 mb-12 ms:mx-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {skill.map(({ id, name, icon, color }) => (
          <div
            key={id}
            className='relative group p-6 transition-transform duration-300 transform hover:scale-105 hover:rotate-2 bg-bgColorAlt dark:bg-bgColorAltDark rounded-2xl shadow-md hover:shadow-lg'
          >
            <div className='flex flex-col items-center'>
              <div
                className='flex items-center justify-center w-16 h-16 mb-4 rounded-full text-[30px]'
                style={{ backgroundColor: color }}
              >
                {icon}
              </div>
              <h4 className='text-lg font-bold text-titleColor dark:text-titleColorDark group-hover:text-primaryColor'>
                {name}
              </h4>
            </div>
            <div className='absolute inset-0 bg-gradient-to-r from-primaryColor to-secondaryColor opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300'></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
