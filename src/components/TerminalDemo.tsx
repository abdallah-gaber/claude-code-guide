import { useEffect, useRef, useState } from 'react';

export interface TerminalLine {
  type: 'input' | 'output' | 'comment';
  text: string;
}

interface Props {
  title?: string;
  lines: TerminalLine[];
}

const LINE_DELAY_MS = 550;

export default function TerminalDemo({ title = 'Terminal', lines }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const play = () => {
    setPlaying(true);
    setVisibleCount(0);
  };

  useEffect(() => {
    if (!playing) return;
    if (visibleCount >= lines.length) {
      setPlaying(false);
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, LINE_DELAY_MS);
    return () => clearTimeout(timeoutRef.current);
  }, [playing, visibleCount, lines.length]);

  const finished = visibleCount >= lines.length && !playing;

  return (
    <div className="terminal-demo">
      <div className="terminal-demo-bar">
        <span className="terminal-demo-dots">
          <i /> <i /> <i />
        </span>
        <span className="terminal-demo-title">{title}</span>
      </div>
      <pre className="terminal-demo-body" aria-live="polite">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`terminal-line terminal-line-${line.type}`}>
            {line.type === 'input' ? <span className="terminal-prompt">&gt;</span> : null}
            {line.text}
          </div>
        ))}
        {playing && <span className="terminal-cursor" />}
      </pre>
      <div className="terminal-demo-controls">
        <button type="button" onClick={play} disabled={playing}>
          {visibleCount === 0 ? '▶ Play demo' : finished ? '↻ Replay' : 'Playing…'}
        </button>
      </div>

      <style>{`
        .terminal-demo {
          margin: 1.5rem 0;
          border-radius: 0.6rem;
          overflow: hidden;
          border: 1px solid var(--sl-color-hairline);
          background: #0d1117;
        }
        .terminal-demo-bar {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.9rem;
          background: #161b22;
          border-bottom: 1px solid #21262d;
        }
        .terminal-demo-dots {
          display: inline-flex;
          gap: 0.35rem;
        }
        .terminal-demo-dots i {
          width: 0.65rem;
          height: 0.65rem;
          border-radius: 50%;
          background: #3a3f47;
          display: inline-block;
        }
        .terminal-demo-title {
          color: #8b949e;
          font-size: 0.8rem;
          font-family: var(--__sl-font-mono, monospace);
        }
        .terminal-demo-body {
          margin: 0;
          padding: 1rem 1.1rem;
          min-height: 8rem;
          font-family: var(--__sl-font-mono, monospace);
          font-size: 0.85rem;
          line-height: 1.6;
          color: #c9d1d9;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .terminal-line-input {
          color: #7ee787;
        }
        .terminal-prompt {
          color: #58a6ff;
          margin-right: 0.5rem;
        }
        .terminal-line-comment {
          color: #8b949e;
          font-style: italic;
        }
        .terminal-cursor {
          display: inline-block;
          width: 0.55rem;
          height: 1rem;
          background: #7ee787;
          vertical-align: text-bottom;
          animation: terminal-blink 1s steps(2) infinite;
        }
        @keyframes terminal-blink {
          50% { opacity: 0; }
        }
        .terminal-demo-controls {
          padding: 0.6rem 0.9rem 0.9rem;
          background: #0d1117;
        }
        .terminal-demo-controls button {
          font: inherit;
          font-size: 0.85rem;
          background: #21262d;
          color: #c9d1d9;
          border: 1px solid #30363d;
          border-radius: 0.4rem;
          padding: 0.35rem 0.8rem;
          cursor: pointer;
        }
        .terminal-demo-controls button:hover:not(:disabled) {
          background: #30363d;
        }
        .terminal-demo-controls button:disabled {
          opacity: 0.6;
          cursor: default;
        }
      `}</style>
    </div>
  );
}
