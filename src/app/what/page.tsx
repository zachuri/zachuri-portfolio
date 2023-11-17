'use client';

import React from 'react';
import Skills from '@/components/what/skills';
import { ThreeModel } from '@/components/three/three-model';
import Section from '@/components/what/section-div';
import Workflow from '@/components/what/workflow';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Image from 'next/image';
import Interests from '@/components/what/interests';

const Page: React.FC = () => {
  return (
    <div className="max-sm:-mt-10 flex flex-col xl:mx-[10vw]">
      <Section
        id={'technical-skills'}
        className="flex items-center justify-center pb-32"
      >
        <div className="lg:w-[80%] sm:-mb-52 -mb-32 z-10">
          <center className="h-[400px] sm:h-[600px] flex items-center justify-center">
            <ThreeModel />
          </center>
        </div>

        <Skills />
      </Section>

      <Section id={'work-flow'} className="pb-32">
        <Workflow />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why?</AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-2">
              <span>
                For most of my work flow it really depends on a keyboard. When I
                was a student in college, I would use my laptop track pad to
                navigate my code. My first class at UCI, one of my professors
                taught his course while using VIM. It was amazing to see him
                code like a hacker who can type and navigate around his code
                really fast. To me I adored him and saw him as a professional
                coder because of that. He showed us how to use it but again it
                took practice.
              </span>
              <span>
                Throughout my college carrer I was able to use vim really well;
                however, this abiilty to increase work flow only really worked
                in an IDE. I later discovered the power of linux (Arch) and a
                desktop enviroment called &quot;Suckless Dynamic Window Manager
                (DWM)&quot;. These two combined helped me reach another level as
                a developer which for me increased my work flow and love for
                coding.
              </span>
              <span>
                Linux showed me the power of the terminal. I remember dreading
                to use the terminal and typing commands but later enjoyed it so
                much that I&apos;d rather use a CLI instead of GUI. Also, I use
                a linux distribution called Arch. I spent couple months building
                my own linux from sractch and I love it. I&apos; learned so much
                about linux which made me forget about Windows LOL. There are
                many specfic reasons but I&apos;ll go into detail later.
              </span>
              <span>
                Linux showed me the power of the terminal. I remember dreading
                to use the terminal and typing commands but later enjoyed it so
                much that I&apos;d rather use a CLI instead of GUI. Also, I use
                a linux distribution called Arch. I spent couple months building
                my own linux from sractch and I love it. I&apos;ve learned so
                much about linux which made me forget about Windows LOL. There
                are many specfic Laslty, DWM made my linux experince even
                better. The way DWM is able to organize your windows efficently
                and being able to navigate around your desktop with only a
                keyboard again made me feel like a professional developer. Just
                to be clear all of these configs I&apos;ve mentioned are
                preference and it isn&apos;t for everyone. It&apos;s very
                technical and takes a while to get used to. Similar to driving a
                manual transmission because when your starting you will make a
                lot of mistakes but once you get it down the more fun it
                becomes. For me, it just makes me feel proud to be a coder.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section id={'interests'} className="pb-32">
        <Interests />
      </Section>
    </div>
  );
};

export default Page;
