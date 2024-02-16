"use client";
import { useRouter } from "next/navigation";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const url = "/login";
const LogoutComponent = () => {
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      const response = await axios.get("/api/logout");
      console.log(response);
      if (response.status === 200) {
        router.push(url);
        toast.success("Logout Successfull");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error. Try again");
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
