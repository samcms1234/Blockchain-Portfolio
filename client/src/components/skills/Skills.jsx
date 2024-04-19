import React, { useEffect, useState } from 'react'
import './Skills.css'

const Skills = () => {

  const [imageSrcs, setImageSrcs] = useState([]);
  const iconNames = ['ethereum', 'ganache', 'bitcoin', 'reactjs', 'chainlink', 'truffle', 'nft', 'sass'];


  useEffect(() => {
    const fetchImages = async () => {
      const promises = iconNames.map(async (iconName) => {
        try {
          const response = await fetch(`https://red-keen-chicken-777.mypinata.cloud/ipfs/QmckMFzCsrpV3MJppWmnffWBe6C1JbcSWr1juW6be8NLpN/${iconName}.png`);
          if (response.ok) {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
          } else {
            console.error(`Failed to fetch image from ${iconName}`);
            return null;
          }
        } catch (error) {
          console.error(`Error fetching image from ${iconName}:`, error);
          return null;
          }
      });

      // Wait for all promises to resolve
      const imageSources = await Promise.all(promises);
      setImageSrcs(imageSources.filter((src) => src !== null));
    };

    fetchImages();

    imageSrcs.forEach((src) => URL.revokeObjectURL(src));
    
  });
  
  return (
    <section className="skills-section">

        {imageSrcs.map((src, index) => (
            <img src={src}/>
          ))
        }

    </section>
  )
}

export default Skills
