import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Comments } from "../Types/types";
import { useParams, Link } from "react-router-dom";
//import '../cssnkQuiz.scss';

interface UserInfo {
  nickname: string;
}

const StudentComments = ({ nickname }: UserInfo) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comments[]>([]);
  const [body, setBody] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    api.getCommentsByUsername(nickname).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  //let copyCommentsAPI = [...comments];

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDisableButton(true);
    api
      .postCommentByUsername(nickname, {
        body: body,
      })
      .then(() => {
        const newComment: Comments = {
          body: body,
          created_at: "Thu Aug 18 2022",
          _id: "62f509f8fe534221faffbf99",
          username: "mario",
        };

        setComments((currentComments) => {
          let copyCommentsAPI = [...currentComments];
          copyCommentsAPI.push(newComment);
          return copyCommentsAPI;
        });
        setBody("");
      });
  };

  if (isLoading === true) {
    return <p>Loading ...</p>;
  } else {
    return (
      <section>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <p>Created at : {new Date(comment.created_at).toDateString()}</p>
              <p>Comment : {comment.body}</p>
            </div>
          );
        })}
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput
            placeholder="Please enter comment"
            onChange={(event) => setBody(event.target.value)}
            value={body}
            //disabled={disableButton}
          />
          <FormHelperText />
          <Button
            onClick={handleSubmit}
            variant="contained"
            // disabled={disableButton || body === ""}
          >
            Submit
          </Button>
        </FormControl>
      </section>
    );
  }
};

export default StudentComments;
