# 🚀 MCP Frontend Starter

A comprehensive toolkit, playground, and starter for integrating MCP[^1] servers with GitHub Copilot's Agent in VS Code. Designed specifically for frontend developers to achieve maximum "vibing"[^2] in their workflow.

## ✨ Supercharge GitHub Copilot with MCP Server Tools

MCP support has just landed in VS Code Insiders (v1.99) as a preview feature, ready to enhance GitHub Copilot's Agent mode (see [open issues](https://github.com/microsoft/vscode/issues?q=is%3Aissue%20state%3Aopen%20MCP%20label%3Achat-mcp)). This integration lets you leverage any MCP server directly in your agentic coding workflow.

⚠️ This is an early preview feature that may evolve. Use it for exploration and fun! Found a bug or have ideas? [File issues here](https://github.com/microsoft/vscode/issues?q=is%3Aissue%20state%3Aopen%20MCP%20label%3Achat-mcp).

## 🏁 Getting Started with MCP

**Prerequisite**: VS Code Insiders (version 1.99 or later) with GitHub Copilot pre-release installed. (👋 Welcome to our early adopter audience!)

### 1. A tour of MCP Servers configurations

Already set up, but feel to edit and add:

1. Servers in `.vscode/mcp.json` are shared as configurations with all repo collaborators:
   - `"servers": {}` follows Claude's structure for `claude_desktop_config.json`
   - `"inputs": []` lets you define custom placeholders for configurations, avoiding hardcoded secrets
    ```jsonc
    // Example .vscode/mcp.json
    {
        // 💡 Inputs will be prompted on first server start,
        //    then stored securely by VS Code.
        "inputs": [
            {
            "type": "promptString",
            "id": "perplexity-key",
            "password": true, // Encrypted at-rest
            "description": "Perplexity API Key"
            }
        ],
        //
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
2. Alternatively, configure `"mcp": {…}` in your VS Code settings for a personalized MCP server list which follows you with with Settings Sync.
3. Enable MCP discovery (`"chat.mcp.discovery.enabled": true`) to use your existing entries from Claude Desktop and other MCP clients. VS Code will show a trust dialog before enabling those servers:
4. Run `MCP: List Servers` to see all available servers, manage them, and check logs in the *Output* panel

### 2. Unleash Copilot Agent Mode with MCP Tools

1. Open *Copilot* view in VS Code and switch to *Agent* mode
2. Click the `🛠️` tools button to see enabled MCP tools (*Playwright*, *Memory*, and *Perplexity* for this repo)
   - Toggle servers/tools on or off as needed
3. Try these prompts that will use tools:
   - *"Research with perplexity what the best MCP servers for frontend development are and create a splashy listing page"*
   - *"Use the playwright tool to check the landing page and fix any ayout bugs"*
   - *"Change the design to a dark-only mode, and do a visual review with playwright"*

**That's it!** You're ready to go. But this is just the beginning—**ANY DEVELOPER TOOL CAN BECOME AN MCP SERVER FOR GITHUB COPILOT**. 🤯 The possibilities are endless.

## 🔍 Next Steps

Try these to expand your MCP capabilities:

- Add more MCP servers from [the official repository](https://github.com/modelcontextprotocol/servers)
- Customize which tools are active based on your current task
- Fine-tune tool usage with `.github/copilot-instructions.md`
- Create your own MCP server in TypeScript, Python, or any language you prefer

## 🛠️ Development Setup

**Easiest option:** Use *DevContainer* in VS Code for a ready-to-go environment with all dependencies.

**Local setup:**

```bash
npm install
npm run dev
```

[^1]: https://modelcontextprotocol.io/introduction
[^2]: https://en.wikipedia.org/wiki/Vibe_coding
