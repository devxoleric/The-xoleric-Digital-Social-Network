import React from 'react';

export default function TweetCard({ tweet }: any) {
  const author = tweet.author || { username: 'unknown', display_name: 'Unknown' };
  return (
    <article className="x-card">
      <div className="x-row">
        <div className="avatar" />
        <div className="Xabar-body">
          <header className="x-header">
            <strong>{author.display_name}</strong>
            <span className="meta">@{author.username} · {new Date(tweet.created_at).toLocaleString()}</span>
          </header>
          <div className="tweet-content">{tweet.content}</div>
          <footer className="tweet-actions">
            <span>Reply</span>
            <span>Repost</span>
            <span>Like</span>
            <span>Share</span>
          </footer>
        </div>
      </div>
    </article>
  );
              }
