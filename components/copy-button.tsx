'use client';

import React from 'react';
import { Check, Copy } from 'lucide-react';
interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={onCopy}
      className="absolute right-2 top-2 rounded-md px-2 py-1 text-xs font-medium text-neutral-400 hover:text-neutral-100 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
} 