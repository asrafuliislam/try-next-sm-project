import { ObjectId } from "mongodb";
import { connect } from "../../../lib/dbConnect";


const feedbackCollection = connect("feedbacks");

export async function GET(request, { params }) {
    const { id } = await params;
    const query = { _id: new ObjectId(id) }

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct id"
        })
    }
    const result = await feedbackCollection.findOne(query)
    return Response.json(result)
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    const query = { _id: new ObjectId(id) }

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct id"
        })
    }
    const result = await feedbackCollection.deleteOne(query)
    return Response.json(result)
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const { message } = await request.json();

    const query = { _id: new ObjectId(id) }


    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct id"
        })
    }

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "please send a Message "
        });
    }
    const newData = {
        $set: {
            message
        }
    }
    const result = await feedbackCollection.updateOne(query, newData)
    return Response.json(result)
}