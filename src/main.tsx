interface SimpleComponentProps {
  message: string
}

const SampleComponent = ({ message }: SimpleComponentProps) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default SampleComponent
