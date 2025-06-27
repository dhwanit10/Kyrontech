export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*'); // Or restrict to your GitHub Pages URL
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const response = await fetch('https://dhwap1010.app.n8n.cloud/webhook-test/Consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await response.text(); // or .json() if n8n responds with JSON
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ error: 'Proxy failed', detail: error.message });
  }
}
