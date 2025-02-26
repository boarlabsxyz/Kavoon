'use client';

import { useEffect, useState } from 'react';
import StatusReviews from 'src/components/statusReviewsPage';
import IReview from 'src/types/review';
import st from 'src/components/statusReviewsPage/ReviewAuth.module.css';
import Spinner from 'src/components/common/spinner';

function StatusReviewsPage() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isAuthenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || !Array.isArray(data.data)) {
          throw new Error('Invalid response format');
        }
        setReviews(data.data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('Failed to fetch reviews')
        );
      }
    };

    fetchReviews();
  }, [isAuthenticated]);

  const handleLogin = async () => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
    } else {
      const data = await response.json();
      alert(data.message || 'Authentication failed');
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return (
      <div className={st.container}>
        <h2 className={st.header}>Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className={st.input}
        />
        <button onClick={handleLogin} className={st.button}>
          Submit
        </button>
      </div>
    );
  }

  if (error) {
    return <div>Error loading reviews: {error.message}</div>;
  }

  return <StatusReviews reviews={reviews} />;
}

export default StatusReviewsPage;
