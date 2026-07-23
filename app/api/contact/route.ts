
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_RnQDvwwt_HzkbQERJfJ4iz5faRYKj44Nb');

export async function POST(request: Request) {
  const { nama, whatsapp, email, pesan } = await request.json();

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hanimafoundation@gmail.com',
      subject: `Pesan dari ${nama} - Majelis Perkantoran`,
      html: `
        <h2>Pesan Baru dari Website Majelis Perkantoran</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${pesan}</p>
      `,
    });

    console.log('Resend result:', JSON.stringify(result));

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Catch error:', error);
    return NextResponse.json({ error: 'Gagal mengirim email' }, { status: 500 });
  }
}