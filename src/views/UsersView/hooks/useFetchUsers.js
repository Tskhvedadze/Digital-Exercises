import axios from "axios";
import { useState, useEffect } from "react";

export function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const get_users = async () => {
    setLoadingUsers(true);
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data?.users);
    setLoadingUsers(false);
  };

  useEffect(() => {
    get_users();
  }, []);

  return { users, loadingUsers, get_users };
}
