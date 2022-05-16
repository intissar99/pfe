
import Sidebar from "./sidebar/Sidebar"
import {React, useContext}from "react";
import {Context} from "../context/Context"

function Dashboard() {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default Dashboard