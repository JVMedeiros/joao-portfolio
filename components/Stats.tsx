"use client";

import { githubApi } from "@/app/api/github";
import CountUp  from "react-countup";

// TODO: Receber esses stats do github 
// Tempo de experiência: início em 2019
// Projetos completos: Github - repositories
// Tecnologias: Github - tech?
// Code commits: Github commits

const stats = [
  {
    num: 12,
    text: "Years of experience"
  },
  {
    num: 26,
    text: "Projects completed"
  },
  {
    num: 8,
    text: "Technologies mastered"
  },
  {
    num: 500,
    text: "Code commits"
  },
]

export async function Stats () {
  const response = await githubApi.get('/repos/JVMedeiros')
  const userData = response.data
  console.log('userData', userData)
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div 
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}>
                <CountUp 
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p 
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}