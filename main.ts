const targetUrl = "https://misty-sea-1e43.hnano.workers.dev/";

async function pingTarget() {
  try {
    const res = await fetch(targetUrl);
    console.log(`Ping sent at ${new Date().toISOString()}, status: ${res.status}`);
  } catch (err) {
    console.error("Failed to ping target:", err);
  }
}

setInterval(pingTarget, 17000);
Deno.serve(() => new Response("Ping service is running."));
