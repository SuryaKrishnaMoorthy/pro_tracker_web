import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/User/userThunk";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUser()), [dispatch]);

  const { first_name, last_name } = useSelector((state) => state.user);

  return <div>Home: Welcome {`${first_name} ${last_name}`}</div>;
};

export default Home;
