

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )

}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercise} />
      <Part part={props.part[1].name} exercises={props.part[1].exercise} />
      <Part part={props.part[2].name} exercises={props.part[2].exercise} />

    </div>

  )
}
const Total = (props) => {
  let tot = props.part[0].exercise + props.part[1].exercise + props.part[2].exercise
  return (
    <p>Number of exercises {tot}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }
  console.log(course)
  return (

    <>
      <Header course={course} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </>
  )
}

export default App
