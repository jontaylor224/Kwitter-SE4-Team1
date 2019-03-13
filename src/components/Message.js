//create message component

import React from 'react'
import { Message } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
const MessageExampleIconProp = () => (
    <Message
        icon='inbox'
        header='Have you heard about our mailing list?'
        content='Get the best news in your e-mail every day.'
    />
)

export default MessageExampleIconProp