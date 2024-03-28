import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from "lightbox.js-react";


const ProfilePhoto = () => {

    const TabOne = [
        {
            bigImage: 'assets/images/e-1.jpg',
        },
        {
            bigImage: 'assets/images/e-2.jpg',
        },
        {
            bigImage: 'assets/images/e-3.jpg',
        },
        {
            bigImage: 'assets/images/e-4.jpg',
        },
        {
            bigImage: 'assets/images/e-5.jpg',
        },
        {
            bigImage: 'assets/images/e-6.jpg',
        },
    ]
    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-flex align-items-center  p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                <a href="/" className="fw-600 ms-auto font-xssss text-primary">See all</a>
            </div>
            <div className="card-body d-block pt-0 pb-2">
                    <SlideshowLightbox className='row'>
                        {TabOne.map((value , index) => (
                            <img key={index} className='rounded-xxxl col-6 mb-1 p-1'  src={value.bigImage} alt="Field with a blue sky"/>
                        ))}
                    </SlideshowLightbox>
            </div>
            <div className="card-body d-block w-100 pt-0">
                <a href="/" className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xxxl"><i className="feather-external-link font-xss me-2"></i> More</a>
            </div>
        </div>
    )
}
export default ProfilePhoto