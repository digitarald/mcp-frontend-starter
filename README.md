# 🛠️ MCP Frontend Starter

Explainer, playground and starter for using MCP[1] servers in VS Code with [GitHub Copilot's Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode), focusing on frontend development for maximum "vibing"[2].

## Extend GitHub Copilot with MCP server tools

MCP support just landed in VS Code Insiders (v1.99) as preview feature, ready to be used with GitHub Copilot's Agent mode (see [open issues](https://github.com/microsoft/vscode/issues?q=is%3Aissue%20state%3Aopen%20MCP%20label%3Achat-mcp)). This allows you to use any MCP server in your agentic coding workflow.

⚠️ This is a preview feature and may change in the future. Use at your own risk, but especially for fun and exploration! [File issues](https://github.com/microsoft/vscode/issues?q=is%3Aissue%20state%3Aopen%20MCP%20label%3Achat-mcp) if you find bugs or have suggestions.

### Getting Started with MCP

#### 1. Prerequisites

1. Use VS Code Insiders (version 1.99 or later)
2. Enable MCP discovery in settings if you want to use your MCP servers defined in Claude Desktop.
    ```json
    "chat.mcp.discovery.enabled": true
    ```

#### 2. Configuring MCP servers

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

#### Access MCP tools in Copilot Agent Mode

1. Open *Copilot Edits* view in VS Code, set to *Agent*.
2. Click `🛠️ X` to see enabled MCP tools (should list *Playwright*, *Memory*, *Perplexity*, …)
   1. Servers/tools can be disabled/enabled
3. Try these prompts in agent mode:
   1. *"Research with perplexity what the best MCP servers for frontend development are"*
   2. *"Use the playwright tool to check that the waitlist input does email validation"*
   3. *"Change the design to a dark-only mode, and do a visual review with playwright"*

### Next Steps

Things to try out:

- Add more MCP servers to `.vscode/mcp.json` from https://github.com/modelcontextprotocol/servers
- Enable/disable servers in the *Copilot Edits* view based on your task
- Use `.github/copilot-instructions.md` to fine-tune when and how tools are used
- Write your own MCP server in TypeScript, Python, or any other language

## Development

Use DevContainer in VS Code for development. This will set up a local environment with all the necessary dependencies.

Or run locally:

```bash
npm install
npm run dev
```

[1]: https://modelcontextprotocol.io/introduction
[2]: https://en.wikipedia.org/wiki/Vibe_coding