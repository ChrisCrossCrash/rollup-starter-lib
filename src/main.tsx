type MyComponentProps = {
  children: React.ReactNode
}

function MyComponent({ children }: MyComponentProps) {
  return <div>{children}</div>
}

export default MyComponent
