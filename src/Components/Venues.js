import images from '../images/hannah-busing-URVe89DA5Cw-unsplash-bw.jpg';
import weddingCollage from '../images/wedding_photo_collage.jpeg';
// import bgImg from '../images/pexels-itsmeseher-42035630-11951521.jpg';

function Venues() {
    return (
        <div className="venu-timing grid">
            <div className='hero'>
                <h2>
                    Venue & Timing
                </h2>
                <p>
                    Join us
                    for our special day at the stunning Doornkraal, nestled in the heart of Riversdale. The ceremony will begin at 12:00 AM, followed by a reception full of joy, laughter, and celebration. Our venue, known for its beautiful surroundings and elegant ambiance, provides the perfect backdrop for this unforgettable occasion. Please arrive a few minutes early to ensure a seamless start to the festivities. We can’t wait to share this moment with you in such a beautiful setting!
                </p>
                <button className="btn-primary">Contact</button>
            </div>
            <div>
                <img src={images}/>
            </div>
            <div className='gallery'>
                <h2>Gallery</h2>
                <p>Ou photo gallery offers a mix of formal and spontaneous shots, capturing the essence our celebration of love.</p>
                {/* <img src={weddingCollage} alt='Collage of Wedding Photos.'/> */}
                <button className='btn-primary'>View Gallery</button>
            </div>

        </div>
    )
}

export default Venues