import React, { useState } from 'react'

interface NavBarProps {
  name: string
}
const NavBar: React.FunctionComponent<NavBarProps> = ({
  name
}: NavBarProps): JSX.Element => {
  const [count, setCount] = useState<number>(0)

  return (
    <span>
      {name}: {count}
      <button onClick={() => setCount(count + 1)}> Add One </button>
    </span>
  )
}

export default NavBar