import connectToMongo from "../../../../../../server/server/db/connection";
import User from '../../../../../../server/server/models/User';
import { NextResponse } from "next/server";


// Fetch user info from the server
export async function GET() {
    await connectToMongo();
    const userInfo = await User.find();
    return NextResponse.json({ userInfo });
}