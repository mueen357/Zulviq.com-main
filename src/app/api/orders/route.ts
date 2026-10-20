import { NextRequest, NextResponse } from "next/server";
import { sendOrderNotificationEmail } from "@/lib/email";
import { Order } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order, proofBase64 } = body as { order: Order; proofBase64?: string };

    if (!order || !order.id || !order.customer || !order.items || order.items.length === 0) {
      return NextResponse.json(
        { error: "Invalid order payload. Missing required fields." },
        { status: 400 }
      );
    }

    // Send email notification to store owner (zulviqcare@gmail.com)
    const emailResult = await sendOrderNotificationEmail(order, proofBase64);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      emailSent: emailResult.success,
      simulated: (emailResult as { simulated?: boolean }).simulated || false,
    });
  } catch (error: unknown) {
    console.error("API /api/orders error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
