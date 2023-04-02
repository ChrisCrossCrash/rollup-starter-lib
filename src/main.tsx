interface Props {
  message: string
}

const SampleComponent: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default SampleComponent
