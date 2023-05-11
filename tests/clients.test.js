const axios = require("axios");
const {
  getClientById,
} = require("../routes/shared");
jest.mock("axios");

  describe("getClientById tests", () => {
    it("should return the client with the specified id", async () => {
      const mockResponse = {
        data: {
          clients: [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
          ],
        },
      };
      axios.get.mockResolvedValueOnce(mockResponse);
      const client = await getClientById(1);
      expect(client).toEqual({ id: 1, name: "John Doe" });
      expect(axios.get).toHaveBeenCalledWith(
        "http://www.mocky.io/v2/5808862710000087232b75ac"
      );
    });
  });
