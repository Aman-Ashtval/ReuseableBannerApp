import './index.css'

const BannerCardItem = (props) => {
    const {bannerDetails} = props;
    const {id, headerText, description, className} = bannerDetails;
    return (
        <li className={className}>
            <div>
                <h1 className="card-h">{headerText}</h1>
                <p className="card-p">{description}</p>
                <button className="btn">Show more</button>
            </div>
        </li>
    )
}

export default BannerCardItem
