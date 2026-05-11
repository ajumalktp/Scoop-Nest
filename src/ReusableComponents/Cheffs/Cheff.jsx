import React from 'react';
import './Cheff.css';

const team = [
  {
    name: 'Jacob',
    title: 'Flavor Wizard',
    desc: 'Dreams up the wildest combos!',
    image: 'boyy.jpg', // Place in public/assets/Images/
  },
  {
    name: 'Emily',
    title: 'Cone Artist',
    desc: 'In charge of the waffle wonders.',
    image: 'images (4)girlll.jpg',
  },
  {
    name: 'Mike',
    title: 'Chief Tester',
    desc: 'Loves pineapple on everything!',
    image: 'images (4)giiii.jpg',
  },
  {
    name: 'Ethan John',
    title: 'Scooper Extraordinaire',
    desc: 'Master of the perfect scoop.',
    image: 'download (8)boyyyy.jpg',
  },
];

function Cheff() {
  return (
    <div className="about-section">
      <h2 className="section-title">Our Sweet Story</h2>
      <p className="section-description">
        At Scoop’s, every scoop tells a story. What started as a tiny family cart on sunny weekends became a neighborhood favorite. From creamy classics to crazy new flavors, we pour love and laughter into every batch. Our mission? To spread smiles — one cone at a time!
      </p>

      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={`assets/Images/${member.image}`} alt={member.name} />
            <h4>{member.name}</h4>
            <p className="title">{member.title}</p>
            <p className="desc">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cheff;
