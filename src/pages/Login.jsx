import { useState } from 'react';
import backgroundImage from './background.jpg'; // Arkaplan resmi
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyası
import { Button, Form, FormGroup, Input } from 'reactstrap'; // Bootstrap bileşenleri

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        {isLoggedIn ? (
          <div>
            <p className="fade-in">Giriş yapıldı!</p>
            <Button className="slide-in" onClick={handleLogout}>Çıkış Yap</Button>
          </div>
        ) : (
          <Form>
            <p><b>UserName:</b></p>
            <FormGroup>
              <Input
                type="text"
                className="fade-in"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <p><b>Password:</b></p>
            <FormGroup>
              <Input
                type="password"
                className="fade-in"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button className="slide-in" onClick={handleLogin}>Giriş Yap</Button>
            <button className="slide-in" onClick={handleLogin} style={{marginLeft:"20%",border:"none", backgroundColor:"transparent"}}>Hesap Oluştur</button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
