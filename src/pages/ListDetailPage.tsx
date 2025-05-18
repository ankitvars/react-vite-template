import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../components/RightSideComponent.css";
import DetailInfo from "../components/DetailInfo";

const ListDetailPage = () => {
  const router = useLocation();
  const { state } = router;
  // const { data } = state;

  console.log("ListDetailPage data", state);

  return (
    <>
      {" "}
      <Box className="rightSideComponent">
        <Container
          maxWidth={false}
          className="rightSideContainer"
          id="scrollableDiv"
        >
          <Header />
          <DetailInfo data={state} />
        </Container>
      </Box>
    </>
  );
};

export default ListDetailPage;
