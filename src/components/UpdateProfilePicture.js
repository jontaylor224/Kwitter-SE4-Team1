import React, { Component } from "react"
import ImageUploader from "./ImageUploader"
import { Modal, Button } from "semantic-ui-react"
import { connect } from "react-redux"

class UpdateProfilePicture extends Component {
    state = { open: false }
    handleSubmit = () => {
        this.props.updateUser({ ...this.state })
        this.handleModal()
    }

    handleModal = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    trigger={
                        <Button onClick={this.handleModal}>
                            Update Profile Image
                        </Button>
                    }
                    open={this.state.open}
                    onClose={this.handleModal}
                >
                    <Modal.Header>Upload a New Profile Picture</Modal.Header>
                    <ImageUploader />
                </Modal>
            </React.Fragment>
        )
    }
}

export default connect(
    null,
    null
)(UpdateProfilePicture)
