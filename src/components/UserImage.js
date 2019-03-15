import React, { Component } from "react"
import userIcon from "../userIcon.png"
import { connect } from "react-redux"
import { Image } from "semantic-ui-react"

const kwitterURL = "http://localhost:3000"

class UserImage extends Component {
    state = { src: userIcon }
    componentDidMount() {
        fetch(`${kwitterURL}/users/${this.props.userId}/picture`).then(
            response => {
                if (response.status !== 404 && response.ok) {
                    this.setState({
                        src: `${kwitterURL}/users/${this.props.userId}/picture`
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
