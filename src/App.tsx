import { useState, useEffect } from 'react';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import LinkSection from './components/LinkSection';
import './styles/global.css';
import profile from "./assets/images/profile.jpg"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const userProfile = {
    name: 'leooo',
    username: 'leooOoo',
    bio: 'Student | Learn Hard, Build, And Sharing ✨',
    avatar: profile,
    tags: ['React', 'React Native', 'Vite', 'NextJS', 'TailwindCSS', 'Django', 'Laravel', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'Kotlin', 'Go-Lang', 'Python', 'C/C++', 'Rust']
  };

  if (!mounted) return null;

  return (
    <div className="app">
      <Background />

      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`container ${!loading ? 'fade-in' : ''}`}>
        <div className="profile">
          <div className="profile-image-container">
            <img
              src={profile}
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-status"></div>
          </div>
          
          <h1 className="profile-name">{userProfile.name}</h1>
          <p className="profile-username">@{userProfile.username}</p>
          
          <div className="profile-tags">
            {userProfile.tags.map((tag, index) => (
              <span key={index} className="profile-tag">{tag}</span>
            ))}
          </div>
          
          <p className="profile-bio">{userProfile.bio}</p>
        </div>

        <LinkSection />

        <footer className="footer">
          <p>© {new Date().getFullYear()} {userProfile.name} - Made with <span className="heart">❤️</span></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
