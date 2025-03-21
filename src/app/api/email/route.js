import { feedbackTemplate } from "@/hooks/useEmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const data = await request.json();

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["andres52885241@gmail.com"],
            subject: data.email_subject + " | Portfolio",
            html: feedbackTemplate(data.user_email, data.email_subject, data.email_message),
        });

        return NextResponse.json({ success: true, message: "Email sent successfully", data });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message, data: error },
            { status: 500 }
        );
    }
}
