import React from 'react'

type statusProps = {
    status: string
}

const Status = (props:statusProps) => {
  let message
  if (props.status === "success") {
    message = "Data Fetch successfully"
  }
  else if(props.status === "failed"){
    message = "Failed lolll"
  }
  else{
    message = "Loding..."
  }
    return (
    <div>{message}</div>
  )
}

export default Status