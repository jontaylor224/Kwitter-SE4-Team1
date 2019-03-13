//input component
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const MessageInput = () => (
    <Form>
        <Form.Field>
            <label>Enter new message</label>
            <input placeholder='Enter message ...' />
        </Form.Field>
        
        <Button type='submit'>Submit</Button>
    </Form>
)

export default MessageInput
