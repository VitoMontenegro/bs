import React from 'react';
import CreatePost from "../components/CreatePost.jsx";
import PostView from "../components/PostView.jsx";
import Load from "../components/Load.jsx";
import Friends from "../components/Friends.jsx";
import Contacts from "../components/Contacts.jsx";
import Group from "../components/Group.jsx";
import Events from "../components/Events.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";

function Home() {
    return (
        <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="row feed-body">
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            <CreatePost />
                            {/*<Storyslider />*/}

                            <PostView id="32" postVideo="" postImage="t-10.jpg" avatar="user-7.png" user="Surfiya Zakir" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <PostView id="31" postVideo="" postImage="" avatar="user-8.png" user="David Goria" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <PostView id="33" postVideo="v-2.mp4" postImage="" avatar="user-11.png" user="Anthony Daugloi" time="2 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            {/*<Memberslider />*/}
                            <PostView id="35" postVideo="v-1.mp4" postImage="" avatar="user-12.png" user="Victor Exrixon" time="3 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            {/*<Friendsilder />*/}
                            <PostView id="36" postVideo="" postImage="t-31.jpg" avatar="user-12.png" user="Victor Exrixon" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                            <Load />
                        </div>
                        <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                            <Friends />
                            <Contacts />
                            <Group />
                            <Events />
                            <ProfilePhoto />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home