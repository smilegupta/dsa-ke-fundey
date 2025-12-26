import Editor from "@monaco-editor/react";

function CodeEditor({
  code,
  onChange,
  onKeyDown,
  placeholder,
  readOnly = false,
}) {
  // Custom cyberpunk theme
  const handleEditorDidMount = (editor, monaco) => {
    // Define custom theme
    monaco.editor.defineTheme("cyberpunk", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6A9955", fontStyle: "italic" },
        { token: "keyword", foreground: "ff2d95" },
        { token: "string", foreground: "00ff9d" },
        { token: "number", foreground: "ffcc00" },
        { token: "type", foreground: "00d4ff" },
        { token: "function", foreground: "00d4ff" },
        { token: "variable", foreground: "e0e0e0" },
        { token: "operator", foreground: "ff2d95" },
        { token: "delimiter", foreground: "ff2d95" },
        { token: "identifier", foreground: "e0e0e0" },
      ],
      colors: {
        "editor.background": "#0a0a12",
        "editor.foreground": "#e0e0e0",
        "editor.lineHighlightBackground": "#1a1a2e",
        "editor.selectionBackground": "#ff2d9540",
        "editor.inactiveSelectionBackground": "#ff2d9520",
        "editorLineNumber.foreground": "#4a4a5a",
        "editorLineNumber.activeForeground": "#00d4ff",
        "editorCursor.foreground": "#00d4ff",
        "editorWhitespace.foreground": "#2a2a3a",
        "editorIndentGuide.background": "#1f1f2f",
        "editorIndentGuide.activeBackground": "#3f3f5f",
        "editor.wordHighlightBackground": "#ff2d9530",
        "editorBracketMatch.background": "#ff2d9530",
        "editorBracketMatch.border": "#ff2d95",
        "scrollbar.shadow": "#000000",
        "scrollbarSlider.background": "#ff2d9530",
        "scrollbarSlider.hoverBackground": "#ff2d9550",
        "scrollbarSlider.activeBackground": "#ff2d9570",
        "minimap.background": "#0a0a12",
      },
    });

    monaco.editor.setTheme("cyberpunk");

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onKeyDown) {
        onKeyDown({
          ctrlKey: true,
          metaKey: true,
          key: "Enter",
          preventDefault: () => {},
        });
      }
    });

    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter,
      () => {
        if (onKeyDown) {
          onKeyDown({
            ctrlKey: true,
            metaKey: true,
            shiftKey: true,
            key: "Enter",
            preventDefault: () => {},
          });
        }
      }
    );

    // Focus the editor
    editor.focus();
  };

  const handleChange = (value) => {
    if (onChange) {
      onChange(value || "");
    }
  };

  return (
    <div className="monaco-editor-container">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        value={code}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        loading={
          <div className="editor-loading">
            <span className="loading-text">Loading editor</span>
            <span className="loading-dots">...</span>
          </div>
        }
        options={{
          fontSize: 14,
          fontFamily:
            "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace",
          fontLigatures: true,
          lineNumbers: "on",
          minimap: {
            enabled: true,
            scale: 1,
            showSlider: "mouseover",
          },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          padding: { top: 16, bottom: 16 },
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: "on",
          smoothScrolling: true,
          renderLineHighlight: "all",
          renderWhitespace: "selection",
          bracketPairColorization: { enabled: true },
          guides: {
            bracketPairs: true,
            indentation: true,
          },
          suggest: {
            showKeywords: true,
            showSnippets: true,
          },
          quickSuggestions: true,
          parameterHints: { enabled: true },
          folding: true,
          foldingHighlight: true,
          showFoldingControls: "mouseover",
          readOnly: readOnly,
          domReadOnly: readOnly,
          placeholder: placeholder,
        }}
      />
    </div>
  );
}

export default CodeEditor;
