import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    };
    
    return (
        <div>
            <div>
                <img className={classes.img} src="https://s3-us-west-2.amazonaws.com/truevirtualtours.com/public/cache/user_5623/Panorama/34751/1280x600/Panorama_34751.jpg" alt="img" height="400px" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;