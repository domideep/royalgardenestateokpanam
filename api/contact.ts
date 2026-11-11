export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, unitInterest, dealType, message } = req.body || {};
  console.log('New Lead / Business Deal Inquiry:', { name, phone, email, unitInterest, dealType, message });

  return res.status(200).json({
    success: true,
    message: 'Your inquiry has been registered with the executive office of CEO Onyema Chukwuma.'
  });
}
