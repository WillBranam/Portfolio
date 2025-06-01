import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="p-4" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div className="p-4 border rounded shadow" key={proj.id}>
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" className="text-blue-500">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}
