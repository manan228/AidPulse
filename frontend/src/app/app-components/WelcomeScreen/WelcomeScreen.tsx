import { Button, Typography } from "@mui/material";
import { AidPulse } from "./AidPulse";
import { useContext } from "react";
import { AppContext } from "@/app/AppContext";

export function WelcomeScreen() {
  const appContext = useContext(AppContext);
  return (
    <>
      <div className="p-8 pt-8 pb-0"></div>
      <AidPulse />
      <div>
        <div className="p-8 pt-4 pb-0 text-center">
          <Typography variant="h2">AidPulse</Typography>
          <Typography variant="h6" className="">
            Connects victims & helpers
          </Typography>
        </div>
      </div>
      <div className="flex justify-center items-center w-full max-w-xs mx-auto mt-8 space-x-4">
        <div
          onClick={() => appContext?.setUserType("victim")}
          className="flex flex-col items-center col-1 border border-white rounded-lg p-4 min-h-[100px] min-w-[150px]"
        >
          <div
            className="material-symbols-outlined"
            style={{ color: "white", fontSize: "40px" }}
          >
            emoji_people
          </div>
          <div>I need help</div>
        </div>
        <div onClick={() => appContext?.setUserType("responder")} className="flex flex-col items-center col-1 border border-white rounded-lg p-4 min-h-[100px] min-w-[150px]">
          <div
            className="material-symbols-outlined"
            style={{ color: "white", fontSize: "40px" }}
          >
            volunteer_activism
          </div>
          <div>I want to help </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          variant="contained"
          className="w-5/6 mx-auto h-12 !rounded-full"
          sx={{
            backgroundColor: "#3a1054",
            fontFamily: "Inter",
            textTransform: "none",
          }}
        >
          I Accept
        </Button>
      </div>
      <div className="flex justify-center pt-4">
        <Typography variant="caption">
          <span style={{ textDecoration: "underline" }}>
            Terms & Conditions
          </span>
        </Typography>
      </div>
    </>
  );
}
