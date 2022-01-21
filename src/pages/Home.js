import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import { getUser } from "../features/User/userThunk";
import Tasks from "../features/Tasks/Tasks";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUser()), [dispatch]);

  const { first_name, last_name } = useSelector((state) => state.user);

  return (
    <Container sx={{ my: 10}}>
      Home: Welcome {`${first_name} ${last_name}`}
      <Tasks />
    </Container>
  );
};

export default Home;
