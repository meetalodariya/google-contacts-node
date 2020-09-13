jest.mock("../utils/json-web-token", () => {
  return { getUser: () => {} };
});

import jwt from "../utils/json-web-token";
import isAuthenticated from "./is-authenticated";
import isAuthenticatedMiddleware from "./is-authenticated";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InlhMjkuYTBBZkg2U01DODNIM1VaR1VqLUNSWEJRODk4Z2Z5NldKM19Idk96OFF4SDhYM3RsQkxHSlVnMjFxU1FPTEw4dWdCUGpwMFB3bVlxZzZ1cDVaYXotemxMUldwdkZGWTNhZVdyTjRPS18zTWJseG9MZ3J3TUhJYmdkMy1fbV9sb1dUUERLN245REd1Z1BhUkJNREhxRkRkcVFvT014dFRKWFBQREMwIiwiaWF0IjoxNTk5OTkzMTIyLCJleHAiOjE1OTk5OTY3MjJ9.KWsFufl8lQUMO5nJnxLSk_YUtDPyrbg4Ckf8jWkmLlU";

const replacedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InlhMjkuYTBBZkg2U01DODNIM1VaR1VqLUNSWEJRODk4Z2Z5NldKM19Idk96OFF4SDhYM3RsQkxHSlVnMjFxU1FPTEw4dWdCUGpwMFB3bVlxZzZ1cDVaYXotemxMUldwdkZGWTNhZVdyTjRPS18zTWJseG9MZ3J3TUhJYmdkMy1fbV9sb1dUUERLN245REd1Z1BhUkJNREhxRkRkcVFvT014dFRKWFBQREMwIiwiaWF0IjoxNTk5OTkzMTIyLCJleHAiOjE1OTk5OTY3MjJ9.KWsFufl8lQUMO5nJnxLSk_YUtDPyrbg4Ckf8jWkmLlU";

const decodedToken = {
  token:
    "ya29.a0AfH6SMC83H3UZGUj-CRXBQ898gfy6WJ3_HvOz8QxH8X3tlBLGJUg21qSQOLL8ugBPjp0PwmYqg6up5Zaz-zlLRWpvFFY3aeWrN4OK_3MblxoLgrwMHIbgd3-_m_loWTPDK7n9DGugPaRBMDHqFDdqQoOMxtTJXPPDC0",
};

describe("isAuthenticated middleware", () => {
  test("should extract the user from token", async () => {
    let req: any = new Object();
    const get = jest.fn();
    req.get = get;
    const getUser = jest.fn();
    getUser.mockReturnValue(decodedToken);
    jwt.getUser = getUser;
    get.mockReturnValue(token);

    await isAuthenticated(req, {}, () => {});

    expect(jwt.getUser).toHaveBeenCalledWith(replacedToken);
    expect(req).toHaveProperty("user", decodedToken);
  });
});
