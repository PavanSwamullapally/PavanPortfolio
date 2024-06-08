import './index.scss'

const Projects = () => {
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>My Projects</h1>
          <p>
            Explore my portfolio showcasing front-end projects crafted with
            cutting-edge technologies, such as React.js, seamlessly integrated
            with the fundamentals of HTML, CSS, and JavaScript. Click on the
            enticing tiles alongside to experience live demonstrations of my
            work. Delve deeper into the intricacies of these projects by
            accessing their source code on my GitHub repository. Your visit is
            greatly appreciated; please feel free to explore and engage with my
            work.
          </p>
        </div>
        <div className="tiles-zone">
          <ul>
            <li>
              <a
                href="https://peppy-sundae-bb4bb6.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Life Style Brand Website
              </a>
            </li>
            <li>
              <a
                href="https://genuine-gumdrop-8ccda1.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Camera Store Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Projects
