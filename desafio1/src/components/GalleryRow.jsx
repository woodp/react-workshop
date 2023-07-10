import GalleryColumn from "./GalleryColumn";
import images from "../data/images.json";
import { useState, useEffect } from "react";

const GalleryRow = () => {
  const [groups, setGroups] = useState([]);

  const getGroupsOfTwo = () => {
    const groupOfImages = [];
    for (let i = 0; i < images.length; i += 2) {
      groupOfImages.push({ images: images.slice(i, i + 2), key: i });
    }
    return groupOfImages;
  };

  useEffect(() => {
    const groupsOfImages = getGroupsOfTwo();
    setGroups(groupsOfImages);
  }, []);

  return (
    <div className="row">
      {groups.map((group) => (
        <GalleryColumn images={group.images} key={group.key} />
      ))}
    </div>
  );
};

export default GalleryRow;
