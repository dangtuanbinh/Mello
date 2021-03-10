import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import StoryReel from "../StoryReel/index";
import MessageSender from "../MessageSender/index";
import Post from "../Post/index";
import db from "../../Firebase";
import { useStateValue } from "../../Context API/StateProvider";
import "./index.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    // New post added => this code run
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <>
      <Container> 
        <Box className="feed">
          <StoryReel />
          <MessageSender />
          {posts?.map(({id, data}) => (
            <Post
              key={data.id}
              postID = {id}
              user={user}
              profilePic={data.profilePic}
              message={data.message}
              timestamp={data.timestamp}
              username={data.username}
              image={data.image}
              comment={data.comment}
            />
          ))}

        </Box>
      </Container>
    </>
  );
};

export default Feed;
