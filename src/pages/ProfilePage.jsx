import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını projeye ekleyin
import PercentComp from '../companents/PercentComp';

function ProfilePage() {
  return (
    <div className="profile-page d-flex justify-content-center align-items-center container">
      <div className="container3">
        <div className="profile-card animated fadeInUp">
          <img src="https://via.placeholder.com/150" alt="Profil Resmi" className="profile-picture" />
          <h1 className="profile-name">Emre Bilici</h1>
          <hr  style={{margin:"5%"}}/>
          <p className="profile-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut velit vitae ipsum suscipit gravida.</p>
          <div className="profile-buttons">
            <button className="btn btn-primary m-5">Takip Et</button>
            <button className="btn btn-secondary">Mesaj Gönder</button>
          </div>
        </div>
      </div>
      <p className='text-primary tag'> <a href="#">#Tag</a></p>
      <PercentComp></PercentComp>
    </div>
  );
}

export default ProfilePage;