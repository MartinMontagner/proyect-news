
import NewsList from '@/components/news-list';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <main>
      <h2>Latest News</h2>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
}