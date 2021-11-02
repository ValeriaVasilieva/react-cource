import React, { FC } from "react"
import * as SC from "./styled"

interface Props {
  message: string
}

const Message: FC<Props> = ({ message }) => {
  return (
    <SC.Root>
      <SC.Message>Ваше сообщение: {message}</SC.Message>
    </SC.Root>
  )
}

export default Message
