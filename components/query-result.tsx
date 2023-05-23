import React from "react";
import styled from "@emotion/styled";
import { Circles } from "react-loader-spinner";
/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({
  loading,
  error,
  data,
  children,
}: {
  loading: any;
  error: any;
  data: any;
  children: any;
}) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <Circles/>
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});
