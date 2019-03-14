import React, { Component } from "react"
import StickyHeader from "./StickyHeader"
import UserProfile from "./UserProfile"

export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <StickyHeader />
                <UserProfile />
            </div>
        )
    }
}
