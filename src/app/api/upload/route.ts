export async function POST(req: Request) {
  try {
    return Response.json({
      success: true,
      message: "Upload endpoint working",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Upload failed",
      },
      {
        status: 500,
      },
    );
  }
}
