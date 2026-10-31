import { useMembershipContext } from "../../context/MemberContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const JoinServerButton = () => {
  const { serverId } = useParams();
  const navigate = useNavigate();
  const { joinServer, leaveServer, isLoading, error, isUserMember } =
    useMembershipContext();

  const handleJoinServer = async () => {
    try {
      await joinServer(Number(serverId));
      navigate(`/server/${serverId}/`);
      console.log("User has joined server");
    } catch (error) {
      console.log("Error joining", error);
    }
  };

  const handleLeaveServer = async () => {
    try {
      await leaveServer(Number(serverId));
      navigate(`/server/${serverId}/`);
      console.log("User has left the server successfully!");
    } catch (error) {
      console.error("Error leaving the server:");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      {isUserMember ? (
        <Button variant="outlined" size="small" onClick={handleLeaveServer}>
          Leave Server
        </Button>
      ) : (
        <Button variant="contained" size="small" disableElevation onClick={handleJoinServer}>
          Join Server
        </Button>
      )}
    </>
  );
};
export default JoinServerButton;
