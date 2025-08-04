'use client';

interface CodeHighlightProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeHighlight({ code, language, title }: CodeHighlightProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="my-8 bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
      {title && (
        <div className="bg-slate-800 px-6 py-3 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-300 text-sm font-medium">{title}</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-700"
              title="Copy code"
            >
              <i className="ri-file-copy-line"></i>
            </button>
          </div>
        </div>
      )}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm text-slate-300">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}