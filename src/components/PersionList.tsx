import React from 'react'

type PLprops = {
    names: {
        first: string
        last: string
    }[]
}

const PersionList = (props:PLprops) => {
  return (
    <div>{props.names.map(
        name => {
            return (
                <h2>
                    {name.first}
                    {name.last}
                </h2>
            )
        }
    )}</div>
  )
}

export default PersionList