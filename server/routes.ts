import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Proxy endpoint for n8n webhook to avoid CORS issues
  app.post("/api/submit-analysis", async (req, res) => {
    try {
      const { url, email } = req.body;

      // Validate required fields
      if (!url || !email) {
        return res.status(400).json({ error: "URL and email are required" });
      }

      // Forward to n8n webhook
      const response = await fetch('https://trkmuc.app.n8n.cloud/webhook/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 's_AjvdzQMy7EMQM-'
        },
        body: JSON.stringify({
          url: url.trim(),
          email: email.trim()
        })
      });

      if (response.ok) {
        const data = await response.text();
        res.json({ success: true, data });
      } else {
        res.status(response.status).json({ 
          error: 'Webhook request failed',
          status: response.status 
        });
      }
    } catch (error) {
      console.error('Error forwarding to n8n webhook:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
