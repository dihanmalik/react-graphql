import AddForm from "./components/AddForm";
import ErrorBoundary from "@molecule/ErrorBoundary";
import { Query } from "react-apollo";
import React from "react";
import Text from "@atom/Text";
import View from "@atom/View";
import gql from "graphql-tag";
import styled from "@styler";

const Title = styled(Text)({
  marginTop: 15,
  marginBottom: 30
});

const FEED_QUERY = gql`
  {
    feed {
      id
      description
      url
    }
  }
`;

export default () => (
  <ErrorBoundary>
    <View flex={1} align={"center"}>
      <Title variant={"h3"}>List Page</Title>
      <AddForm />
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text variant={"h3"}>Fetching List</Text>;
          if (error) return <Text variant={"h3"}>{error}</Text>;

          const { feed } = data;
          return (
            <View>
              {feed.map(link => (
                <Text key={link.id}>{link.description}</Text>
              ))}
            </View>
          );
        }}
      </Query>
    </View>
  </ErrorBoundary>
);
