1. Use pnpm instead of npm to save storage.
Prefer using lightweight desktop frameworks like Tauri over Electron to minimize resource usage and storage footprint.

2. For local development and builds, use pnpm to install dependencies and manage packages, as it is more efficient and conserves disk space compared to npm or yarn.

3. When building desktop applications, ensure that assets and dependencies are bundled efficiently to avoid unnecessary bloat in the final distributable.

4. Encourage the use of SQLite or other embedded databases for offline desktop functionality to keep the application self-contained and storage-efficient.

5. Avoid including large, unused libraries or assets in the desktop build; regularly audit dependencies for necessity and size.

6. Use sequential-thinking and memory tools reqularly to work efficiently.

7. Regularly update README.md, project.md, plan.md and other documents if stated.

8. Always try to generate relevant code beforehand and fix errors automatically.

9. Next Steps suggestions should be clearly documented in project.md for every turn.
