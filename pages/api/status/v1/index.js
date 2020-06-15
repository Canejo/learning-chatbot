import microCors from 'micro-cors';
const cors = microCors();

function Status(request, response) {
    response.status(200);
    response.json({
        status: "ok",
        date: new Date(),
        environment: process.env.NODE_ENV
    });
}

export default cors(Status);