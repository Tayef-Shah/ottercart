import React, {Component} from 'react';
import notificationIcon from '../assets/png/notificationicon.png';
import settingsIcon from '../assets/png/settingsicon.png';
import resourcesIcon from '../assets/png/resourcesicon.png';
class Settings extends Component {
    render() {
        return (
            <div class="settingsContainer">
        <div class="notificationIcon">
            <img src={notificationIcon} alt="notificationIcon"/>
        </div>
        <div class="settingsIcon">
            <img src={settingsIcon} alt="settingsIcon"/>
        </div>
        <div class="resourcesIcon">
            <img src={resourcesIcon} alt="resourcesIcon"/>
        </div>
        <div class="notificationText">
            <p>Notifications</p>
        </div>
        <div class="settingsText">
            <p>Settings</p>
        </div>
        <div class="resourcesText">
            <p>Resources</p>
        </div>
    </div>)
    }
}
export default Settings;