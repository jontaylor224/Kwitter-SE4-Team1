//create Avatar component

import React from 'react'
import { Image } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

const ImageExampleAvatar = () => (
    <div>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
        <span>Username</span>
    </div>
)

export default ImageExampleAvatar