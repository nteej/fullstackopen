

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      <Part part={props.part} exercises={props.exercises} />
    </div>

  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1={
    name:'Fundamentals of React',
    exercise:10
  }
  const part2={
    name:'Using props to pass data',
    exercise:7
  }
  const part3={
    name:'State of a component',
    exercise:14
  }

  return (
    <>
      <Header course={course} />
      <Content part={part1.name} exercises={part1.exercise} />
      <Content part={part2.name} exercises={part2.exercise} />
      <Content part={part3.name} exercises={part3.exercise} />
      <Total total={part1.exercise + part2.exercise + part3.exercise} />
    </>
  )
}

export default App
