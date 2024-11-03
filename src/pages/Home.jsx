import { NavLink } from "react-router-dom";
import Animation from "./Animation";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


export default function Home() {
  <link
    rel="stylesheet"
    href="https://video-react.github.io/assets/video-react.css"
  />
  return (
    <>
      <div className='overflow-hidden'>
        <div className="container mt-7 mb-5" >
          <div className="row">
            <div className="col-md-6">
              <h1 className="homeh1">AI Destekli Akıllı Soru Üretme ve Çözme Platformu</h1>
              <p className="homep1">
              Yapay zeka destekli bu platform ile istediğiniz konuda sorular oluşturabilir, mevcut soruları çözüme ulaştırabilirsiniz. Eğitim sürecinizi hızlandırın ve öğrenme deneyiminizi kişiselleştirin!
              </p>
              <a href="#player" className="mx-2 button button1 " to="/contact">Tanıtım</a>
            </div>
            <div className="col-md-6 ">
              <img
                className="img-fluid about-image"
                src="../src/assets/projeekle.png"
                alt="Hakkında Resim"
              />
            </div>
          </div>
        </div>
        <div className="corner">
          <div>
            <p>
            Projemizin temel amacı, kullanıcıların öğrenme sürecini hızlandırmak ve sorulara erişimi kolaylaştırmaktır. Öğrenciler, konu seçerek veya belirli parametrelerle anında yeni sorular üretebilir ve çözemediği soruları sisteme yükleyerek çözümlere ulaşabilir. Böylece eğitim materyallerine daha kolay ulaşmak mümkün olur ve kişiselleştirilmiş soru setleriyle daha etkili bir öğrenim deneyimi sunulur.

            </p>
          </div>
          
        </div>
        <div className="container" style={{ marginBottom: "10%" }}><Animation></Animation>
        </div>
        <section id="player">
        <Player muted autoPlay loop>
          <source src="../src/assets/tanitim.mp4" />
        </Player></section></div>
      <div className='overflow-hidden'>
        <div className="container mt-7 mb-5" >
          <div className="row">
            <div className="col-md-3">
              <img
                className="img-fluid about-image"
                src="../src/assets/blockchain-2.png"
                alt="Hakkında Resim"
              />
            </div>
            <div className="col-md-6">
              <h1 className="homeh1">Kullandığımız Teknolojiler</h1>
              <p className="homep1">
              Projemiz, kullanıcı dostu bir arayüz ve yüksek performans sağlamak amacıyla HTML, CSS, JavaScript ve React kullanılarak geliştirilmiştir. React kütüphanesi, uygulamanın dinamik yapısını destekleyerek hızlı ve esnek bir kullanıcı deneyimi sunuyor.

              </p>
              <NavLink className="mx-2 button button1 " to="/contact">İletişim</NavLink>
            </div>
            <div className="col-md-3 ">
              <img
                className="img-fluid about-image"
                src="../src/assets/education.png"
                alt="Hakkında Resim"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
