import jwt from "jsonwebtoken";

const decodeToken = async (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    if (!token) {
      throw new Error("Token not found in cookies");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (
      typeof decodedToken === "object" &&
      "id" in decodedToken &&
      "isAdmin" in decodedToken &&
      "email" in decodedToken
    ) {
      const { id, isAdmin, email } = decodedToken;
      return { id, isAdmin, email };
    } else {
      throw new Error("Invalid token structure");
    }
  } catch (error) {
    throw error;
  }
};

export default decodeToken;
