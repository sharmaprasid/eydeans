// import { createHmac } from "crypto";
import { jwtVerify } from "jose";
const decodeToken = async (token) => {
  try {
    const secret = new TextEncoder().encode(
      "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
    );
    const verified = await jwtVerify(token, secret);
    // const decodedToken = JWT.verify(token, process.env.SECRET);

    // console.log(verified);
    return verified;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default decodeToken;
