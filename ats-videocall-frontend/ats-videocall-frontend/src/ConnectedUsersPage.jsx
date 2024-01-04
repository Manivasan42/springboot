import React, { useEffect, useState } from 'react';

function ConnectedUsersPage() {
  const [userList, setUserList] = useState([]);
  const [meetingName, setMeetingName] = useState('');

  useEffect(() => {
    loadAndDisplayUsers();
    // removeDisplayUsers();
  }, []);

  const loadAndDisplayUsers = () => {
    const connectedUser = localStorage.getItem('connectedUser');
    if (!connectedUser) {
      window.location.href = '/';
      return;
    }
    // const RemoveDisplayUsers = async () => {
    //   const offline = localStorage.getItem("offline",true);
    
    //   if (offline) {
    //     localStorage.removeItem('offline'); // Use removeItem to clear the 'offline' key
    //     window.location.href = '/';
    //     return;
    //   }
    // }
    // useEffect(() => {
    //   RemoveDisplayUsers();
    // }, []);
    

    

    // Fetch user data and update the state
    fetch('http://localhost:8080/api/v1/users/getData')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
      });
  };

  const handleLogout = () => {
    fetch('http://localhost:8080/api/v1/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: localStorage.getItem('connectedUser'),
    })
      .then((response) => response)
      .then(() => {
        localStorage.clear('connectedUser');
        // const connectedUsers = localStorage.getItem('connectedUser');
        // let data2 = window.localStorage.getItem('connectedUser');
        // console.log(data2);

        // localStorage.removeItem('connectedUser');
        window.location.href = '/';
      });
  };

  const handleNewMeeting = () => {
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    window.open(`videocall.html?username=${connectedUser.username}`, '_blank');
  };

  const handleJoinMeeting = () => {
    const url = `videocall.html?roomID=${meetingName}&username=${ConnectedUsersPage.username}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://images.idgesg.net/images/article/2020/04/zoom_video_conferencing_online_meeting_remote_workers_one_user_connected_via_laptop_with_a_grid_of_twelve_participants_on_screen_2400x1600-100837446-large.jpg?auto=webp&quality=85,70"
          alt="image"
        />
      </div>

      <div className="main">
        <div className="new-meeting">
          <button onClick={handleNewMeeting}>Create a New Meeting</button>
          <div className="join-meeting">
            <input type="text" placeholder="Meeting ID" value={meetingName} onChange={(e) => setMeetingName(e.target.value)} />
            <button onClick={handleJoinMeeting}>Join</button>
          </div>
        </div>
        <div className="connected-users">
          <button onClick={handleLogout}>Logout</button>
          <h2>Connected Users</h2>
          <ul>
            {userList.map((user, index) => (
              <li key={index}>
                <div>
                  <i className="fa fa-user-circle"></i>
                  {user.username} <i className="user-email">({user.email})</i>
                </div>
                <i className={`fa fa-lightbulb-o ${user.status === "online" ? "online" : "offline"}`}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConnectedUsersPage;
