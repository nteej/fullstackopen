

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
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
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
  const part = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <>
      <Header course={course} />
      <Content part={part} exercises={exercises} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
