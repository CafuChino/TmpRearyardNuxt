defineRouteMeta({
    openAPI: {
      tags: ["test"],
      summary: "Test route summary",
      externalDocs: { url: "https://example.com", description: "Test external docs" },
      description: "Test route description",
      parameters: [{ in: "query", name: "test", required: true }],
      responses: {
        200: {
          description: "Test response",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  test: { type: "string" },
                },
              },
            },
          },
        },
      }
    },
  });

export default defineEventHandler(event => {
    return {
        a: 1
    }
})