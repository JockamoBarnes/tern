import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, property, email, phone } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Tern Demo Requests <noreply@ternrewards.com>',
      to: ['alliance@ternrewards.com'],
      replyTo: email,
      subject: `Demo request — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
          <h2 style="color:#073B4C;">New demo request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#555;font-size:14px;width:110px;vertical-align:top;"><strong>Name</strong></td><td style="padding:8px 0;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-size:14px;vertical-align:top;"><strong>Property</strong></td><td style="padding:8px 0;font-size:14px;">${property || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-size:14px;vertical-align:top;"><strong>Email</strong></td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#555;font-size:14px;vertical-align:top;"><strong>Phone</strong></td><td style="padding:8px 0;font-size:14px;">${phone || '—'}</td></tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Book demo route error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
