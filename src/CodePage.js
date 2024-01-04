import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import StudentCodeBlock from './components/StudentCodeBlock';
import MentorCodeBlock from './components/MentorCodeBlock';
import "./CodePage.css"

const CodePage = () => {
    const { id } = useParams();
    const [socket, setSocket] = useState(null);
    const [isMentor, setIsMentor] = useState(null);

    useEffect(() => {
        
        // Fetch the isMentor value from the server
        fetch(`http://backend_coding_web_application.railway.internal/Mentor_id/${id}`)
            .then(response => response.json())
            .then(data => {
                setIsMentor(data.isMentor);
            })
            .catch(error => {
                console.error('Error fetching isMentor:', error);
            });
        
        const socket = io('http://backend_coding_web_application.railway.internal', {
            query: { codeId: id , isMentor : null},
        });
        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, [id]);

    return (
           <div>
      {socket && isMentor !== null && (
        // Render different components based on isMentor value
        <>
          {isMentor ? (
            <MentorCodeBlock id={id} socket={socket} isMentor = {1}/>
          ) : (
            <StudentCodeBlock id={id} socket={socket} isMentor = {0}/>
          )}
          <Link className="button-lobby" to="/">Lobby</Link>

        </>
      )}
    </div>
    );
};

export default CodePage;
