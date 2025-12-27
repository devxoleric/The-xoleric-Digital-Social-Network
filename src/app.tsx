import React, { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import Sidebar from './components/Sidebar';
import TweetCard from './components/TweetCard';
import Compose from './components/Compose';
import HeadMeta from './components/HeadMeta';

type Tweet = {
  id: string;
  content: string;
  created_at: string;
  author: { username: string; display_name: string; avatar_url?: string } | null;
};

export default function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('tweets')
        .select('*, author:profiles(username, display_name, avatar_url)')
        .order('created_at', { ascending: false })
        .limit(50);
      setTweets((data as any) || []);
    }
    load();

    const channel = supabase
      .channel('public:tweets')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tweets' }, (payload) => {
        setTweets((s) => [payload.new as any, ...s]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <HeadMeta
        title="XOLERIC"
        description="XOLERIC — blog"
        image="https://i.ibb.co/xtGWWnb/preview-1200x630.png"
        url="https://devxoleric.github.io/The-xoleric-Digital-Social-Network"
      />
      <div className="layout">
        <aside className="left">
          <Sidebar />
        </aside>
        <main className="main">
          <Compose onPosted={(t: any) => setTweets((s) => [t, ...s])} />
          <section>
            {tweets.map((t) => (
              <TweetCard key={t.id} tweet={t} />
            ))}
          </section>
        </main>
        <aside className="right">
          {/* trends / suggestions */}
        </aside>
      </div>
    </>
  );
}
