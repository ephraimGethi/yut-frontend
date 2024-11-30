import React from 'react'
import "./PlayVideo.css"
import Video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import userprofile from "../../assets/user_profile.jpg"



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={Video1} controls autoPlay muted/>
        <h3>The best place to be a master in hacking</h3>
        <div className='play-video-info'>
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt=''/>125</span>
                <span><img src={dislike} alt=''/>2</span>
                <span><img src={share} alt=''/>share</span>
                <span><img src={save} alt=''/>save</span>
            </div>
        </div>
        <hr/>
        <div className='publisher'>
            <img src={jack} alt=''/>
            <div>
                <p>Code with Ephraim</p>
                <span>1M subscribers</span>
            </div>
            <button>subcribe</button>
        </div>
        <div className='vid-description'>
            <p>Channels that makes greate impact in the world of technology</p>
            <p>kidly subscribe to watch more educative videos like this from my channel</p>
            <hr/>
            <h4>130 comments</h4>
            <div className='comment'>
                <img src={userprofile} alt=''/>
                <div>
                    <h3>Donald Trump <span>1 day ago</span></h3>
                    <p>This video is very much educative.The volume and the quality of content in this video is on another level.</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>244</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={userprofile} alt=''/>
                <div>
                    <h3>Televisa Studio<span> 1 day ago</span></h3>
                    <p>This video is very much educative.The volume and the quality of content in this video is on another level.</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>244</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={userprofile} alt=''/>
                <div>
                    <h3> Royal Media services <span>10 minutes ago</span></h3>
                    <p>This video is very much educative.The volume and the quality of content in this video is on another level.</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>244</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={userprofile} alt=''/>
                <div>
                    <h3>Donald Trump <span>1 day ago</span></h3>
                    <p>This video is very much educative.The volume and the quality of content in this video is on another level.</p>
                    <div className='comment-action'>
                        <img src={like} alt=''/>
                        <span>244</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo