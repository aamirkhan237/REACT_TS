import React, {useState, useEffect} from 'react'


const UseEffect = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return (
            () => {
                window.removeEventListener("resize", handleResize)
            }
        )
    },[])
  return (
    <h2>{width}</h2>
  )
}

export default UseEffect