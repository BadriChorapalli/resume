import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import resume from '../video/resume.mp4';

function VideoResume () {
	return <div className="videoresume">
        <video width="90%" height="450" controls autoplay >
        <source src={resume} type="video/mp4" width="900" height="400"/>
</video>
		
	</div>
}
export default VideoResume;
