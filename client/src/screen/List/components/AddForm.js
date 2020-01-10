import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import View from "@atom/View";
import gql from "graphql-tag";
import styled from "@styler";

const POST_MUTATION = gql`
  mutation PostMutation($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
      description
      url
    }
  }
`;

const Container = styled(View)({
  marginBottom: 30,
  "& > div": {
    margin: "0px 10px"
  },
  "& > button": {
    marginLeft: 10
  }
});

export default () => {
  const [description, setDesc] = useState(""),
    [url, setUrl] = useState("");
  return (
    <Container row>
      <TextField
        label={"Description"}
        name={"description"}
        value={description}
        onChange={e => setDesc(e.target.value)}
      />
      <TextField
        label={"url"}
        name={"url"}
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
        {postMutation => (
          <Button
            disabled={!description || !url}
            onClick={postMutation}
            label={"Submit"}
            variant={"contained"}
            color={"primary"}
          >
            <AddIcon />
            Add new Data
          </Button>
        )}
      </Mutation>
    </Container>
  );
};
