# 🛠️ MCP Frontend Starter

## Try MCP in VS Code

### MCP Tour

**Prerequisites**
1. Use VS Code Insiders (version 1.99 or later)
2. Enable MCP discovery in settings if you want to use your MCP servers defined in Claude Desktop.
    ```json
    "chat.mcp.discovery.enabled": true
    ```

**Configuring MCP servers:**
1. Check `.vscode/mcp.json` for predefined server configurations.
   1. `"servers": {}` follows Claude's structure for `claude_desktop_config.json`.
   2. `"inputs": []` optionally lets you define custom placeholders for the server configurations, to avoid hardcoding sensitive information.
    ```json
    {
        "inputs": [
            {
            "type": "promptString",
            "id": "perplexity-key",
            "description": "Perplexity API Key"
            }
        ],
        "servers": {
            // https://github.com/ppl-ai/modelcontextprotocol/
            "Perplexity": {
                "command": "docker",
                "args": [
                    "run",
                    "-i",
                    "--rm",
                    "-e",
                    "PERPLEXITY_API_KEY",
                    "mcp/perplexity-ask"
                ],
                "env": {
                    // Look ma, no hardcoded secrets!
                    "PERPLEXITY_API_KEY": "${input:perplexity-key}"
                }
            }
        }
    }
    ```
2. Check command `MCP: List Servers` to see all available servers, easy access to start/stop and check the server *Output* for logs.

**MCP tools in Copilot Agent Mode**
1. Open *Copilot Edits* view in VS Code, set to *Agent*.
2. Click `🛠️ X` to see enabled MCP tools (should list *Playwright*, *Memory*, *Perplexity*, …)
   1. Servers/tools can be disabled/enabled
3. Try
   1. *"Research with perplexity what the best MCP servers for frontend development are"*
   2. *"Remember to always update the playwright tests when updating pages or layout"*
   3. *"Run the app and check the design with playwright"*

### Things to try



## Development

Use DevContainer in VS Code for development. This will set up a local environment with all the necessary dependencies.

Or run locally:

```bash
npm install
npm run dev
```