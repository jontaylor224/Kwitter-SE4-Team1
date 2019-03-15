import React, { Component } from "react"
import userIcon from "../userIcon.png"
import { connect } from "react-redux"
import { Image } from "semantic-ui-react"
import {domain} from '../actions/constants/index'

class UserImage extends Component {
    state = { src: userIcon }
    componentDidMount() {
        fetch(`${domain}/users/${this.props.userId}/picture`).then(
            response => {
                if (response.status !== 404 && response.ok) {
                    this.setState({
                        src: `${domain}/users/${this.props.userId}/picture`
                    })
                }
            }
        )
    }
    render() {
        return <Image src={this.state.src} />
    }
}
const mapStateToProps = state => {
    return {
        userId: state.auth.login.id
    }
}

export default connect(
    mapStateToProps,
    null
)(UserImage)
