import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"
import LoginButton from "./components/LoginButton";
export default async function(){
    const session = await getServerSession();
    if(session?.user){
        redirect("/loggedin")
    }
    return <div>
        loggedout <LoginButton />
    </div>
}