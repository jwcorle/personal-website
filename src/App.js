import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";


// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="greeting">
                    <div className="top">
                        <h2 className="hey">Hey, I'm</h2>
                        <h1 className="me">James</h1>
                    </div>

                    <svg preserveAspectRatio="xMidYMax meet" className="svg-separator" viewBox="0 0 1600 200" data-height="200">
                        <polygon className="sep-color-0" points="-4,188.586 174,76 292,124 402,60 536,108 752,8 882,66 990,32 1210,116 1380,64 1536,150 1604,115.09 1604,204 -4,204 "></polygon>
                        <polygon className="sep-color-1" points="174,76 174,78 -4,198 -4,188.586 "></polygon>
                        <polygon className="sep-color-1" points="292,124 302,138 402,64 402,60 "></polygon>
                        <polygon className="sep-color-1" points="536,108 544,120 752,12 752,8 "></polygon>
                        <polygon className="sep-color-1" points="882,66 890,78 990,36 990,32 "></polygon>
                        <polygon className="sep-color-1" points="1210,116 1222,130 1380,68 1380,64 "></polygon>
                        <polygon className="sep-color-1" points="1536,150 1546,164 1604,124 1604,115.09 "></polygon>
                        <polygon className="sep-color-2" points="174,76 292,124 282,140 174,78 "></polygon>
                        <polygon className="sep-color-2" points="402,60 536,108 528,120 402,64 "></polygon>
                        <polygon className="sep-color-2" points="752,8 882,66 874,80 752,12 "></polygon>
                        <polygon className="sep-color-2" points="990,32 990,36 1192,130 1210,116 "></polygon>
                        <polygon className="sep-color-2" points="1380,64 1536,150 1526,168 1380,68 "></polygon>
                    </svg>

                    <div className="bottom">
                        <h2 className="title">About Me</h2>
                        <p> I am a Junior currently studying Computer Science as an undergraduate at the <b>University of Maryland, College Park</b>. I have always been interested in data management, where I can gather information from APIs or from users, process it in some way, and represent it in a form that looks good and is practical to the target audience. This led me to learn web design and many of the different frameworks and languages around it that could help me convey my message more effectively. Feel free to reach out if you have any questions!</p>
                    </div>
                    <div className="social-flex">
                        <div className="divider" />

                        <SocialIcon url="http://linkedin.com/in/jwcorle" color="#fff" />
                        <SocialIcon url="https://github.com/jwcorle" color="#fff" />
                        <SocialIcon url="mailto:jcorley.w@gmail.com" color="#fff" />
                    </div>
                </div>
                <div className="content">
                    <div className="nav">
                        <h3>My Work</h3>
                        <div className="pull-right">
                            <span className="project active">
                                <h5>raids.top</h5>
                            </span>
                            <span className="project">
                                <h5>goUMD</h5>
                            </span>
                            <span className="project">
                                <h5>Aegis Timeportal</h5>
                            </span>
                        </div>
                    </div>

                    <div className="projectSummary">
                        <h1 className="projectName">raids.top</h1>
                        <h2 className="projectSubtitle">Player statistics and leaderboards for Destiny 2.</h2>
                        <h4 className="projectTimeline">September 2018 - Present</h4>
                        <div className="skills">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>React</span>
                            <span>Public API</span>
                            <span>AWS DynamoDB</span>
                            <span>AWS Lambda</span>
                            <span>Redis</span>
                        </div>

                        <br />

                        <h3>Background</h3>
                        <p>This project was inspired by many of my friends who play with me on Destiny 2. When we finish activities, there is no way in-game to see how well you did after you complete the activity. If you want to see any historical data, the Destiny 2 API is the only way.</p>

                        <h3>The Process</h3>
                        <p>After tinkering around with the API and understanding what endpoints I was going to use, I began with an algorithm that would take a username and return all of their consolidated information as quickly as I could. Creating a robust and efficient algorithm took a couple weeks and had many bugs and edge cases that were quite challenging. The next step was to make this algorithm accessible by the internet, as well as storing the output of this algorithm so it wouldn't be fetching user information that we had already processed.</p>

                        <p>I began researching where I wanted to host my tool. I could buy a VPS and host everything off a simple linux machine, but I knew that if I set it up correctly, my costs would be significantly lower on a cloud platform. In addition, my algorithm would run faster as the connection on a cloud provider is infinitely better than most other connection. as its making hundreds of API requests when initializing a user.</p>

                        <p>Researching all of the different cloud platforms and their pros/cons was a very tedious process. Understanding that every platform has its own free tier, what you get charged for outside of this tier, which platforms offer the cheapest storage with frequent read/writes but relatively small amount data. Eventually I decided on AWS. DynamoDB offers basically unlimited read and writes as long as it doesn't surpass 5 kB/s. My data is tiny, (~4kB/user), so this isn't even a problem if I'm overwriting an entire user every second. AWS Lambda's are also pretty sweet, 1mil free requests through API Gateway, and the bandwidth costs were resonable when compared to Google Cloud and Azure Functions.</p>

                        <p>After setting up AWS to work with my algorithm and made it accessible via the API Gateway, I moved on to designing the website. This is where I am currently am in this project. Taking the user data I have and displaying it in a format that makes sense / looks good to the user.</p>

                        <i> ... last updated 12/2018 ...</i>

                        <h3>Technical Challenges</h3>
                        <h4>Initializing a User</h4>
                        <p>The process of creating a user needed to be a quick one, so I wouldn't lose users because they were waiting on an algorithm to finish for 2-3 minutes. Hosting on a cloud platform helps significantly with this as I'm able to do the users with the most amount of data (1500+ requests) in about 40 seconds. The average user (~200 requests) takes around 15 seconds. I have spent a large amount of time minimizing the total amount of requests and performing as many requests as I can simultaneously. The efficiency of my algorithm is largely reliant on how quickly I can get all of the users data through these requests, as the actual process of parsing the JSON and consolidating it takes a matter of microseconds (versus 1-5 seconds for a request).</p>

                        <h4>Updating a User</h4>
                        <p>When a user's data has already been initialized, I shouldn't have to parse activities that I already have. This raises a problem of how I would keep track of the latest activity that I tracked. I noticed that the API actually returns game history chronologically, so I could actually just keep the gameHash of the most recent activity and loop through activities until I reached this gameHash in order to update it.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
