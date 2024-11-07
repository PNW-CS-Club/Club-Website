import '/src/styles_components/TeamCard.css';

export default function TeamCard({ name, role, img, about }) {
    return (
        <div className="team-card">
            {img ? <img src={img} alt={`${name} picture`} /> : <img src="/images/defaultImg.jpg" alt="blank profile" />}
            {name && <h3>{name}</h3>}
            {role && <p>{role}</p>}
            {about && <p>{about}</p>}
        </div>
    );
}

