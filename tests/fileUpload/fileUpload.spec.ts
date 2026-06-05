import { test, expect } from "../../fixtures/Page";

test.describe("File Upload Tests", () => {
  test("select a file to upload", async ({ fileUpload }) => {
    await fileUpload.selectFile(
      "file-upload-input",
      "path/to/test-file.png",
      "file-upload-success-msg",
    );
  });
});
