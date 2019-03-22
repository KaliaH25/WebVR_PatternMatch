# WebVR_PatternMatch
IMD3901B Assignment 3 Multi-User Interactions
Using A-Frame and Socket.io

Program overview: 
In this program, there is both collaborative and competitive interaction available to two or more users. More than one user may open the vr world and interact with it, but only a single user should be using the controller page. This program is intended to be opened with desktop only and all the interactions are handled through mouse clicks and keydown events. 

Controller: 
- Loading/refreshing the page will scramble the rows in webVR randomly
- Interact with the arrow buttons to rotate the co-responding rows in VR 
- Have a radio button selected and click the “change pattern” button on screen to provide the vr user with a hint at a completed puzzle 
- Clicking the “enable user control” button will allow the webVR user to also manipulate the rows. It will also trigger an alert which informs the user of their new controls. 
WebVR:
- Using a mouse, the user can rotate their viewpoint around origin. They cannot move the position of the camera as the planes can only be viewed by one side. 
- When enabled, the user can use the 1,q,a,z,alt and the 3,e,d,c,space keys on their keyboard to rotate the rows left and right respectively. 

If deciding to play collaboratively, the webVR player and controller can communicate and sort the panels together. If playing competitively there you can either have the webVR and controller working against each other, with the controller constantly trying to undo the webVR user’s work. Or you can have two users in the webVR with their controls on trying to complete the pattern above them before the other user can. In this situation the users would have to be facing back to back, and the scene would need to be monitored by a third party as there is no internal logic that determines a winner. 

Challenge: 
My initial project was going to be solving a rubric’s cube; however, I faced major difficulties dealing with the rotation of pieces due to unknown issues with A-Frame and gimble lock problems. Due to this, I had to re-work my design to account for only one axis of rotation. It was quite upsetting because I had put a lot of time and thought into the algorithm and code structure to try and combat the issues. I also had issues designing a competitive interaction. I went with something that is more self-curated, but if I had more dedicated time to work on this project alone I am sure I would have been able to come up with something better. I am finding that the stress of school is having a huge impact on my creativity and working speed.

Success 
I think my project was able to bounce back nicely after being scaled back so much. I am happy with my rotation algorithm and that I was able to create so many socket.io interactions without running into too many errors. 
