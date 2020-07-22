import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { animateScroll } from "react-scroll";
import io from "socket.io-client";
const socket = io("http://localhost:3001/");

function Chat(props) {
  const useStyles = createUseStyles();
  const [height, setHeight] = useState("6vh");
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const classes = useStyles();
  const messagesBox = React.createRef();

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "containerElement",
      smooth: true,
    });
  };
  const sender = localStorage.getItem("token");
  const sendMessage = () => {
    setText("".trim());
    socket.emit("chat", text);
    socket.on("chat", (data) => {
      setMessages([...messages, { sender, message: data }]);
    });
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 10 }}>
      <div
        style={{
          width: "20vw",
          height,
          transition: "0.3s",
          border: "1px solid lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => setHeight(height === "6vh" ? "50vh" : "6vh")}
          style={{
            height: "6vh",
            backgroundColor: "#283e4a",
            color: "#fff",
            padding: 15,
          }}
        >
          Messages
        </div>
        <div
          ref={messagesBox}
          id="containerElement"
          style={{ flex: 1, padding: 10, height, overflowY: "scroll" }}
        >
          {messages.map((msg, i) => {
            if (msg.sender === sender) {
              return (
                <div
                  id={`msg-${i}`}
                  style={{
                    padding: 10,
                    background: "lightgrey",
                    borderTopRightRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    width: "70%",
                    position: "relative",
                    marginTop: 20,
                  }}
                >
                  {msg.message}
                </div>
              );
            } else {
              return (
                <div
                  id={`msg-${i}`}
                  style={{
                    padding: 10,
                    background: "#283e4a",
                    color: "white",
                    borderTopRightRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    width: "70%",
                    position: "relative",
                    left: "30%",
                    marginTop: 20,
                  }}
                >
                  {msg.message}
                </div>
              );
            }
          })}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage(e.target.value);
            }
          }}
          row={3}
          style={{
            border: "none",
            borderTop: "1px solid lightgrey",
            width: "100%",
          }}
          placeholder={"Type your message here"}
        />
      </div>
    </div>
  );
}

export default Chat;
