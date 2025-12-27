import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Compose({ onPosted }: any) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const post = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const { data, error } = await supabase.from('tweets').insert([{ content: text }]).select().single();
    setLoading(false);
    if (error) {
      console.error(error);
      return;
    }
    setText('');
    onPosted && onPosted(data);
  };

  return (
    <div className="compose">
      <div className="compose-row">
        <div className="avatar" />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening?"
          maxLength={280}
        />
      </div>
      <div className="compose-footer">
        <span className="counter">{text.length}/280</span>
        <button className="tweet-btn" disabled={!text.trim() || loading} onClick={post}>
          {loading ? 'Posting...' : 'Xabar'}
        </button>
      </div>
    </div>
  );
}
