import React from "react";
import './Pages.scss'

const About = () => {
  return (
    <div className="container">
      <section className="about">
      <h1>Todo List</h1>
      <p>Our Todo List App is designed to help you stay organized and manage your tasks effectively. Whether you have a busy work schedule or a list of personal errands, this app will assist you in keeping track of your to-do items.</p>
      <ul>
        <h3>Key Feature</h3>
      <li>Create, edit, and delete tasks: Easily add new tasks, update existing ones, and remove completed or unnecessary items.</li>
  <li>Mark tasks as completed: Keep track of your progress by checking off completed tasks.</li>
  <li>User-friendly interface: Our app provides a simple and intuitive interface, making it easy to navigate and manage your to-do list.</li>
  <li>Responsive design: Access your tasks on any device, including desktops, laptops, tablets, and mobile phones.</li>
  <li>Save your progress: Your tasks will be saved locally, allowing you to resume your work seamlessly.</li>
  </ul>
  </section>
      </div>
  )
}

export default About;
