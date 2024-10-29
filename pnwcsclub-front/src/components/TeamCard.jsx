import '/src/styles_components/TeamCard.css';

export default function TeamCard({ name, role, img, about, }) {
    return (
        <div className="team-card">
            {name && <h3>{name}</h3>}
            {role && <p>{role}</p>}
            {img ? <img src={img} alt='${name} picture' /> : <img src="images/defaultImg.jpg" alt="blank profile" />}
            {about && <p>{about}</p>}
        </div>
    );
}

