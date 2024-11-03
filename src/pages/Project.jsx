import {  Link } from "react-router-dom";

export default function ProjectMath() {
    return (
        <>
            <div className="container">
                <h1>Matematik</h1>
                <Link to={'/projectmath'}>
                <img src="https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?w=1060&t=st=1708177250~exp=1708177850~hmac=beb5dfb1febc7e62c0f6081d6a3bfd2eb1996effdd62c5b818dc196a9b276f78" className="imgcard project-img" alt="..."/>
                <div className="card-body">
                </div>
                </Link>
                <h1>Resimli Çözüm</h1>
                <Link to={'/img-input'}>
                <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="imgcard project-img" alt="..." />
                <div className="card-body" style={{marginTop:'10vh'}}>
                </div>
                </Link>
                <h1>Edebiyat</h1>
                <Link to={'/edebiyat'}>
                <img src="https://perspektif.eu/wp-content/uploads/2020/05/Hollandada-T%C3%BCrk%C3%A7e-Edebiyat.jpg" className="imgcard project-img" alt="..." />
                <div className="card-body">
                </div>
                </Link>
                <h1>Dil</h1>
                <Link to={'/language'}>
                <img src="https://miro.medium.com/v2/resize:fit:1200/1*r-x8VbavKLjL6mSSohhjKw.png" className="imgcard project-img" alt="..." />
                <div className="card-body">
                </div>
                </Link>
                <h1>Genel</h1>
                <Link to={'/inputpage'}>
                <img src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imgcard project-img" alt="..." />
                <div className="card-body" style={{marginTop:'10vh'}}>
                </div>
                </Link>

            </div>
            <footer className='footer2'>
        <p> Supported by Halil Emre Bilici, Abdullah Enes Kopal, Samed Berkan Ünver, Ahmet Salih Aymelek </p>
      </footer>
        </>
    )
}
